import { Swiper, SwiperSlide } from "swiper/react";
import CardGaming from "../../components/CardGamming";
import ChipContactButton from "../../components/ChipContactButton";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";
import { apiService, SERVER_URL } from "../../api";

export default function GamingWebsite() {
  const [gamingWebsites, setGamingWebsites] = useState<any[]>([]);
  useEffect(() => {
    apiService.getListGamingWebsites().then((data) => {
      setGamingWebsites(data.data);
    });
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mx-5 sm:mx-0 ">
        {/* text title */}
        <div className=" flex flex-col">
          <div className="font-size-text-sm w-full uppercase tracking-[4px] md:tracking-[8px]  text-yellow-green">
            GAME INDUSTRY
          </div>
          <div className=" font-size-text-xl font-bold w-full  text-white">
            Gaming website
          </div>
        </div>
        {/* button contact */}
        <div>
          <ChipContactButton
            title="Contact"
            pathIcon="/assets/images/icon/contact-black.png"
          />
        </div>
      </div>
      {/* slide cards */}
      <div className="py-10">
        <Swiper
          loop={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1.5, grabCursor: true, centeredSlides: true }, // Mobile portrait
            480: { slidesPerView: 1.5, grabCursor: true, centeredSlides: true }, // Mobile landscape
            640: { slidesPerView: 1.5, grabCursor: true, centeredSlides: true }, // Small tablets
            768: { slidesPerView: 1.5, grabCursor: true, centeredSlides: true }, // Tablets
            1024: {
              slidesPerView: 3.5,
              grabCursor: true,
              centeredSlides: false,
            }, // Small desktops
            1280: { slidesPerView: 4 }, // Medium desktops
            1536: { slidesPerView: 4 }, // Large desktops
          }}
          autoplay={{
            delay: 3000,
          }}
          modules={[Pagination, Autoplay]}
          className="root-swiper"
        >
          {gamingWebsites.map((gamingWebsite, index) => (
            <SwiperSlide key={index}>
              <CardGaming
                image={
                  SERVER_URL +
                  gamingWebsite.attributes.thumbnail?.data?.attributes.url
                }
                title={gamingWebsite.attributes.title}
                urlProject={gamingWebsite.attributes.projectUrl}
                urlLive={gamingWebsite.attributes.liveWebsiteUrl}
                urlDetail={`/gaming-websites/${gamingWebsite.attributes.slug}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
