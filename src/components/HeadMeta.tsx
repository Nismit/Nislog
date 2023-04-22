import Head from "next/head";
import data from "../site.json";
import MetaType from "../../types/meta";

type Props = {
  tags: MetaType;
};

const HeadMeta: React.FC<Props> = ({ tags }) => (
  <Head>
    <title key="title">{tags.title ? tags.title : data.siteName}</title>
    <meta
      name="description"
      key="description"
      content={tags.description ? tags.description : data.siteDescription}
    />

    {tags.date ? (
      <meta property="article:published_time" content={tags.date} />
    ) : null}
    {tags.lastmod ? (
      <meta property="article:modified_time" content={tags.lastmod} />
    ) : null}

    <meta
      property="og:type"
      key="og_type"
      content={tags.type ? tags.type : "website"}
    />
    <meta
      property="og:title"
      key="og_title"
      content={tags.title ? tags.title : data.siteName}
    />
    <meta
      property="og:description"
      key="og_description"
      content={tags.description ? tags.description : data.siteDescription}
    />
    <meta
      property="og:url"
      key="og_URL"
      content={
        tags.slug ? `${process.env.NEXT_PUBLIC_BASE_URL}/${tags.slug}` : ""
      }
    />
    <meta
      property="og:image"
      key="og_image"
      content={
        tags.eyecatch
          ? `${process.env.NEXT_PUBLIC_BASE_URL}/${tags.eyecatch}`
          : `${process.env.NEXT_PUBLIC_BASE_URL}${data.siteImage}`
      }
    />
    <meta
      property="og:site_name"
      key="og_site_name"
      content={tags.title ? tags.title : data.siteName}
    />

    <meta
      name="twitter:card"
      key="twitter_card"
      content="summary_large_image"
    />
    <meta
      name="twitter:description"
      key="twitter_description"
      content={tags.description ? tags.description : data.siteDescription}
    />
    <meta name="twitter:site" key="twitter_site" content={`@${data.twitter}`} />
    <meta
      name="twitter:image"
      key="twitter_img"
      content={
        tags.eyecatch
          ? `${process.env.NEXT_PUBLIC_BASE_URL}/${tags.eyecatch}`
          : `${process.env.NEXT_PUBLIC_BASE_URL}${data.siteImage}`
      }
    />

    {/* <meta name="robots" content={`${tags.robots}`}/> */}

    {tags.slug ? (
      <link
        rel="canonical"
        key="canonical"
        href={`${process.env.NEXT_PUBLIC_BASE_URL}/${tags.slug}`}
      />
    ) : null}
  </Head>
);

export default HeadMeta;
