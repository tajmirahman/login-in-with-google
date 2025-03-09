import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ marginBottom: '20px' }}>Login In With Google</h1>
            <NavLink  to="/">Home</NavLink>
            <NavLink style={{ marginLeft: '20px' }} to="/login">Login</NavLink>
        </div>
    );
};

export default Header;