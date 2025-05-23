import { html } from "hono/html";
import { Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";
import { SITE_NAME } from "#/consts";
import { Meta } from "#/components/Meta";
import { Layout } from "#/components/Layout";
import { Header } from "#/components/Header";
import { Footer } from "#/components/Footer";

const GA_TRACKING_ID = "G-5GKP3RLDMV";

export default jsxRenderer(({ children, title, post }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/static/styles.css" rel="stylesheet" />
        <title>{title ? title : SITE_NAME}</title>
        <Meta tags={post} />
        {!import.meta.env.DEV &&
          html` <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}"
            ></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());

              gtag("config", "${GA_TRACKING_ID}");
            </script>`}
        <Script src="/app/client.ts" async />
        <Style />
      </head>
      <body>
        <Layout>
          <Header />
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  );
});
