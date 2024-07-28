import { brandingGuidelineBanners, brandingLogos, gameFiBanners, gamingCreativeBanners, inGameUXUIBanners, web3Banners } from './data';
import GamingWebsite from './gaming-website';
import GroupBannerSection from './group-banner-section';
import LogoBranding from './branding-logo';
import EndingSection from './ending-section';

export default function Expertise() {
    return (
        <div className='mx-auto container pt-10'>
            <div className='font-size-text-2xl font-bold w-full text-center text-yellow-green'>Our Expertise</div>

            <div className='py-10'>
                <GamingWebsite />
            </div>

            <div className='py-10'>
                <GroupBannerSection groupBanners={gamingCreativeBanners} title='Gaming Creative Banner' category='GAME INDUSTRY' />
            </div>

            <div className='py-10 '>
                <GroupBannerSection groupBanners={inGameUXUIBanners} title='In-game UI/UX' category='GAME INDUSTRY' numberRowShowOnMobile={1} />
            </div>

            <div className='py-10'>
                <GroupBannerSection groupBanners={web3Banners} title='Web3' category='GAME INDUSTRY' colorCategory='purple' />
            </div>

            <div className='py-10'>
                <GroupBannerSection groupBanners={gameFiBanners} title='GameFi' category='GAME INDUSTRY' colorCategory='purple' />
            </div>


            <div className='py-10'>
                <LogoBranding logos={brandingLogos} title='GameFi' category='GAME INDUSTRY' colorCategory='purple' />
            </div>


            <div className='py-10'>
                <GroupBannerSection groupBanners={brandingGuidelineBanners} title='Brand Guideline' category='GAME INDUSTRY' />
            </div>


            <div className='py-10'>
                <EndingSection />
            </div>
        </div>
    );
}