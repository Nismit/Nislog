import fs from "fs";
import fg from "fast-glob";
import { join } from "path";
import matter from "gray-matter";

export async function getAllPostsPath() {
  return await fg("content/post/**/*.md");
}

export async function getAllPosts(fields: string[] = []) {
  const allPostsPath = await getAllPostsPath();
  const posts = allPostsPath
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return { posts, totalPosts: posts.length };
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/content\//, "").replace(/\.md$/, "");
  const fullPath = join(process.cwd(), `content/${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }

    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export async function getAllTags() {
  const allPostsPath = await getAllPostsPath();
  const allTags = allPostsPath.map((slug) => getTagsFromPosts(slug));
  const filter = allTags.filter((tag) => tag !== null);
  const tags = [...new Set(filter.flat())];
  return tags;
}

export function getTagsFromPosts(slug: string) {
  const fileContents = fs.readFileSync(slug, "utf8");
  const { data } = matter(fileContents);
  return !data["draft"] ? data["tags"] : null;
}

export async function getPostsFromTag(tag: string[], fields: string[] = []) {
  const allPostsPath = await getAllPostsPath();
  const posts = allPostsPath
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  const filteredPosts = posts.filter((post) => {
    let hasTag = false;
    for (let i = 0; i < tag.length; i++) {
      if (post.tags.includes(tag[i])) {
        hasTag = true;
        break;
      }
    }
    return hasTag;
  });

  return { posts: filteredPosts, totalPosts: filteredPosts.length };
}
