import { createRoute } from "honox/factory";
import { getAllPosts } from "#/lib/posts";
import { SITE_NAME, SITE_DESCRIPTION, BASE_PATH } from "#/consts";

async function generateFeedXml(): Promise<string> {
  let xml = `
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${SITE_NAME}</title>
      <link>${BASE_PATH()}</link>
      <description>${SITE_DESCRIPTION}</description>
      <language>ja</language>
      <copyright>${SITE_NAME}</copyright>
      <atom:link href="${BASE_PATH()}" rel="self" type="application/rss+xml" />
    `;

  const allPosts = await getAllPosts([
    "date",
    "slug",
    "draft",
    "eyecatch",
    "title",
    "lastmod",
    "description",
  ]);

  const filteredPosts = allPosts.posts.filter((post) => !post.draft);

  filteredPosts.forEach((post) => {
    xml += "<item>";
    xml += `
      <title>${post.title.replace(/&/g, "&amp;")}</title>
      <link>${BASE_PATH()}/${post.slug}</link>
      <pubDate>${new Date(post.date).toISOString()}</pubDate>
      <guid>${BASE_PATH()}/${post.slug}</guid>
  `;

    if (post.eyecatch) {
      xml += `<description><![CDATA[<img src="${BASE_PATH()}/static${
        post.eyecatch
      }">${post.description}]]></description>`;
    } else {
      xml += `<description><![CDATA[${post.description}]]></description>`;
    }

    xml += "</item>";
  });

  xml += `
    </channel>
    </rss>
    `;
  return xml;
}

export default createRoute(async (c) => {
  const xml = await generateFeedXml();
  c.res.headers.set("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  c.res.headers.set("Content-Type", "application/xml");

  return c.body(xml, 200);
});
