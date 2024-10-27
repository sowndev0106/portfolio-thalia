

import { useEffect, useState } from "react";
import { apiService, SERVER_URL } from "../../api";
import "./index.css";

const hostUrl = SERVER_URL
export interface PropsRenderNews {
    title: string;
    content: string;
    banner: string;
}
export default function RenderNews(data: PropsRenderNews) {
    return (

        <>
            <div >
                {/* Banner */}
                <div className={` text-white bg-no-repeat bg-cover flex justify-center items-center text-center h-[400px]`}
                    style={
                        {
                            backgroundImage: `url(${hostUrl}${data.banner})`
                        }
                    }>
                    <div className="pt-[80px] font-bold font-size-text-2xl">
                        {data.title}
                    </div>
                </div>
                <div className="pl-10 pr-10">
                    <article className="mx-auto prose prose-custom container flex items-center justify-between flex-col text-white w-full" style={{ color: "white" }}>
                        {
                            data.content ? <div dangerouslySetInnerHTML={{ __html: data.content }} /> :
                                <div>Post not found</div>
                        }
                    </article>
                </div>
            </div >

        </>
    )

}


