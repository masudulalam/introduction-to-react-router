
const User = ({ user }) => {
    const {id, name, email, phone} = user;
    const userStyles = {
        border: '2px solid mediumseagreen',
        padding: '10px',
        borderRadius: '10px',
        marginBottom: '10px'
    }
    return (
        <div style={userStyles}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default User;