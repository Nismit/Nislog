import { getAllPosts } from "../lib/api";
import { GetServerSidePropsContext } from "next";

export const getServerSideProps = async ({
  res,
}: GetServerSidePropsContext) => {
  const xml = await generateSitemapXml();

  res.statusCode = 200;
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  res.setHeader("Content-Type", "text/xml");
  res.end(xml);

  return {
    props: {},
  };
};

async function generateSitemapXml(): Promise<string> {
  let xml = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

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
    xml += `
      <url>
        <loc>${process.env.NEXT_PUBLIC_BASE_URL}/${post.slug}</loc>
        <lastmod>${post.lastmod}</lastmod>
      </url>
    `;
  });

  xml += `</urlset>`;
  return xml;
}

const Page = () => null;

export default Page;
