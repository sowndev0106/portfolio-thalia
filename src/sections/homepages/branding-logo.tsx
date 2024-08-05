import ChipContactButton from "../../components/ChipContactButton";
import { IBrandingLogo } from "./data";

const TextColor = {
    purple: "text-purple",
    yellowGreen: "text-yellow-green"
}
interface IBrandingLogoProps {
    colorCategory?: keyof typeof TextColor
    category: string
    title: string
    logos: Array<IBrandingLogo>
}
export default function BrandingLogo(props: IBrandingLogoProps) {
    return (
        <div >
            <div className="flex items-center justify-between">
                <div className=" flex flex-col">
                    <div className={`font-size-text-md w-full uppercase tracking-[8px] ${props.colorCategory ? `${TextColor[props.colorCategory]}` : "text-yellow-green"}`}>{props.category}</div>
                    <div className=' font-size-text-xl font-bold w-full  text-white'>{props.title}</div>
                </div>
                <div>
                    <ChipContactButton title="Contact" pathIcon="./assets/images/icon/contact-black.png" />
                </div>
            </div>
            <div className="py-10">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {
                        props.logos.map((logo, index) => (
                            <a href={logo.url || "#"}>
                                <div className="relative" key={index}>
                                    <img src={logo.path} alt={logo.url} className={`border border-yellow-green border-opacity-50 `} />
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>

        </div>
    );
}