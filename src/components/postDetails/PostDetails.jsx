import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h2>Post Details: {id}</h2>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;