import { Swiper, SwiperSlide } from "swiper/react";
import CardGaming from "../../components/CardGamming";
import ChipContactButton from "../../components/ChipContactButton";
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

export default function GamingWebsite() {
    return (
        <div >
            <div className="flex items-center justify-between px-8 ">
                {/* text title */}
                <div className=" flex flex-col">
                    <div className='font-size-text-sm w-full uppercase tracking-[4px] md:tracking-[8px]  text-yellow-green'>GAME INDUSTRY</div>
                    <div className=' font-size-text-xl font-bold w-full  text-white'>Gaming website</div>
                </div>#
                {/* button contact */}
                <div>
                    <ChipContactButton title="Contact" pathIcon="./assets/images/icon/contact-black.png" />
                </div>
            </div>
            {/* slide cards */}
            <div className="py-10">
                <Swiper
                    loop={true}
                    spaceBetween={30}
                    pagination={{
                        clickable: true
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1.5, grabCursor: true, centeredSlides: true },  // Mobile portrait
                        480: { slidesPerView: 1.5, grabCursor: true, centeredSlides: true },  // Mobile landscape
                        640: { slidesPerView: 1.5, grabCursor: true, centeredSlides: true },  // Small tablets
                        768: { slidesPerView: 1.5, grabCursor: true, centeredSlides: true },  // Tablets
                        1024: { slidesPerView: 3.5, grabCursor: true, centeredSlides: false }, // Small desktops
                        1280: { slidesPerView: 4 }, // Medium desktops
                        1536: { slidesPerView: 4 }  // Large desktops
                    }}
                    modules={[Pagination]}
                    className="root-swiper"
                >
                    <SwiperSlide >
                        <CardGaming image="./assets/images/banners/gamming-website-4.png" title="Disney Speedstorm" url="https://disneyspeedstorm.com/" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <CardGaming image="./assets/images/banners/gamming-website-1.png" title="Disney Magic Kingdom" url="https://www.disney-magic-kingdoms.com/" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <CardGaming image="./assets/images/banners/gamming-website-2.png" title="Clash of clans" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <CardGaming image="./assets/images/banners/gamming-website-3.png" title="Asphalts Legend Unite" url="https://asphaltlegendsunite.com/" />
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    );
}