import {Link, Outlet} from 'react-router-dom';

export const Products = () => {
    return(
        <>
            <div>
                <input type="text" placeholder="Search products" />
            </div>
            <nav>
                <Link to='new'>New</Link>
                <Link to='featured'>Featured</Link>
            </nav>
            <Outlet />
        </>
    )
}
