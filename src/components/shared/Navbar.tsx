"use client"
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { useContext } from "react";
import { WorkoutsContext } from "@/context/WorkoutsContext";

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
    const { todaysPlan, save } = useContext(WorkoutsContext);

    const planCount = todaysPlan.length;
    const savedCount = save.length;

    return (
        <nav className="sticky top-0 z-50 bg-black shadow-xs border-b border-gray-600">
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
                    <button className=" text-gray-400 me-4 px-4 py-0.5">Plan<span className="badge badge-sm bg-[#c7ff00] text-black border-0 mx-3 font-bold">
                                    {planCount}
                                </span></button>
                    <button className="text-gray-400 px-4 py-0.5">Saved<span className="badge badge-sm bg-black text-white border-2 mx-3 font-bold">
                                    {savedCount}
                                </span></button>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;