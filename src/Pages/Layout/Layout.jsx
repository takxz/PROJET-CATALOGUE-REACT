import { NavLink, Outlet} from 'react-router';
import './Layout.css';
import { Film, Form, Home } from 'lucide-react';



export default function Layout({}) {


    return (
        <div className="layout">
            <div className='navbar'>
                <div className="left-bar bar">
                    <NavLink to="/"><Home /></NavLink>
                    <NavLink to="/catalogue"><Film /></NavLink>
                    <NavLink to="/formulaire"><Form /></NavLink>
                </div>
            </div>
            <Outlet />
        </div>
    )
}