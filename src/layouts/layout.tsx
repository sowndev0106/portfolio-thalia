
import { Outlet } from "react-router-dom";
import Footer from "../sections/footer";
import BannerHeader from "../sections/homepages/banner-header";
import Expertise from "../sections/homepages/expertise";
import MainNav from "../sections/nav/main-nav";
import HaveAnIdea from "../sections/homepages/have-an-idea";

export default function Layout() {
    return (
        <div className="bg-black h-full " >
            < MainNav />
            <Outlet />
            <HaveAnIdea />
            <Footer />
        </div >
    )

}
