

import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import "..//ckeditor5-content.css"

const hostUrl = 'http://localhost:1337';

export default function AboutUs() {
    const [data, setData] = useState({ title: '', content: '', banner: '' });

    useEffect(() => {
        fetch(`${hostUrl}/api/about-us?populate=*`)
            .then(response => response.json())
            .then(dataRes => {
                console.log('dataRes:', dataRes);
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
            <div> {/* Banner */}
                <div className={`pt-[80px] text-white bg-no-repeat bg-cover  flex justify-center items-center text-center h-[400px]`}
                    style={
                        {
                            backgroundImage: `url(${hostUrl}${data.banner})`
                        }
                    }>
                    <div className="font-bold font-size-text-2xl">
                        {data.title}
                    </div>
                </div>
                <div className=" text-white">
                    <h1>ahh</h1>
                    <div className="container mx-auto mt-10 mb-10">
                        <h1><span > Thalia Design LLC</span></h1>
                        {

                        }
                    </div>
                </div>
            </div >
        </>
    )

}


