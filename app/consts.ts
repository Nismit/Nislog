export const MAX_DISPLAY_ITEM = 20;
export const ASSETS_PREFIX_PATH = "/static";
export const DEFAULT_FIELDS = [
  "draft",
  "date",
  "title",
  "eyecatch",
  "description",
  "tags",
  "lastmod",
];

export const BASE_PATH = () => {
  return !import.meta.env.PROD
    ? "http://localhost:5173"
    : "https://blog.nismit.me";
};

export const SITE_NAME = "NISLOG";
export const SITE_DESCRIPTION =
  "フロントエンドやバックエンドに関する情報や勉強した事をアウトプットしています。カナダのバンクーバー在住ならではの情報なども少し書いています。";
export const SITE_OGP_IMAGE = `${ASSETS_PREFIX_PATH}/images/og_image.jpg`;
