import React from "react";
import { classNameColorSystem, IBanner } from "../sections/homepages/data";
import ModalBanner from "./ModelBanner";
import { on } from "events";

export interface IGroupBannerProps {
    left: IBanner[];
    right: IBanner[];
}

export default function GroupBanner({ left, right }: IGroupBannerProps) {
    const [image, setImage] = React.useState<string | null>(null)
    const [isOpen, setIsOpen] = React.useState(false)
    const [index, setIndex] = React.useState(0)
    const handleOpen = (image: string) => {
        setIndex(index)
        setIsOpen(true)
        setImage(image)
    }
    const handleClose = () => {
        setIsOpen(false)
        setImage(null)
    }

    return (
        <div>
            <ModalBanner image={image} isOpen={isOpen} onClose={handleClose} />

            <div className="w-full rounded-xl p-2  " >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>

                        <div className={`grid grid-cols-${left?.length ? left?.length / 2 : 1} gap-4 `}>
                            {
                                left?.map((banner, index) => (
                                    <RenderBanner banner={banner} key={`left-${index}`} onClick={() => {
                                        handleOpen(banner.image)
                                    }} />
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className={`grid grid-cols-${right?.length ? right?.length / 2 : 1} gap-4 `}>
                            {
                                right?.map((banner, index) => (
                                    <RenderBanner banner={banner} key={`right-${index}`} onClick={() => {
                                        handleOpen(banner.image)
                                    }} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

function RenderBanner({ banner, key, onClick }: { banner: IBanner, key: string, onClick: () => void }) {

    return (
        <div className="relative cursor-pointer" key={key} >
            <img src={banner.image} alt={banner.title}
                onClick={onClick}
                className={
                    `object-cover 
                    hover:border-yellow-green  hover:border-opacity-60
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
