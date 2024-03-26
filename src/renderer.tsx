import { jsxRenderer } from "hono/jsx-renderer";
import { Meta } from "./components/Meta";

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html>
      <head>
        <Meta title={title} />
        <link href="/static/style.css" rel="stylesheet" />
        <title>{title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
});
