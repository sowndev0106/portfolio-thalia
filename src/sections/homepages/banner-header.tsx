import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { brandingIcons, chipSections } from './data';
import 'swiper/css';
import Marquee from 'react-fast-marquee';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import VariableWidth from '../../components/VariableWidth';
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

export default function BannerHeader() {
    const ref =
        useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:
    return (
        <div>
            <div className="relative bg-banner-header bg-no-repeat bg-cover w-full h-screen text-white flex flex-col justify-between " >
                <div className="font-size-text-2xl  container mx-auto text-center flex flex-col-reverse p-10 h-1/2 ">
                    <p className=" font-bold mb-4 ">
                        with our <span className="text-yellow-green bg-[url('./assets/images/icon/ellipse.png')] bg-center bg-cover" >Creative</span> magic!
                    </p>
                    <h1 className="font-bold mb-4 ">
                        Innovative Gaming & Brand Excellence
                    </h1>
                </div>

                <div className=" w-full text-center h-1/2 flex flex-col justify-between items-center pb-16 relative z-20" >
                    <div className="inline-block mt-14 animate-bounce">
                        <a href="#our-expertise" className="bg-[#601FEB] button-circle p-5 md:p-7 xl:p-7 ">
                            <img src="/assets/images/icon/down-arrow.png" alt="Contact" className="inline-block" />
                        </a>
                    </div>
                    <div className="w-full z-20" >
                        <div className='py-10'>
                            <Marquee
                                loop={0}
                                autoFill
                            >
                                {brandingIcons.map((icon, index) => (
                                    <div className='mr-10 flex justify-center '>
                                        <img src={icon.path} alt={icon.url} />
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                        <div >
                            <div
                                className="flex overflow-x-scroll scrollbar-hide "
                                {...events}
                                ref={ref} // add reference and events to the wrapping div
                            >
                                {chipSections.map((chip, index) => (
                                    <div className={`border ${index % 2 === 0 ? 'border-[#A074FF80]' : 'border-[#B6E80280]'}
                                             button-chip flex items-center  px-10 mr-5 text-white bg-[#FFFFFF1A]  cursor-grabbing  `}>
                                        <div className='font-size-text-lg '>
                                            {chip.text}
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>
                </div>
                <div className='absolute w-full z-0 bottom-[-200px] '>
                    <img className=' w-full h-[600px]' src="/assets/images/background/background-bottom-header.png" alt="" />
                </div>
            </div>
        </div>
    );
}
