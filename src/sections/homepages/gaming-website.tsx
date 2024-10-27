import { Swiper, SwiperSlide } from "swiper/react";
import CardGaming from "../../components/CardGamming";
import ChipContactButton from "../../components/ChipContactButton";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function GamingWebsite() {
    return (
        <div >
            <div className="flex items-center justify-between mx-5 sm:mx-0 ">
                {/* text title */}
                <div className=" flex flex-col">
                    <div className='font-size-text-sm w-full uppercase tracking-[4px] md:tracking-[8px]  text-yellow-green'>GAME INDUSTRY</div>
                    <div className=' font-size-text-xl font-bold w-full  text-white'>Gaming website</div>
                </div>#
                {/* button contact */}
                <div>
                    <ChipContactButton title="Contact" pathIcon="/assets/images/icon/contact-black.png" />
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
                    autoplay={
                        {
                            delay: 3000,
                        }
                    }
                    modules={[Pagination, Autoplay]}
                    className="root-swiper"
                >
                    <SwiperSlide >
                        <CardGaming image="/assets/images/banners/gamming-website-4.png" title="Disney Speedstorm"
                            urlProject="https://www.behance.net/gallery/190730687/Gaming-Website-UIUX-Design-Disney-Speedstorm"
                            url="https://disneyspeedstorm.com/"
                        />
                    </SwiperSlide>
                    <SwiperSlide >
                        <CardGaming image="/assets/images/banners/gamming-website-1.png" title="Disney Magic Kingdom"
                            urlProject="https://www.behance.net/gallery/190721493/Gaming-Website-UIUX-Design-Disney-Magic-Kingdoms"
                            url="https://www.disney-magic-kingdoms.com/"
                        />
                    </SwiperSlide>
                    <SwiperSlide >
                        <CardGaming image="/assets/images/banners/gamming-website-2.png" title="Clash of clans"
                            urlProject="https://www.behance.net/gallery/187028411/Gaming-Website-Design-Clash-of-Clans-Website-Revamp"
                        />
                    </SwiperSlide>
                    <SwiperSlide >
                        <CardGaming image="/assets/images/banners/gamming-website-3.png" title="Asphalts Legend Unite"
                            url="https://asphaltlegendsunite.com/" />
                    </SwiperSlide>

                    <SwiperSlide >
                        <CardGaming image="/assets/images/banners/gamming-website-5.png" title="Carmen Sandiego"
                            url="https://carmensandiego-game.com/"
                            urlProject="https://www.behance.net/gallery/208782363/Gaming-Website-Design-Carmen-Sandiego"
                        />
                    </SwiperSlide>

                    <SwiperSlide >
                        <CardGaming image="/assets/images/banners/gamming-website-6.png" title="Gameloft shop"
                            urlProject="https://www.behance.net/gallery/208861217/Game-Store-UIUX-Design"
                        />
                    </SwiperSlide>

                </Swiper>
            </div>

        </div >
    );
}