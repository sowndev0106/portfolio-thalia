import Slider from "react-slick";
import { chipSections } from "../sections/homepages/data";

interface IChipContactButton {
    title: string
    pathIcon: string
    className?: string
    email?: string
}
const defaultEmail = "thaliatran161@gmail.com "
function ChipContactButton(props: IChipContactButton) {
    const mailTo = `mailto:${props.email || defaultEmail} `
    return (
        <a href={mailTo} className={`button-chip text-black rounded-full bg-yellow-green  text-xl flex justify-center gap-1 sm:gap-2 items-center ${props.className || ""}`}>
            <img src={props.pathIcon} className="w-[16px] sm:w-[20px]" />
            <div>
                {props.title}
            </div>

        </a>
    );
}

export default ChipContactButton;
