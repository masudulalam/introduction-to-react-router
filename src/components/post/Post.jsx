import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const {id, title} = post;
    const navigate = useNavigate();

    const postStyles = {
        border: "2px solid mediumseagreen",
        padding: "10px",
        borderRadius: "10px",
        marginBottom: "10px",
      };

      const handleShowDetails = () => {
        navigate(`/post/${id}`)
      }

    return (
        <div style={postStyles}>
            <h4>Post of Id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Post Details</button></Link>
            <br />
            <button onClick={handleShowDetails}>Click to See Details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object,
}

export default Post;