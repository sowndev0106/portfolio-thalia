import Slider from "react-slick";
import { chipSections } from "../sections/homepages/data";

interface IChipButton {
    title: string
    pathIcon: string
    className?: string
    email?: string
}
function ChipButton(props: IChipButton) {
    return (
        <div className={`button-chip text-black rounded-full bg-yellow-green ${props.className || ""} text-xl flex justify-center gap-2 items-center`}>
            <img src={props.pathIcon} />
            <div>
                {props.title}
            </div>

        </div>
    );
}

export default ChipButton;
