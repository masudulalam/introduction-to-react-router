import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const user = useLoaderData();
    const {name, email, phone, username, website} = user;
    return (
        <div>
            <h2>Details about User</h2>
            <h3>{name}</h3>
            <p>User name: {username}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;