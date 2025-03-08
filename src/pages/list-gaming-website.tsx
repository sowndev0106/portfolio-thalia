import { useEffect, useState } from "react";
import { apiService, SERVER_URL } from "../api";
import RenderNews from "../components/render-news/RenderNews";
import { useParams } from "react-router-dom";
import GamingWebsite from "../sections/homepages/gaming-website";
import { IGamingWebsite } from "../interfaces";
import CardGaming from "../components/CardGamming";
import { Button } from "@headlessui/react";

export default function GamingWebsitePage() {
  const numberOfVisible = 8;
  const [gamingWebsites, setGamingWebsites] = useState<Array<IGamingWebsite>>(
    []
  );
  const [visibleCount, setVisibleCount] = useState(numberOfVisible);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiService
      .getListGamingWebsites()
      .then((dataRes) => {
        if (dataRes?.data) {
          const data = dataRes.data.map((item: any) => {
            return {
              title: item?.attributes?.title,
              content: item?.attributes?.content,
              slug: item?.attributes?.slug,
              liveWebsiteUrl: item?.attributes?.liveWebsiteUrl,
              projectUrl: item?.attributes?.projectUrl,
              headerImage:
                SERVER_URL +
                item?.attributes?.headerImage?.data?.attributes?.url,
              thumbnail:
                SERVER_URL + item?.attributes?.thumbnail?.data?.attributes?.url,
            };
          });
          setGamingWebsites(data);
        }
      })
      .catch((error) => console.error("Error fetching banner data:", error))
      .finally(() => setLoading(false));
  }, []);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + numberOfVisible);
  };

  const displayedWebsites = gamingWebsites.slice(0, visibleCount);

  return (
    <>
      <div
        className={`text-white bg-no-repeat bg-cover flex justify-center items-center text-center h-[400px]`}
        style={{
          backgroundImage: `url(./assets/images/background/gaming-web-header.png)`,
        }}
      >
        <div className="pt-[80px] font-bold font-size-text-2xl">
          Gaming website
        </div>
      </div>
      <div className="mx-auto container pt-10 scroll-smooth scroll-mt-20">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <svg
              className="animate-spin h-10 w-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        ) : (
          <>
            <div className="pt-20 mx-5 sm:mx-0 scroll-mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7  ">
              {displayedWebsites.map((item) => (
                <CardGaming
                  key={item.slug}
                  image={item.thumbnail}
                  title={item.title}
                  urlProject={item.projectUrl}
                  urlLive={item.liveWebsiteUrl}
                  urlDetail={`/gaming-websites/${item.slug}`}
                />
              ))}
            </div>
            {visibleCount < gamingWebsites.length && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={handleSeeMore}
                  type="button"
                  className="flex gap-1 items-center text-white bg-white bg-opacity-20 border border-gray-300 focus:outline-none hover:bg-opacity-30 focus:ring-4 font-medium rounded-3xl text-lg px-5 py-2.5"
                >
                  Load more{" "}
                  <svg
                    className="w-4 h-4 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1v12m0 0 4-4m-4 4L1 9"
                    />
                  </svg>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
