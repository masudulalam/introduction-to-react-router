import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const {id, title} = post;
    const postStyles = {
        border: "2px solid mediumseagreen",
        padding: "10px",
        borderRadius: "10px",
        marginBottom: "10px",
      };

    return (
        <div style={postStyles}>
            <h4>Post of Id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Post Details</button></Link>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object,
}

export default Post;