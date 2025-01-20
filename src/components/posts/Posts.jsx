import { useLoaderData } from "react-router-dom";
import Post from "../post/Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2>Posts: {posts.length}</h2>
            <div className="users-container">
                {
                    posts.map((post) => <Post key={post.id} post={post} />)
                }
            </div>
        </div>
    );
};

export default Posts;