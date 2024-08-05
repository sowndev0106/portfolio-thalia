import ChipContactButton from "../components/ChipContactButton";
import { brandingIcons, IBrandingLogo } from "./homepages/data";


interface IBrandingLogoProps {

}
export default function Footer(props: IBrandingLogoProps) {
    return (
        <div className="  bg-black " >
            <div className="container mx-auto   py-7 ">
                <div className="flex justify-center md:justify-between items-center flex-wrap px-2 ">
                    <div className="flex justify-between text-white mt-10 ">
                        <div className="flex flex-col ">
                            <div className="flex   md:gap-44">
                                <div className="flex flex-col">
                                    <img src={"./assets/images/logo/thalia-logo-1.png"} alt="Logo" className=" w-[220px]" />
                                    <div className={` mt-2 text-white font-thin  text-[14px]  md:text-16px] text-opacity-80 hidden lg:block`}>Creative Agency</div>
                                </div>
                                <div>
                                    <div className="hidden lg:block">
                                        Our Expertise
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div className={`text-center sm:text-left mt-16 text-white font-thin  text-[14px]  md:text-16px] text-opacity-40`}>© 2024 All Rights Reserved</div>
                            </div>
                        </div>

                    </div>

                    <div className="h-full" >
                        <div className="flex items-center justify-center">
                            <img src={"assets/images/icon/social-group.png"} alt="mail" className="h-6 hidden lg:block" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}