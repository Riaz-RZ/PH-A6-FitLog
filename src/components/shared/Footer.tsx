
import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-6 shadow-xs border-t border-gray-600">
            <div className="container mx-auto grid grid-cols-2">
                
                <aside className="flex items-center gap-3">
                    <Image
                        src={logo}
                        alt="FitLog logo"
                        width={30}
                        height={48}
                        className="rounded-xl object-cover rotate-135"
                    />
                    <p className="text-l font-semibold tracking-tight md:text-xl text-white">
                        FITLOG
                    </p>
                </aside>

                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <p className="text-gray-500">
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>
                </nav>

            </div>
        </footer>
    );
};

export default Footer;