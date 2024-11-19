import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const CONTENT_PATH = "content/";
const POST_PATH = "post/";
const EXTENSION = ".md";
const FIELDS = ["slug", "tags", "draft"];
const TMP_PATH = "./app/tmp";
const TMP_FILE_NAME = "build.json";

const getContentsByPath = (
  pathPrefix = `${CONTENT_PATH}${POST_PATH}`,
  extension = EXTENSION
) => {
  return fs.globSync(`${pathPrefix}**/*${extension}`);
};

const getSlugFromPath = (
  path,
  stripText = `${CONTENT_PATH}${POST_PATH}`,
  extension = EXTENSION
) => {
  return path.replace(stripText, "").replace(extension, "");
};

const getPostByPath = (
  path,
  fields,
  pathPrefix = `${CONTENT_PATH}${POST_PATH}`,
  extension = EXTENSION
) => {
  const realSlug = getSlugFromPath(path);
  const fullPath = join(process.cwd(), `${pathPrefix}${realSlug}${extension}`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  const items = fields.reduce((acc, cur) => {
    if (data[cur]) {
      acc[cur] = data[cur];
    }

    if (cur === "slug") {
      acc[cur] = realSlug;
    }

    return acc;
  }, {});

  return items;
};

const generateBuildData = async () => {
  try {
    const allPostsPath = getContentsByPath();
    const posts = allPostsPath
      .map((path) => getPostByPath(path, FIELDS))
      .filter((post) => !post.draft);

    const slugs = posts.map((post) => post.slug);

    const filterTags = posts
      .filter((post) => post.tags !== null)
      .map((post) => post.tags);
    const tags = [...new Set(filterTags.flat())];

    const data = JSON.stringify({ slugs, tags, totalPosts: posts.length });
    await fs.promises.mkdir(TMP_PATH, { recursive: true });
    fs.writeFile(`${TMP_PATH}/${TMP_FILE_NAME}`, data, "utf8", (err) =>
      console.log(err)
    );
    return;
  } catch (error) {
    console.log(error);
    return -1;
  }
};

const cleanUpTmpDir = async (filePath) => {
  try {
    fs.accessSync(filePath);
    await fs.promises.rm(filePath, { recursive: true });
  } catch (error) {
    console.error(error);
    return;
  }
};

await cleanUpTmpDir(TMP_PATH);
await generateBuildData();
