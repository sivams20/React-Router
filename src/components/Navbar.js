import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return(
        <nav>
            <NavLink to='/' className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
            <NavLink to='/about' className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
            <NavLink to='/products' className={({isActive}) => isActive ? 'active' : ''}>Products</NavLink>
            <NavLink to='/users' className={({isActive}) => isActive ? 'active' : ''}>Users</NavLink>
        </nav>
    )
}
