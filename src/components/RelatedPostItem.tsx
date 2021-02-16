import Link from 'next/link';
import PostType from '../../types/post';

type Props = {
    post: PostType
}

const RelatedPostItem: React.FC<Props> = ({ post }) => {
    const convertedDate = new Date(post.date);
    const dateOption = { year: 'numeric', month: '2-digit', day: '2-digit' }
    const formattedDate = convertedDate.toLocaleDateString('ja-JP', dateOption);

    return (
        <>
        <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/${post.slug}`}>
            <a className="related-articles--item">
                <div>
                    <img 
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${post.eyecatch}`} 
                        width="130" 
                        height="68" 
                        alt="thumbnail" 
                    />
                </div>
                <div>
                    <span>{post.title}</span>
                    <br />
                    <time dateTime={post.date}>
                        {formattedDate}
                    </time>
                </div>
            </a>
        </Link>
        </>
    )
}

export default RelatedPostItem;