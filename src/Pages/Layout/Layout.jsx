import { NavLink, Outlet} from 'react-router';
import './Layout.css';
import { Home, LogOut, ShoppingCart, User } from 'lucide-react';



export default function Layout({}) {


    return (
        <div className="layout">
            <div className='navbar'>
                <div className="left-bar bar">
                    <NavLink to="/"><Home /></NavLink>
                    <NavLink to="/products">Produits</NavLink>
                </div>
            </div>
            <Outlet />
        </div>
    )
}