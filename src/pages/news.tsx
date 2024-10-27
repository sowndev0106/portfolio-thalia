

import { useEffect, useState } from "react";
import { apiService, SERVER_URL } from "../api";
import RenderNews from "../components/render-news/RenderNews";
import { useParams } from "react-router-dom";
const hostUrl = SERVER_URL
export default function News() {
    const { slug } = useParams();
    const [data, setData] = useState({ title: '', content: '', banner: '' });

    useEffect(() => {
        if (!slug) return;
        apiService.getNewsBySlug(slug)
            .then(dataRes => {
                if (dataRes.data[0]) {
                    setData({
                        title: dataRes?.data[0]?.attributes?.title,
                        content: dataRes?.data[0]?.attributes?.content,
                        banner: dataRes?.data[0]?.attributes?.banner?.data?.attributes?.url
                    });
                    return;
                }
            })
            .catch(error => console.error('Error fetching banner data:', error));
    }, [slug]);

    return (
        <>
            <RenderNews {...data} />
        </>
    )
}


