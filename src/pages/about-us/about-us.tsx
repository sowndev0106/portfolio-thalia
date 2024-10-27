

import { useEffect, useState } from "react";
import { apiService, SERVER_URL } from "../../api";
import "./about-us.css";

const hostUrl = SERVER_URL
export default function AboutUs() {
    const [data, setData] = useState({ title: '', content: '', banner: '' });
    useEffect(() => {
        apiService.getAboutUs()
            .then(dataRes => {
                setData({
                    title: dataRes?.data?.attributes?.title,
                    content: dataRes?.data?.attributes?.content,
                    banner: dataRes?.data?.attributes?.banner?.data?.attributes?.url
                });
            })
            .catch(error => console.error('Error fetching banner data:', error));
    }, []);

    console.log({ data })

    return (

        <>
            <div>
                {/* Banner */}
                <div className={`pt-[80px] text-white bg-no-repeat bg-cover flex justify-center items-center text-center h-[400px]`}
                    style={
                        {
                            backgroundImage: `url(${hostUrl}${data.banner})`
                        }
                    }>
                    <div className="font-bold font-size-text-2xl">
                        {data.title}
                    </div>
                </div>
                <div>
                    <article className="mx-auto prose prose-custom container  flex items-center justify-between flex-col text-white w-full" style={{ color: "white" }}>
                        {
                            data.content ? <div dangerouslySetInnerHTML={{ __html: data.content }} /> :
                                <div>No content</div>
                        }
                    </article>
                </div>
            </div >

        </>
    )

}


