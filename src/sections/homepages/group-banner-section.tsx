import { Swiper, SwiperSlide } from "swiper/react";
import CardGaming from "../../components/CardGamming";
import ChipButton from "../../components/ChipButton";
import { Navigation, Pagination } from "swiper/modules";

export default function GroupBannerSection() {
    return (
        <div >
            <div className="flex items-center justify-between">
                {/* text title */}
                <div className=" flex flex-col">
                    <div className='font-size-text-md w-full uppercase tracking-[8px] text-yellow-green'>GAME INDUSTRY</div>
                    <div className=' font-size-text-xl font-bold w-full  text-white'>Gaming Creative Banner</div>
                </div>#
                {/* button contact */}
                <div>
                    <ChipButton title="Contact" pathIcon="./assets/images/icon/contact-black.png" />
                </div>
            </div>
            {/* slide cards */}
            <div className="py-10">

            </div>

        </div>
    );
}