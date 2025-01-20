import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const header = () => {
  return (
    <div>
      <nav>
        <span>My Website</span>
        <Link to="/">Home</Link>
        <NavLink to="/users">Users</NavLink>
        {/* <Link to="/users">Users</Link> */}
        <NavLink to="/posts">Posts</NavLink>
        {/* <Link to="/posts">Posts</Link> */}
        <NavLink to="/about">About</NavLink>
        {/* <Link to="/about">About</Link> */}
        <NavLink to="contact">Contact Us</NavLink>
        {/* <Link to="/contact">Contact Us</Link> */}
      </nav>
    </div>
  );
};

export default header;
