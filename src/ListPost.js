import { Link } from 'react-router-dom';

const ListPost = ({ post }) => {
    return (
        <article className="post">
            <Link to={`/post/${post.id}`}>
                <h2>{post.customer}</h2>
                <p className="postDate">{post.datetime}</p>
            </Link>
            <p className="postBody">{
                (post.product).length <= 25
                    ? post.product
                    : `${(post.product).slice(0, 25)}...`
            }</p>
        </article>
    )
}

export default ListPost