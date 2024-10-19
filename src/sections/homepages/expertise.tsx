import { brandingGuidelineBanners, brandingLogos, gameFiBanners, gamingCreativeBanners, inGameUXUIBanners, web3Banners } from './data';
import GamingWebsite from './gaming-website';
import GroupBannerSection from './group-banner-section';
import LogoBranding from './branding-logo';
import useIntersectionObserver from '../../hooks/use-intersection-observer';
import HaveAnIdea from './have-an-idea';
import OurValuedPartners from './our-valued-partners';

const SectionWithAnimation = ({ children }: any) => {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div ref={ref as any} className={`transition-opacity duration-500 ease-out ${isIntersecting ? 'animate-moveUp' : 'opacity-0 translate-y-5'}`}>
            {children}
        </div>
    );
};

export default function Expertise() {
    return (
        <div className='mx-auto container  pt-10 scroll-smooth  scroll-mt-20 ' id="our-expertise"  >
            <div className='font-size-text-2xl font-bold w-full text-center text-yellow-green'>Our Expertise</div>
            <div className='pt-20 mx-5 sm:mx-0  scroll-mt-20' id="game-industry" >
                <SectionWithAnimation>
                    <GamingWebsite />
                </SectionWithAnimation>
            </div>

            <div className='pt-20 mx-5 sm:mx-0 ' >
                <SectionWithAnimation>
                    <GroupBannerSection groupBanners={gamingCreativeBanners} title='Gaming Creative Banner' category='GAME INDUSTRY' />
                </SectionWithAnimation>
            </div>

            <div className='pt-20 mx-5 sm:mx-0  '>
                <SectionWithAnimation>
                    <GroupBannerSection groupBanners={inGameUXUIBanners} title='In-game UI/UX' category='GAME INDUSTRY' numberRowShowOnMobile={1} />
                </SectionWithAnimation>
            </div>

            <div className='pt-20 mx-5 sm:mx-0  scroll-mt-20 ' id="blockchain" >
                <SectionWithAnimation>
                    <GroupBannerSection groupBanners={web3Banners} title='Web3' category='BLOCKCHAIN' />
                </SectionWithAnimation>
            </div>

            <div className='pt-20 mx-5 sm:mx-0 '>
                <SectionWithAnimation>
                    <GroupBannerSection groupBanners={gameFiBanners} title='GameFi' category='BLOCKCHAIN' />
                </SectionWithAnimation>
            </div>


            <div className='pt-20 mx-5 sm:mx-0  scroll-mt-20' id="branding">
                <SectionWithAnimation>
                    <LogoBranding logos={brandingLogos} title='Logo branding' category='Branding' />
                </SectionWithAnimation>
            </div>


            <div className='pt-20 mx-5 sm:mx-0 '>
                <SectionWithAnimation>
                    <GroupBannerSection groupBanners={brandingGuidelineBanners} title='Brand Guideline' category='Branding' />
                </SectionWithAnimation>
            </div>


            <div className='pt-20 mx-5 sm:mx-0  scroll-mt-20' id="about-us">
                <SectionWithAnimation>
                    <OurValuedPartners />
                </SectionWithAnimation>
            </div>

            {/* <div className='pt-20 mb-10 mx-5 sm:mx-0' id="contact-form">
                <SectionWithAnimation>
                    <HaveAnIdea />
                </SectionWithAnimation>
            </div> */}
        </div>
    );
}