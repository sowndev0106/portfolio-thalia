import ChipButton from "../../components/ChipButton";
import { IBrandingLogo } from "./data";


interface IBrandingLogoProps {
    colorCategory?: string
    category: string
    title: string
    logos: Array<IBrandingLogo>
}
export default function BrandingLogo(props: IBrandingLogoProps) {
    return (
        <div >
            <div className="flex items-center justify-between">
                <div className=" flex flex-col">
                    <div className={`font-size-text-md w-full uppercase tracking-[8px] ${props.colorCategory ? `text-${props.colorCategory}` : "text-yellow-green"}`}>{props.category}</div>
                    <div className=' font-size-text-xl font-bold w-full  text-white'>{props.title}</div>
                </div>
                <div>
                    <ChipButton title="Contact" pathIcon="./assets/images/icon/contact-black.png" />
                </div>
            </div>
            <div className="py-10">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {
                        props.logos.map((logo, index) => (
                            <a href={logo.url || "#"}>
                                <div className="relative" key={index}>
                                    <img src={logo.path} alt={logo.url} className={`border border-yellow-green border-opacity-50  object-cover h-full `} />
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>

        </div>
    );
}