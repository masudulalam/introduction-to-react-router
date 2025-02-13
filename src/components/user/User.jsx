import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const userStyles = {
    border: "2px solid mediumseagreen",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
  };
  return (
    <div style={userStyles}>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
      <br />
      <Link to={`/user/${id}`}>
        <button>Show Details</button>
      </Link>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};

export default User;
