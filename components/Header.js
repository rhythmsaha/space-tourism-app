import classes from "./Header.module.scss";
import NavLink from "./NavLink";
import Sidebar from "./Sidebar";

const Header = () => {
    return (
        <header className={classes.Header}>
            <span>
                <img
                    src="/assets/shared/logo.svg"
                    alt="Logo"
                    className={classes.Logo}
                />
            </span>
            <div />
            <nav className={classes.Nav}>
                <NavLink
                    href="/"
                    className={classes.NavLink}
                    activeClassName={classes.ActiveLink}
                >
                    <b>00</b> Home
                </NavLink>
                <NavLink
                    href="/destination"
                    className={classes.NavLink}
                    activeClassName={classes.ActiveLink}
                >
                    <b>01</b> Destination
                </NavLink>
                <NavLink
                    href="/crew"
                    className={classes.NavLink}
                    activeClassName={classes.ActiveLink}
                >
                    <b>02</b> crew
                </NavLink>
                <NavLink
                    href="/technology"
                    className={classes.NavLink}
                    activeClassName={classes.ActiveLink}
                >
                    <b>03</b> Technology
                </NavLink>
            </nav>

            <Sidebar />
        </header>
    );
};

export default Header;
