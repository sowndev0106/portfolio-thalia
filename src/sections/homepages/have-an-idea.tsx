import ChipContactButton from "../../components/ChipContactButton";
import { brandingIcons, IBrandingLogo } from "./data";


interface IBrandingLogoProps {

}
export default function HaveAnIdea(props: IBrandingLogoProps) {
    return (
        <div >
            <div className="flex items-center justify-between flex-col">
                <div className={`font-size-text-2xl font-bold  mb-2  text-center  text-white`}>Have an idea? Let’s talk.</div>

                <div className={` text-white text-[14px] text-center  md:text-[22px] text-opacity-80`}>Visually attractive design from concept to final result. </div>

                <div className={` text-white text-[14px] text-center  md:text-[22px] text-opacity-80`}>We create solutions that are bold and forward-looking.</div>

            </div>
            <div className="py-10">
                <div className="flex justify-center">
                    <ChipContactButton title="Free Consultation" pathIcon="/assets/images/icon/calendar.png" />

                </div>
            </div>
        </div>
    );
}