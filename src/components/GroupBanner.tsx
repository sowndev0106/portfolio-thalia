import { classNameColorSystem, IBanner } from "../sections/homepages/data";

export interface IGroupBannerProps {
    left: IBanner[];
    right: IBanner[];
}

export default function GroupBanner({ left, right }: IGroupBannerProps) {

    return (
        <div>
            <div className="w-full h-full rounded-xl p-2  " >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <div className={`grid grid-cols-${left?.length ? left?.length / 2 : 1} gap-4 h-full`}>
                            {
                                left?.map((banner, index) => (
                                    <RenderBanner banner={banner} key={index} />
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className={`grid grid-cols-${right?.length ? right?.length / 2 : 1} gap-4 h-full`}>
                            {
                                right?.map((banner, index) => (
                                    <RenderBanner banner={banner} key={index} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

function RenderBanner({ banner, key }: { banner: IBanner, key: number }) {
    return (
        <div className="relative" key={key}>
            <img src={banner.image} alt={banner.title} className={
                ` object-cover  sm:h-full 
                    ${banner.rounded?.topLeft && "rounded-tl-xl"}
                    ${banner.rounded?.topRight && "rounded-tr-xl"}
                    ${banner.rounded?.bottomLeft && "rounded-bl-xl"}
                    ${banner.rounded?.BottomRight && "rounded-br-xl"}

                    ${banner.borderColor && `border ${banner.borderColor ? `${classNameColorSystem[banner.borderColor]}` : "border-yellow-green"} `}
                `
            } />
        </div>
    )
}
