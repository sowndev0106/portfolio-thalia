
import Footer from "../sections/footer";
import BannerHeader from "../sections/homepages/banner-header";
import Expertise from "../sections/homepages/expertise";
import MainNav from "../sections/nav/main-nav";

export default function Homepage() {
    return (
        < >

            <BannerHeader />
            <div className='bg-center bg-homepage  bg-no-repeat bg-cover sm:rounded-t-[0px]  md:rounded-t-[100px]  relative z-40'>
                <Expertise />
            </div>
        </>
    )

}
