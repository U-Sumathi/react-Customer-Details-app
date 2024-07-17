import ListPost from './ListPost';

const Feed = ({ posts }) => {
    return (
        <>
            {posts.map(post => (
                <ListPost key={post.id} post={post} />
            ))}
        </>
    )
}

export default Feed