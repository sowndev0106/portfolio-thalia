import { BgColor, TypeBgColor } from "../helper/color-style";

interface IChipLink {
    title: string;
    pathIcon?: string;
    to?: string;
    bgColor?: TypeBgColor;
}

function ChipLink(props: IChipLink) {
    const { title, pathIcon, to, bgColor = "bgYellowGreen" } = props;

    return (
        <a
            href={to }
            className={`button-chip text-black rounded-full ${BgColor[bgColor]}
                text-xl flex justify-center gap-1 sm:gap-2 items-center
            `}
        >
            {
                pathIcon && (
                    <img src={pathIcon} className="w-[16px] sm:w-[20px]" alt={`${title} icon`} />
                )
            }
            <div>{title}</div>
        </a>
    );
}

export default ChipLink;    