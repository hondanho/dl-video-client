import Image from "next/image";
import { downloadFile, formatViewCount } from "@/utils";
import { Button } from "@nextui-org/button";
import { Format } from "@/types";
import { useState } from "react";

export const CardVideoInfo = ({ videoInfo }: any) => {
  const [visibleItems, setVisibleItems] = useState(3); // Số lượng mục được hiển thị ban đầu
  const addDotEveryNChars = (str: string, n: number) => {
    if (!str || str.length <= n) return str;
    
    let result = str.slice(0, n);
    return result += '...';
  }

  const videoInfoEle = () => {
    return <div className="video-info z-10 flex w-[650px] flex-wrap rounded-md bg-gray-200">
            <div className="rounded-md p-2 md:w-1/2 xl:w-1/2">
              <div className="h-[184px] md:w-full xl:w-[310px]">
                <Image
                  unoptimized={true}
                  width={310}
                  height={184}
                  src={videoInfo.thumb}
                  alt={videoInfo.title}
                  title={videoInfo.title}
                  className="card-img-top img-fluid h-full w-full rounded-md object-cover"
                />
              </div>
            </div>
            <div className="p-2 md:w-1/2 xl:w-1/2">
              <h6 className="mb-2 line-clamp-3 text-lg font-medium">
                {addDotEveryNChars(videoInfo.title, 30)}
              </h6>
              {videoInfo.uploader && (
                <div className="text-large font-bold text-gray-500">
                  {videoInfo.uploader}
                </div>
              )}
              <div className="text-gray-500">{videoInfo.channel}</div>
              {videoInfo.view_count && (
                <div className="text-gray-500">
                  {formatViewCount(videoInfo.view_count)} View{" "}
                  <span className="before:content-['•']">
                    {" "}
                    {videoInfo.duration}
                  </span>
                </div>
              )}
            </div>
        </div>
  }

  const formatEle = (item: Format, index: number) => {
    return <div key={index}>
    <Button
      color="success"
      className="h-30 mb-2 w-[300px] rounded bg-primary px-4 py-2 font-bold text-white hover:bg-blue-700"
      onClick={() =>
        downloadFile(
          `${item.name}_${process.env.NEXT_PUBLIC_DOMAIN && process.env.NEXT_PUBLIC_DOMAIN.replace(/\./g, "_")}`,
          item.url
        )
      }
      startContent={
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="text-xl"
          aria-hidden="true"
          height="25"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"></path>
        </svg>
      }
      endContent={
        item.no_audio === true ?
      <Image
        alt="no sound"
        title="no sound"
        src={"/images/home/icons8-no-sound-50.png"} 
        width="15"
        height="15"
        decoding="async"
        data-nimg="1"
        loading="lazy"
      /> : <></>}
    >
      {item?.name}
    </Button>
  </div>
  }
  return (
    <>
      {videoInfo.thumb && videoInfo.formats && (
        <section className="container mx-auto flex flex-wrap justify-center gap-5 px-5 py-20 md:col-span-2 xl:col-span-1">
          {videoInfoEle()}
          <div className="block">
            {videoInfo.formats.slice(0, visibleItems).map(formatEle)}
            <div className="text-center text-sm">
              {visibleItems < videoInfo.formats.length && (
                <Button
                className="rounded w-[300px]"
                endContent={<Image
                alt="down"
                title="down"
                src={"/images/home/icons8-arrow-down-30.png"} 
                width="15"
                height="15"
                decoding="async"
                data-nimg="1"
                loading="lazy"
              />}
                onClick={() => setVisibleItems(videoInfo.formats.length)}>
                Show More
              </Button>
              )}
              {visibleItems == videoInfo.formats.length && (
                <Button 
                className="rounded w-[300px]"
                endContent={<Image
                  alt="up"
                  title="up"
                  src={"/images/home/icons8-arrow-up-30.png"} 
                  width="15"
                  height="15"
                  decoding="async"
                  data-nimg="1"
                  loading="lazy"
                />}
                onClick={() => setVisibleItems(3)}>
                  Show Less
                </Button>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
