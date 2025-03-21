import { useEffect, useState } from "react";
import ChipContactButton from "../../components/ChipContactButton";
import ReactGA from "react-ga4";
export default function MainNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [tag, setTag] = useState('');

    useEffect(() => {
        const updateTag = () => {
            setTag(window.location.hash.substring(1)); // Get the tag from the URL
            ReactGA.send({ hitType: "pageview", page: `${window.location.pathname}${window.location.hash}`, title: "Nav bar" });
        };
        updateTag(); // Set the initial tag
        window.addEventListener("hashchange", updateTag); // Listen for hash changes

        return () => window.removeEventListener("hashchange", updateTag); // Cleanup on unmount
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed z-50 text-white w-full py-4 shadow-[0px_1px_0px_0px_#FFFFFF40] bg-opacity-80 bg-black backdrop-blur-md">
            <div className="mx-auto container flex justify-between items-center">
                {/* Logo */}
                <a className="font-bold ml-5" href="/">
                    <img
                        src={"./assets/images/logo/thalia-logo-1.png"}
                        alt="Logo"
                        className="w-[220px] hidden lg:block"
                    />
                    <img
                        src={"./assets/images/logo/thalia-logo-1-mini.png"}
                        alt="Logo"
                        className="lg:hidden"
                    />
                </a>

                {/* Navigation Links */}
                <div className={`lg:flex lg:space-x-8 ${isOpen ? "block p-7" : "hidden"} absolute lg:static top-[100%] left-0 w-full lg:w-auto bg-opacity-90 bg-black lg:bg-transparent text-center lg:text-left`}>
                    <a href="#game-industry" className={`block lg:inline-block ${tag === "game-industry" ? "text-yellow-green" : "hover:text-yellow-green"} py-2 lg:py-0`}>
                        Game Industry
                    </a>
                    <a href="#blockchain" className={`block lg:inline-block ${tag === "blockchain" ? "text-yellow-green" : "hover:text-yellow-green"} py-2 lg:py-0`}>
                        Blockchain
                    </a>
                    <a href="#branding" className={`block lg:inline-block ${tag === "branding" ? "text-yellow-green" : "hover:text-yellow-green"} py-2 lg:py-0`}>
                        Branding
                    </a>
                    <a href="#about-us" className={`block lg:inline-block ${tag === "about-us" ? "text-yellow-green" : "hover:text-yellow-green"} py-2 lg:py-0`}>
                        About Us
                    </a>
                </div>

                <div className="flex items-center gap-5">
                    <ChipContactButton title="Contact" pathIcon="./assets/images/icon/contact-black.png" />

                    {/* Hamburger Icon */}
                    <div className="lg:hidden mr-5 flex items-center">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
