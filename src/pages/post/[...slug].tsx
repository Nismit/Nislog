import React from "react";
import * as production from "react/jsx-runtime";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact, { Options } from "rehype-react";
import { getAllPosts, getPostBySlug, getPostsFromTag } from "../../lib/api";
import { markdownToHtml } from "../../lib/transpiler";
import PostType from "../../../types/post";
import HeadMeta from "../../components/HeadMeta";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Article from "../../components/Article";
import Footer from "../../components/Footer";
import Tags from "../../components/Tags";
import Content from "../../components/Content";
import ContentHeader from "../../components/ContentHeader";
import ContentFooter from "../../components/ContentFooter";
import AuthorCard from "../../components/AuthorCard";
import RelatedPosts from "../../components/RelatedPosts";
import Picture from "../../components/Picture";

type Props = {
  post: PostType;
  content: string;
  relatedPosts: PostType[];
};

const rehypeReactOptions: Options = {
  passNode: true,
  // @ts-expect-error: the react types are missing.
  Fragment: production.Fragment,
  // @ts-expect-error: the react types are missing.
  jsx: production.jsx,
  // @ts-expect-error: the react types are missing.
  jsxs: production.jsxs,
  components: {
    img: Picture,
  },
};

const processor = unified()
  .use(rehypeParse, { fragment: true })
  .use(rehypeReact, rehypeReactOptions);

const Post: React.FC<Props> = ({ post, content, relatedPosts }) => {
  const router = useRouter();
  const meta = {
    slug: post.slug,
    title: post.title,
    date: post.date,
    lastmod: post.lastmod,
    eyecatch: post.eyecatch,
    description: post.description,
    type: "article",
  };

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <HeadMeta tags={meta} />
      <Header />
      <Article>
        <ContentHeader
          title={post.title}
          date={post.date}
          lastmod={post.lastmod}
          eyecatch={post.eyecatch}
        />
        <Content>{processor.processSync(content).result}</Content>
        <Tags data={post.tags} />
        <ContentFooter slug={post.slug} title={post.title} />
      </Article>
      <AuthorCard />
      {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
      <Footer />
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: [string];
  };
};

export async function getStaticProps({ params }: Params) {
  params.slug.unshift("content");
  params.slug.unshift("post");
  const slug = params.slug.join("/");
  const post = getPostBySlug(slug, [
    "title",
    "description",
    "date",
    "lastmod",
    "slug",
    "draft",
    "eyecatch",
    "content",
    "toc",
    "tags",
  ]);

  const contentHTML = await markdownToHtml(post.content);
  const content = contentHTML.toString();

  const tags: string[] = [...new Set(post.tags)];
  const postsFromTags = await getPostsFromTag(tags, [
    "tags",
    "date",
    "slug",
    "draft",
    "title",
    "eyecatch",
  ]);

  const removeDuplicate = postsFromTags.posts.filter(
    (_post) => _post.slug !== post.slug
  );
  const filteredPostsFromTags = removeDuplicate.filter((_post) => !_post.draft);

  return {
    props: {
      post: { ...post },
      content: content,
      relatedPosts: filteredPostsFromTags,
    },
  };
}

// Using Dynamic Routing
// post/[...slug].tsx allows /post/a, /post/a/b...
// but the slug should be an array (e.g. ['a', 'b])
// Current array is ['post', '2020', '01', 'something']
// post is fixed path, so the slug should be ['2020','01','something']
export async function getStaticPaths() {
  const allPosts = await getAllPosts(["slug"]);

  return {
    paths: allPosts.posts.map((posts) => {
      const path = posts.slug.split("/");
      path.shift();

      return {
        params: {
          slug: path,
        },
      };
    }),
    fallback: false,
  };
}
