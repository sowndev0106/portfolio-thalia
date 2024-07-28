
interface ICardGamingProps {
    title: string;
    image: string;
    url?: string;
}
export default function CardGaming(props: ICardGamingProps) {
    return (
        <div>
            <div className="w-full rounded-xl p-2 border border-yellow-green border-opacity-50 " >
                <div className="p-3 flex items-center justify-between">
                    <div className="font-size-text-md  font-bold text-white">
                        {props.title}
                    </div>
                    <a href="#next-section" className="bg-[#414141] button-circle p-2 sm:p-3 ">
                        <img src="./assets/images/icon/up-arrow.png" alt="Contact" className="w-[25px] h-[25px]" />
                    </a>
                </div>
                <div className="w-full bg-cover bg-center " >
                    <img src={props.image} alt="Contact" />
                </div>
            </div>
            <div className={`mt-5 font-size-text-md underline underline-offset-2 `}>
                <a href={props.url || "#"} className={`${props.url ? "text-yellow-green" : "text-[#787777]"} flex items-center`}>
                    <div> View live website </div>
                    <img src={`${props.url ? "./assets/images/icon/up-arrow.svg" : "./assets/images/icon/up-arrow-gray.png"} `} alt="Contact" className="ml-1 w-[20px] h-[20px]" />
                </a>
            </div>
        </div>
    );
}