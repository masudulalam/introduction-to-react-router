import PropTypes from 'prop-types'

const User = ({ user }) => {
    const {name, email, phone} = user;
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

User.propTypes = {
    user: PropTypes.object,
}

export default User;