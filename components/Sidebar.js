import { useState } from "react";
import NavLink from "./NavLink";
import classes from "./Sidebar.module.scss";

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const sidebarOpenHander = () => {
        setSidebarOpen(true);
    };

    const sidebarCloseHandler = () => {
        setSidebarOpen(false);
    };

    return (
        <>
            <span className={classes.hamburger} onClick={sidebarOpenHander}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
                    <g fill="#D0D6F9" fillRule="evenodd">
                        <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
                    </g>
                </svg>
            </span>

            <div
                className={`${classes.sidebar} ${
                    sidebarOpen && classes.SidebarOpen
                }`}
            >
                <div
                    className={classes.closeSidebar}
                    onClick={sidebarCloseHandler}
                >
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="21"
                        >
                            <g fill="#D0D6F9" fillRule="evenodd">
                                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
                            </g>
                        </svg>
                    </span>
                </div>

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
            </div>
        </>
    );
};

export default Sidebar;
