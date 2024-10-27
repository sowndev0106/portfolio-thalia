import ChipContactButton from "../components/ChipContactButton";
import { brandingIcons, IBrandingLogo } from "./homepages/data";


interface IBrandingLogoProps {

}
export default function Footer(props: IBrandingLogoProps) {
    return (
        <div className="  bg-black " >
            <div className="container mx-auto   py-7 ">
                <div className="flex justify-between text-white mt-10 flex-col relative">
                    <div className="flex flex-col md:flex-row gap-12 justify-between ">

                        {/* Logo */}
                        <div className="flex justify-center md:align-middle" >
                            <div className="flex flex-col">
                                <img src={"/assets/images/logo/thalia-logo-1.png"} alt="Logo" className=" w-[220px]" />
                                <div className={` mt-2 text-white font-thin  text-[14px]  md:text-16px] text-opacity-80 text-center `}>Creative Agency</div>
                            </div>
                        </div>

                        {/* Social icon */}
                        <div className="flex items-center justify-center gap-5 align-bottom md:mb-[-50px]">
                            <a href="mailto:thaliatran161@gmail.com" target="_blank">
                                <img src={"/assets/images/icon/footer_be.svg"} alt="mail" className="h-8" />
                            </a>
                            <a href="https://www.linkedin.com/in/thaliatran294/" target="_blank">
                                <img src={"/assets/images/icon/footer_linkedin.svg"} alt="mail" className="h-8" />
                            </a>
                            <a href="https://www.behance.net/thaliatran" target="_blank">
                                <img src={"/assets/images/icon/footer_mail.svg"} alt="mail" className="h-8" />
                            </a>
                        </div>
                    </div>

                    {/*  */}
                    <div >
                        <div className={`text-center sm:text-left mt-16 text-white font-thin  text-[14px]  md:text-16px] text-opacity-40`}>© 2024 All Rights Reserved</div>
                    </div>

                </div>


            </div>
        </div>
    );
}