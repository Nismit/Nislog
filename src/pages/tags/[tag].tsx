import PostType from "../../../types/post";
import { getPostsFromTag, getAllTags } from "../../lib/api";
import HeadMeta from "../../components/HeadMeta";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Post from "../../components/Post";
import TagCloud from "../../components/TagCloud";
import Pagination from "../../components/Pagination";

type Props = {
  allPosts: PostType[];
  totalCounts: number;
  allTags: [string];
  tag: string;
};

type StaticProps = {
  params: { tag: string };
};

export default function index({ allPosts, totalCounts, allTags, tag }: Props) {
  const meta = {};

  return (
    <Layout>
      <HeadMeta tags={meta} />
      <Header />
      <h1 style={{ textAlign: "center" }}>Tag: {tag}</h1>
      {allPosts.map((postData) => (
        <Post post={postData} key={postData.date} />
      ))}
      {/* <Pagination totalCounts={totalCounts} currentPageNumber={pageIndex} /> */}
      <TagCloud tags={allTags} />
      <Footer />
    </Layout>
  );
}

export async function getStaticProps({ params }: StaticProps) {
  const allTagPosts = await getPostsFromTag(
    [params.tag],
    ["date", "slug", "tags", "draft", "title", "lastmod", "description"]
  );

  // const nextNumberOfPosts = 5 * params.page; // 5 * 2 (current page)
  // const filteredPosts = allPosts.posts.filter((post) => !post.draft);
  // const slicedPosts = filteredPosts.slice((nextNumberOfPosts - 5), nextNumberOfPosts);

  const allTags = await getAllTags();

  return {
    props: {
      allPosts: allTagPosts.posts,
      totalCounts: allTagPosts.totalPosts,
      allTags,
      tag: params.tag,
    },
  };
}

export async function getStaticPaths() {
  const allTags = await getAllTags();
  // const allPosts = await getAllPosts(['slug']);
  const tagParams: any = [];
  allTags.forEach((tag) => {
    tagParams.push({ params: { tag: tag } });
  });

  return {
    // Opt-in to on-demand generation for non-existent pages
    fallback: false,
    paths: tagParams,
  };
}
