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
                    <div className={`grid grid-cols-${left?.length} gap-4`}>
                        {
                            left?.map((banner, index) => (
                                <RenderBanner banner={banner} key={index} />
                            ))
                        }
                    </div>
                    <div>
                        <div className={`grid grid-cols-${right?.length ? right?.length / 2 : 1} gap-4`}>
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
                    ${banner.rounded?.topLeft && "rounded-tl-2xl"}
                    ${banner.rounded?.topRight && "rounded-tr-2xl"}
                    ${banner.rounded?.bottomLeft && "rounded-bl-2xl"}
                    ${banner.rounded?.BottomRight && "rounded-br-2xl"}

                    ${banner.borderColor && `border ${banner.borderColor ? `${classNameColorSystem[banner.borderColor]}` : "border-yellow-green"} `}
                `
            } />
        </div>
    )
}
