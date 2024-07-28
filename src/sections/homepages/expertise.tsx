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
import GamingWebsite from './gaming-website';
import GroupBannerSection from './group-banner-section';

export default function Expertise() {
    return (
        <div className='mx-auto container pt-10'>
            <div className='text-7xl font-bold w-full text-center text-yellow-green'>Our Expertise</div>

            <div className='py-20'>
                <GamingWebsite />
            </div>

            <div className='py-20'>
                <GroupBannerSection />
            </div>
        </div>
    );
}