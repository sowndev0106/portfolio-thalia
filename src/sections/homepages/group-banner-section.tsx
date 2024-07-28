import ChipButton from "../../components/ChipButton";
import GroupBanner, { IGroupBannerProps } from "../../components/GroupBanner";

interface IGroupBannerSectionProps {
    category: string,
    colorCategory?: string,
    title: string,
    groupBanners: Array<IGroupBannerProps>
    numberRowShowOnMobile?: number
}
export default function GroupBannerSection(props: IGroupBannerSectionProps) {
    const numberRowShowOnMobile = (props.numberRowShowOnMobile || props.groupBanners.length) - 1
    return (
        <div >
            <div className="flex items-center justify-between">
                {/* text title */}
                <div className=" flex flex-col">
                    <div className={`font-size-text-sm w-full uppercase  tracking-[4px] md:tracking-[8px] ${props.colorCategory ? `text-${props.colorCategory}` : "text-yellow-green"}`}>{props.category}</div>
                    <div className=' font-size-text-xl font-bold w-full  text-white'>{props.title}</div>
                </div>
                {/* button contact */}
                <div>
                    <ChipButton title="Contact" pathIcon="./assets/images/icon/contact-black.png" />
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