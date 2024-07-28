
import BannerHeader from "../sections/homepages/banner-header";
import Expertise from "../sections/homepages/expertise";
import MainNav from "../sections/nav/main-nav";

export default function Homepage() {
    return (
        <div className="bg-white">
            <MainNav />
            <BannerHeader />
            <div className="bg-black" >
                <div className='bg-center bg-homepage  bg-no-repeat bg-cover p-10  sm:rounded-t-[0px]  md:rounded-t-[100px]  relative z-50'>
                    <Expertise />
                </div>
            </div>
        </div>
    )

}
