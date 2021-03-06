import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to={'/profile'}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={'/dialogs'}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={'/news'}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={'/music'}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={'/settings'}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;