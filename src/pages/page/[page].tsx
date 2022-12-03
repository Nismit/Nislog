import { MAX_DISPLAY_ITEM } from "../../const";
import PostType from "../../../types/post";
import { getAllPosts, getAllTags } from "../../lib/api";
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
  pageIndex: number;
  allTags: [string];
};

type StaticProps = {
  params: { page: number };
};

export default function index({
  allPosts,
  totalCounts,
  pageIndex,
  allTags,
}: Props) {
  const meta = {};

  return (
    <Layout>
      <HeadMeta tags={meta} />
      <Header />
      {allPosts.map((postData) => (
        <Post post={postData} key={postData.date} />
      ))}
      <Pagination totalCounts={totalCounts} currentPageNumber={pageIndex} />
      <TagCloud tags={allTags} />
      <Footer />
    </Layout>
  );
}

export async function getStaticProps({ params }: StaticProps) {
  const allPosts = await getAllPosts([
    "date",
    "slug",
    "draft",
    "title",
    "lastmod",
    "description",
  ]);

  const nextNumberOfPosts = MAX_DISPLAY_ITEM * (params.page - 1);
  const filteredPosts = allPosts.posts.filter((post) => !post.draft);
  const slicedPosts = filteredPosts.slice(
    nextNumberOfPosts,
    nextNumberOfPosts + MAX_DISPLAY_ITEM
  );

  const allTags = await getAllTags();

  return {
    props: {
      allPosts: slicedPosts,
      totalCounts: allPosts.totalPosts,
      pageIndex: params.page,
      allTags,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPosts(["slug"]);
  const pageParams = [];
  for (
    let i = 1;
    i < Math.ceil(allPosts.totalPosts / MAX_DISPLAY_ITEM) + 1;
    i++
  ) {
    pageParams.push({ params: { page: `${i}` } });
  }

  return {
    // Opt-in to on-demand generation for non-existent pages
    fallback: false,
    paths: pageParams,
  };
}
