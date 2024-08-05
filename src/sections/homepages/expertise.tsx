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
        <div className='mx-auto container  pt-10'>
            <div className='font-size-text-2xl font-bold w-full text-center text-yellow-green'>Our Expertise</div>
            <div className='py-10 scroll-tag' id="game-industry" >
                <SectionWithAnimation>
                    <GamingWebsite />
                </SectionWithAnimation>
            </div>

            <div className='py-10 px-7 ' >
                <SectionWithAnimation>
                    <GroupBannerSection groupBanners={gamingCreativeBanners} title='Gaming Creative Banner' category='GAME INDUSTRY' />
                </SectionWithAnimation>
            </div>

            <div className='py-10 px-7  '>
                <SectionWithAnimation>
                    <GroupBannerSection groupBanners={inGameUXUIBanners} title='In-game UI/UX' category='GAME INDUSTRY' numberRowShowOnMobile={1} />
                </SectionWithAnimation>
            </div>

            <div className='py-10 px-7 ' id="blockchain" >
                <SectionWithAnimation>
                    <GroupBannerSection groupBanners={web3Banners} title='Web3' category='BLOCKCHAIN' colorCategory='purple' />
                </SectionWithAnimation>
            </div>

            <div className='py-10 px-7 '>
                <SectionWithAnimation>
                    <GroupBannerSection groupBanners={gameFiBanners} title='GameFi' category='BLOCKCHAIN' colorCategory='purple' />
                </SectionWithAnimation>
            </div>


            <div className='py-10 px-7 ' id="branding">
                <SectionWithAnimation>
                    <LogoBranding logos={brandingLogos} title='Logo branding' category='Branding' colorCategory='purple' />
                </SectionWithAnimation>
            </div>


            <div className='py-10 px-7 '>
                <SectionWithAnimation>
                    <GroupBannerSection groupBanners={brandingGuidelineBanners} title='Brand Guideline' category='Branding' />
                </SectionWithAnimation>
            </div>


            <div className='py-10 px-7 ' id="about-us">
                <SectionWithAnimation>
                    <OurValuedPartners />
                </SectionWithAnimation>
            </div>

            <div className='py-10 px-7 '>
                <SectionWithAnimation>
                    <HaveAnIdea />
                </SectionWithAnimation>
            </div>
        </div>
    );
}