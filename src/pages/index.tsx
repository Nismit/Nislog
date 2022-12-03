import PostType from "../../types/post";
import { MAX_DISPLAY_ITEM } from "../const";
import { getAllPosts, getAllTags } from "../lib/api";
import HeadMeta from "../components/HeadMeta";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Post from "../components/Post";
import TagCloud from "../components/TagCloud";
import Pagination from "../components/Pagination";

type Props = {
  allPosts: PostType[];
  totalCounts: number;
  allTags: string[];
};

export default function index({ allPosts, totalCounts, allTags }: Props) {
  const meta = {};

  return (
    <Layout>
      <HeadMeta tags={meta} />
      <Header />
      {
        // When you use map(), you should set props type
        // props = { data: foo, key: number | string etc... }
        allPosts.map((postData) => (
          <Post post={postData} key={postData.date} />
        ))
      }
      <Pagination totalCounts={totalCounts} />
      <TagCloud tags={allTags} />
      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPosts([
    "date",
    "slug",
    "draft",
    "title",
    "lastmod",
    "description",
  ]);

  const filteredPosts = allPosts.posts.filter((post) => !post.draft);
  const slicedPosts = filteredPosts.slice(0, MAX_DISPLAY_ITEM);

  const allTags = await getAllTags();

  return {
    props: {
      allPosts: slicedPosts,
      totalCounts: allPosts.totalPosts,
      allTags,
    },
  };
}
