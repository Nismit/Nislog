import { FC, Fragment } from "hono/jsx";
import MetaType from "../../types/meta";
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_OGP_IMAGE,
  BASE_PATH,
} from "../../consts";

type Props = {
  tags?: MetaType;
};

export const Meta: FC<Props> = ({ tags }) => (
  <Fragment>
    <title key="title">{tags?.title ? tags.title : SITE_NAME}</title>
    <meta
      name="description"
      key="description"
      content={tags?.description ? tags.description : SITE_DESCRIPTION}
    />

    {tags?.date ? (
      <meta property="article:published_time" content={tags.date} />
    ) : null}
    {tags?.lastmod ? (
      <meta property="article:modified_time" content={tags.lastmod} />
    ) : null}

    <meta
      property="og:type"
      key="og_type"
      content={tags?.type ? tags.type : "website"}
    />
    <meta
      property="og:title"
      key="og_title"
      content={tags?.title ? tags.title : SITE_NAME}
    />
    <meta
      property="og:description"
      key="og_description"
      content={tags?.description ? tags.description : SITE_DESCRIPTION}
    />
    <meta
      property="og:url"
      key="og_URL"
      content={tags?.slug ? `${BASE_PATH()}/${tags.slug}` : ""}
    />
    <meta
      property="og:image"
      key="og_image"
      content={
        tags?.eyecatch
          ? `${BASE_PATH()}/${tags.eyecatch}`
          : `${BASE_PATH()}/${SITE_OGP_IMAGE}`
      }
    />
    <meta
      property="og:site_name"
      key="og_site_name"
      content={tags?.title ? tags.title : SITE_NAME}
    />

    <meta
      name="twitter:card"
      key="twitter_card"
      content="summary_large_image"
    />
    <meta
      name="twitter:description"
      key="twitter_description"
      content={tags?.description ? tags.description : SITE_DESCRIPTION}
    />
    <meta name="twitter:site" key="twitter_site" content="@nismit_" />
    <meta
      name="twitter:image"
      key="twitter_img"
      content={
        tags?.eyecatch
          ? `${BASE_PATH()}/${tags.eyecatch}`
          : `${BASE_PATH()}/${SITE_OGP_IMAGE}`
      }
    />

    {/* <meta name="robots" content={`${tags.robots}`}/> */}

    {tags?.slug ? (
      <link
        rel="canonical"
        key="canonical"
        href={`${BASE_PATH()}/${tags.slug}`}
      />
    ) : null}
  </Fragment>
);
