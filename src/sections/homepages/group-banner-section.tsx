import ChipContactButton from "../../components/ChipContactButton";
import GroupBanner, { IGroupBannerProps } from "../../components/GroupBanner";
const ColorCategory = {
    purple: "text-purple",
    yellowGreen: "text-yellow-green"
}
interface IGroupBannerSectionProps {
    category: string,
    colorCategory?: keyof typeof ColorCategory,
    title: string,
    groupBanners: Array<IGroupBannerProps>
    numberRowShowOnMobile?: number
}
export default function GroupBannerSection(props: IGroupBannerSectionProps) {
    const colorCategory = props.colorCategory ? ColorCategory[props.colorCategory] : "text-yellow-green"

    const numberRowShowOnMobile = (props.numberRowShowOnMobile || props.groupBanners.length) - 1
    return (
        <div >
            <div className="flex items-center justify-between px-2">
                {/* text title */}
                <div className=" flex flex-col">
                    <div className={`font-size-text-sm w-full uppercase tracking-[4px] md:tracking-[8px] ${colorCategory}`}>{props.category}</div>
                    <div className=' font-size-text-xl font-bold w-full text-white'>{props.title}</div>
                </div>
                {/* button contact */}
                <div>
                    <ChipContactButton title="Contact" pathIcon="./assets/images/icon/contact-black.png" />
                </div>
            </div>
            {/* slide cards */}
            <div className="py-10">
                {
                    props.groupBanners.map((groupBanner, index) => (
                        <div className={`${index > numberRowShowOnMobile ? "hidden" : "block"} md:block`}>
                            <GroupBanner {...groupBanner} />
                        </div>
                    ))
                }
            </div>

        </div>
    );
}