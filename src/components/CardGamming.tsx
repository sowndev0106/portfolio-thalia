interface ICardGamingProps {
  title: string;
  image: string;
  urlLive?: string;
  urlProject?: string;
  urlDetail?: string;
}
export default function CardGaming(props: ICardGamingProps) {
  return (
    <a href={props.urlDetail || "#"} target="_blank">
      <div className="w-full rounded-xl p-2 border border-yellow-green border-opacity-50 ">
        <div className="p-3 flex items-center justify-between">
          <div className="font-size-text-sm font-bold text-white">
            {props.title}
          </div>
          <a
            href={props.urlDetail || "#"}
            className="bg-[#414141] button-circle p-2 sm:p-3 "
          >
            <img
              src="/assets/images/icon/up-arrow.png"
              alt="Contact"
              className="w-[25px] h-[25px]"
            />
          </a>
        </div>
        <div className="w-full bg-cover bg-center ">
          <img src={props.image} alt="Contact" />
        </div>
      </div>
      <div className={`mt-5 font-size-text-md underline underline-offset-2 `}>
        <a
          href={props.urlProject || "#"}
          className={`${
            props.urlProject ? "text-yellow-green" : "hidden"
          } flex items-center mb-2`}
          target="_blank"
        >
          <div> View project </div>
          <img
            src={`${
              props.urlProject
                ? "/assets/images/icon/up-arrow.svg"
                : "/assets/images/icon/up-arrow-gray.png"
            } `}
            alt="Contact"
            className="ml-1 w-[20px] h-[20px] "
          />
        </a>
        <a
          href={props.urlLive || "#"}
          className={`${
            props.urlLive ? "text-[#9360FF]" : "hidden"
          } flex items-center`}
          target="_blank"
        >
          <div> View live website </div>
          <img
            src={`${
              props.urlLive
                ? "/assets/images/icon/up-arrow-p.svg"
                : "/assets/images/icon/up-arrow-gray.png"
            } `}
            alt="Contact"
            className="ml-1 w-[12px] h-[12px]"
          />
        </a>
      </div>
    </a>
  );
}
