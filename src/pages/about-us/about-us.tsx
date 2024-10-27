

import { useEffect, useState } from "react";
import { apiService, SERVER_URL } from "../../api";
import "./about-us.css";
import RenderNews from "../../components/render-news/RenderNews";

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

    return (
        <>
            <RenderNews {...data} />
        </>
    )

}


