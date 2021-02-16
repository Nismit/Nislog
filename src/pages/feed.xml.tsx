import data from '../site.json';
import { getAllPosts } from '../lib/api';
import { GetServerSidePropsContext } from 'next';

export const getServerSideProps = async ({ res }: GetServerSidePropsContext) => {
    const xml = await generateFeedXml();

    res.statusCode = 200;
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
    res.setHeader('Content-Type', 'text/xml');
    res.end(xml);

    return {
        props: {},
    };
};

async function generateFeedXml():Promise<string> {
    let xml = `
        <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
        <channel>
            <title>${data.siteName}</title>
            <link>${process.env.NEXT_PUBLIC_BASE_URL}</link>
            <description>${data.siteDescription}</description>
            <language>ja</language>
            <copyright>${data.siteName}</copyright>
            <atom:link href="${process.env.NEXT_PUBLIC_BASE_URL}" rel="self" type="application/rss+xml" />
    `;

    const allPosts = await getAllPosts([
        'date',
        'slug',
        'draft',
        'eyecatch',
        'title',
        'lastmod',
        'description',
    ]);

    const filteredPosts = allPosts.posts.filter((post) => !post.draft);

    filteredPosts.forEach((post) => {
        xml += '<item>';
        xml += `
            <title>${post.title}</title>
            <link>${process.env.NEXT_PUBLIC_BASE_URL}/${post.slug}</link>
            <pubDate>${new Date(post.date).toISOString()}</pubDate>
            <guid>${process.env.NEXT_PUBLIC_BASE_URL}/${post.slug}</guid>
        `;

        if(post.eyecatch) {
            xml += `<description><![CDATA[<img src="${process.env.NEXT_PUBLIC_BASE_URL}${post.eyecatch}">${post.description}]]></description>`;
        } else {
            xml += `<description><![CDATA[${post.description}]]></description>`;
        }

        xml += '</item>';
    });
    
    xml += `
        </channel>
        </rss>
    `;
    return xml;
}

const Page = () => null;

export default Page;