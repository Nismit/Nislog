export const MAX_DISPLAY_ITEM = 10;
export const ASSETS_PREFIX_PATH = "/static";
export const DEFAULT_FIELDS = [
  "date",
  "title",
  "eyecatch",
  "description",
  "tags",
];

export const BASE_PATH = () => {
  if (import.meta.env.MODE === "development") {
    return "http://localhost:5173";
  }

  return "https://blog.nismit.me";
};

export const SITE_NAME = "NISLOG";
export const SITE_DESCRIPTION =
  "フロントエンドやバックエンドに関する情報や勉強した事をアウトプットしています。カナダのバンクーバー在住ならではの情報なども少し書いています。";
export const SITE_OGP_IMAGE = "static/images/og_image.jpg";
