import { readFileSync, globSync } from "node:fs";
import { join } from "path";
import matter from "gray-matter";

interface Post {
  slug: string;
  content: string;
  [key: string]: string;
}

const CONTENT_PATH = "content/";
const POST_PATH = "post/";
const EXTENSION = ".md";

const getContentsByPath = (
  pathPrefix = `${CONTENT_PATH}${POST_PATH}`,
  extension = EXTENSION
) => {
  return globSync(`${pathPrefix}**/*${extension}`);
};

const getSlugFromPath = (
  path: string,
  stripText = CONTENT_PATH,
  extension = EXTENSION
) => {
  return path.replace(stripText, "").replace(extension, "");
};

const getTagsFromPosts = (slug: string): string | null => {
  const fileContents = readFileSync(slug, "utf8");
  const { data } = matter(fileContents);
  return !data["draft"] ? data["tags"] : null;
};

export const getPostBySlug = <T = {}>(
  slug: string,
  fields: string[] = [],
  pathPrefix = CONTENT_PATH,
  extension = EXTENSION
): T & Post => {
  const realSlug = getSlugFromPath(slug);
  const fullPath = join(process.cwd(), `${pathPrefix}${realSlug}${extension}`);
  const fileContents = readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: Post = {
    slug: realSlug,
    content,
  };

  fields.forEach((field) => {
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items as T & Post;
};

// TODO: Generate Post List as JSON
export const getAllPosts = async <T>(fields: string[] = ["date"]) => {
  const allPostsPath = getContentsByPath();
  const posts = allPostsPath
    .map((slug) => getPostBySlug<T>(slug, fields))
    .sort((prev, next) => (prev.date > next.date ? -1 : 1));
  return { posts, totalPosts: posts.length };
};

// TODO: Generate Tag List as JSON
export const getAllTags = async () => {
  const allPostsPath = getContentsByPath();
  const allTags = allPostsPath.map((slug) => getTagsFromPosts(slug));
  const filter = allTags.filter(
    (tag): tag is Exclude<typeof tag, null> => tag !== null
  );
  const tags = [...new Set(filter.flat())].sort((a, b) => a.localeCompare(b));
  return tags;
};

export const getPostsFromTag = async <T>(
  tag: string[],
  fields: string[] = []
) => {
  const allPostsPath = getContentsByPath();
  const posts = allPostsPath
    .map((slug) => getPostBySlug<T>(slug, fields))
    .sort((prev, next) => (prev.date > next.date ? -1 : 1));

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
};
