import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import hydrate from 'next-mdx-remote/hydrate';
import { MdxRemote } from 'next-mdx-remote/types';
import renderToString from 'next-mdx-remote/render-to-string';
import { getAllPosts, getPostBySlug, getPostsFromTag } from '../../lib/api';
import PostType from '../../../types/post';
import HeadMeta from '../../components/HeadMeta';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Iframe from '../../components/iframe';
import Tags from '../../components/tags';
import Content from '../../components/Content';
import ContentHeader from '../../components/ContentHeader';
import ContentFooter from '../../components/ContentFooter';
import AuthorCard from '../../components/AuthorCard';
import RelatedPosts from '../../components/RelatedPosts';

type Props = {
    post: PostType,
    mdxSource: MdxRemote.Source,
    relatedPosts: PostType[]
}

const components: MdxRemote.Components = { Iframe }

const Post: React.FC<Props> = ({ post, mdxSource, relatedPosts }) => {
    const router = useRouter();
    const content = hydrate(mdxSource, { components });
    const meta = {
        slug: post.slug,
        title: post.title,
        date: post.date,
        lastmod: post.lastmod,
        eyecatch: post.eyecatch,
        description: post.description,
        type: 'article'
    }

    if(!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <Layout>
            <Header />
                <HeadMeta tags={meta} />
                <ContentHeader 
                    title={post.title} 
                    date={post.date} 
                    lastmod={post.lastmod} 
                    eyecatch={post.eyecatch} 
                />
                <Content content={content} />
                <Tags data={post.tags} />
                <ContentFooter slug={post.slug} title={post.title} />
                <AuthorCard />
                <RelatedPosts posts={relatedPosts} />
            <Footer />
        </Layout>
    )
}

export default Post;

type Params = {
    params: {
        slug: [string]
    }
}

export async function getStaticProps({ params }: Params) {
    params.slug.unshift('content');
    params.slug.unshift('post');
    const slug = params.slug.join('/');
    const post = getPostBySlug(slug, [
        'title',
        'description',
        'date',
        'lastmod',
        'slug',
        'draft',
        'eyecatch',
        'content',
        'toc',
        'tags',
    ]);

    const mdxSource = await renderToString(post.content, { components });
    const tags: string[] = [...new Set(post.tags)];
    
    const postsFromTags = await getPostsFromTag(tags, [
        'tags',
        'date',
        'slug',
        'draft',
        'title',
        'eyecatch'
    ]);

    const removeDuplicate = postsFromTags.posts.filter((_post) => _post.slug !== post.slug);
    const filteredPostsFromTags = removeDuplicate.filter((_post) => !_post.draft);

    return {
        props: {
            post: { ...post },
            mdxSource: mdxSource,
            relatedPosts: filteredPostsFromTags
        },
    }
}

// Using Dynamic Routing
// post/[...slug].tsx allows /post/a, /post/a/b...
// but the slug should be an array (e.g. ['a', 'b])
// Current array is ['post', '2020', '01', 'something']
// post is fixed path, so the slug should be ['2020','01','something']
export async function getStaticPaths() {
    const allPosts = await getAllPosts(['slug']);

    return {
        paths: allPosts.posts.map((posts) => {
            const path = posts.slug.split('\/');
            path.shift();

            return {
                params: {
                    slug: path,
                },
            }
        }),
        fallback: false,
    }
}

