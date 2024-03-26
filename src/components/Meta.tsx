import { FC, Fragment } from "hono/jsx";
import {
  META_DESCRIPTION,
  META_TITLE,
  META_OGP_IMAGE,
  TWITTER_USER_NAME,
} from "../consts";

interface Props {
  title?: string;
}

export const Meta: FC<Props> = ({ title }) => {
  return (
    <Fragment>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="description" content={META_DESCRIPTION} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title ?? META_TITLE} />
      <meta property="og:description" content={META_DESCRIPTION} />
      <meta property="og:url" content="" />
      <meta property="og:image" content={META_OGP_IMAGE} />
      <meta property="og:site_name" content={title ?? META_TITLE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={META_DESCRIPTION} />
      <meta name="twitter:site" content={TWITTER_USER_NAME} />
      <meta name="twitter:image" content={META_OGP_IMAGE} />
    </Fragment>
  );
};
