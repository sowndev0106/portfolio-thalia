import ChipButton from "../../components/ChipButton";

export default function MainNav() {
    return (

        < nav className="fixed  z-50 text-white w-full py-4    shadow-[0px_1px_0px_0px_#FFFFFF40] " >
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <img src="./assets/images/logo/thalia-logo-1.png" alt="Logo" className="  w-[220px]" />

                </div>
                {/* Navigation Links */}
                <div className="flex space-x-8">
                    <a href="#game-industry" className="hover:text-yellow-green text-yellow-green">Game Industry</a>
                    <a href="#blockchain" className="hover:text-yellow-green">Blockchain</a>
                    <a href="#branding" className="hover:text-yellow-green">Branding</a>
                    <a href="#branding" className="hover:text-yellow-green">About us</a>
                </div>
                {/* Contact Icon */}
                <div>
                    <ChipButton title="Contact" pathIcon="./assets/images/icon/contact-black.png" />
                </div>
            </div>
        </ nav>
    )
}
;
