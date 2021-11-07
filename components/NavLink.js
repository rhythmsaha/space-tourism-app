import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ href, className, activeClassName, children }) => {
    const router = useRouter();
    return (
        <Link href={href}>
            <a
                className={`${className} ${
                    router.pathname === href && activeClassName
                }`}
            >
                {children}
            </a>
        </Link>
    );
};

export default NavLink;
