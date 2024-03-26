import { html } from "hono/html";
import { Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";
import { Meta } from "#/components/Meta";
import { Layout } from "#/components/Layout";
import { Header } from "#/components/Header";
import { Footer } from "#/components/Footer";

const GA_TRACKING_ID = "UA-90679064-2";

export default jsxRenderer(({ children, title, post }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" type="image/x-icon" href="/static/favicon.ico"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/static/styles.css" rel="stylesheet" />
        <title>{title}</title>
        <Meta tags={post} />
        {html`
          <script>
            (() => {
              const theme = localStorage.getItem("colorTheme");
              if (theme !== null) {
                document.querySelector("html").classList.add(theme);
                return;
              }

              const isSystemDarkMode =
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches;

              if (isSystemDarkMode) {
                document.querySelector("html").classList.add("dark");
              } else {
                document.querySelector("html").classList.add("light");
              }
            })();
          </script>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}"
          />
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "${GA_TRACKING_ID}", {
              page_path: window.location.pathname,
            });
          </script>
        `}
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
