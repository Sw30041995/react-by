import Logo from './Logo.png';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <img className={style.logo} src={Logo} alt="logo" />
        </header>
    );
}

export default Header;