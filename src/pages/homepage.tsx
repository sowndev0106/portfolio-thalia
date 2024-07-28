
import BannerHeader from "../sections/homepages/banner-header";
import Expertise from "../sections/homepages/expertise";
import MainNav from "../sections/nav/main-nav";

export default function Homepage() {

    return (
        <div className="bg-white">
            <MainNav />
            <BannerHeader />
            <div className="bg-zinc-800" >
                <div className='bg-center h-[2200px] bg-homepage  bg-no-repeat bg-cover p-10 rounded-t-[150px]  relative z-10'>
                    <Expertise />
                </div>
            </div>
        </div>
    )

}
