import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Navbar = () => {
    const links = (
        <>
            <li>
                <Link
                    href="/workouts"
                    className="font-medium text-gray-700 hover:text-[#C2F800] transition-colors rounded-full"
                >
                    Workouts
                </Link>
            </li>
            <li>
                <Link
                    href="/myplan"
                    className="font-medium text-gray-700 hover:text-[#C2F800] transition-colors rounded-full"
                >
                    My Plan
                </Link>
            </li>
        </>
    );

    return (
        <nav className=" bg-black shadow-xs border-b border-gray-600  ">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link
                        href="/"
                        className="ml-1 flex items-center gap-2 md:ml-2"
                    >
                        <Image
                            src={logo}
                            alt="Book Vibe logo"
                            width={48}
                            height={48}
                            className="rounded-xl object-cover"
                        />

                        <h1 className="text-xl font-bold tracking-tight md:text-2xl">
                            <span className="text-white">
                                FITLOG
                            </span>
                        </h1>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <a className=" text-gray-400">Plan</a>
                    <a className="text-gray-400">Saved</a>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;