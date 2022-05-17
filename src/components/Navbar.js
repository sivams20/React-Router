import { NavLink } from 'react-router-dom';
import { useAuth } from '../utils/Auth';

export const Navbar = () => {
    const auth = useAuth();
    return(
        <nav>
            <NavLink to='/' className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
            <NavLink to='/about' className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
            <NavLink to='/products' className={({isActive}) => isActive ? 'active' : ''}>Products</NavLink>
            <NavLink to='/users' className={({isActive}) => isActive ? 'active' : ''}>Users</NavLink>
            <NavLink to='/profile' className={({isActive}) => isActive ? 'active' : ''}>Profile</NavLink>
            {
                !auth.user && (
                    <NavLink to='/login' className={({isActive}) => isActive ? 'active' : ''}>Login</NavLink>
                )
            }
        </nav>
    )
}
