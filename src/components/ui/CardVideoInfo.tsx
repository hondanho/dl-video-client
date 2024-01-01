import Image from "next/image";
import { downloadFile, formatViewCount } from "@/utils";
import { Button } from "@nextui-org/button";
import { Format } from "@/types";

export const CardVideoInfo = ({ videoInfo }: any) => {
  const clearResult = () => {
    window.location.reload();
  };

  return (
    <>
      {videoInfo.thumb && (
        <section className="container mx-auto flex flex-wrap justify-center gap-5 px-5 py-20 md:col-span-2 xl:col-span-1">
          <div className=" video-info z-10 flex w-[650px] flex-wrap rounded-md bg-gray-200">
            <div className="rounded-md p-2 md:w-1/2 xl:w-1/2">
              <div className="h-[184px] md:w-full xl:w-[310px]">
                <Image
                  unoptimized={true}
                  width={310}
                  height={184}
                  src={videoInfo.thumb}
                  alt={videoInfo.title}
                  className="card-img-top img-fluid h-full w-full rounded-md object-cover"
                />
              </div>
            </div>
            <div className="p-2 md:w-1/2 xl:w-1/2">
              <h6 className="mb-2 line-clamp-3 text-lg font-medium">
                {videoInfo.title}
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
          <div className="block">
            {videoInfo.formats.map((item: Format, index: number) => (
              <div key={index}>
                <Button
                  color="success"
                  onClick={() => downloadFile(`${item.name}_${process.env.DOMAIN}`, item.url)}
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
                  className="h-30 mb-2 w-[300px] rounded bg-primary px-4 py-2 font-bold text-white hover:bg-blue-700"
                >
                  {item?.name}
                </Button>
              </div>
            ))}
            <Button
              onClick={() => clearResult()}
              className="h-30 w-[300px] rounded bg-black px-4 py-2 font-bold text-white"
            >
              Download other video
            </Button>
          </div>
        </section>
      )}
    </>
  );
};
