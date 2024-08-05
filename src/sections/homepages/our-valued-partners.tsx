import ChipContactButton from "../../components/ChipContactButton";
import { brandingIcons, IBrandingLogo } from "./data";


interface IBrandingLogoProps {

}
export default function OurValuedPartners(props: IBrandingLogoProps) {
    return (
        <div >
            <div className="flex items-center justify-between flex-col">
                <div className={`font-size-text-2xl font-bold text-center mb-2 text-yellow-green`}>Our Valued Partners</div>

                <div className={` text-white text-center text-[14px]  md:text-[22px] text-opacity-80`}>Discover the brands we’ve proudly partnered with over the years.</div>

                <div className={` text-white text-center text-[14px]  md:text-[22px] text-opacity-80`}>Let's collaborate and create something amazing.</div>

            </div>
            <div className="py-10">
                <div className="flex items-center justify-center flex-wrap">
                    {
                        brandingIcons.map((logo, index) => (
                            <div className="w-[80px] md:w-[200px] mx-3 my-1 md:mx-6  md:my-4 flex justify-center">
                                <a href={logo.url || "#"}>
                                    <div className="relative " key={index}>
                                        <img src={logo.path} alt={logo.url} className={``} />
                                    </div>
                                </a>
                            </div>

                        ))
                    }
                </div>
            </div>

            <div className="py-10">
                <div className="flex justify-center">
                    <ChipContactButton title="Contact" pathIcon="./assets/images/icon/contact-black.png" />
                </div>
            </div>
        </div>
    );
}