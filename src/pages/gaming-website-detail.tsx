import { useEffect, useState } from "react";
import { apiService, SERVER_URL } from "../api";
import RenderNews from "../components/render-news/RenderNews";
import { useParams } from "react-router-dom";
import GamingWebsite from "../sections/homepages/gaming-website";
const hostUrl = SERVER_URL;
export default function GamingWebsiteDetail() {
  const { slug } = useParams();
  const [data, setData] = useState({ title: "", content: "", banner: "" });

  useEffect(() => {
    if (!slug) return;
    apiService
      .getGamingWebsiteBySlug(slug)
      .then((dataRes) => {
        if (dataRes?.data[0]) {
          setData({
            title: dataRes?.data[0]?.attributes?.title,
            content: dataRes?.data[0]?.attributes?.content,
            banner:
              dataRes?.data[0]?.attributes?.headerImage?.data?.attributes?.url,
          });
          return;
        }
      })
      .catch((error) => console.error("Error fetching banner data:", error));
  }, [slug]);

  return (
    <>
      <RenderNews {...data} />
      <div className="mx-auto container  pt-10 scroll-smooth  scroll-mt-20 ">
        <div className="pt-20 mx-5 sm:mx-0  scroll-mt-20" id="game-industry">
          <GamingWebsite />
        </div>
      </div>
    </>
  );
}
