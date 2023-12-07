"use client";

import Image from "next/image";
import { cn } from "@/utils";
import YoutubeForm from "@/components/form/YoutubeForm";
import { useState } from "react";
import { Format, VideoInfo } from "@/types";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { CardVideoInfo } from "@/components/ui/CardVideoInfo";

const FEATURES_LIST = [
  {
    title: "Fast and Reliable",
    text: "Our reliable service ensures you get your videos without interruptions.",
  },
  {
    title: "High-Quality Downloads",
    text: "Download Youtube videos in the highest available quality.",
  },
  {
    title: "User-Friendly Interface",
    text: "No technical expertise required—just a few simple clicks.",
  },
  {
    title: "No Registration Required",
    text: "No need to create an account or log in.",
  },
  {
    title: "Unlimited Downloads",
    text: "Download as many Youtube videos as you want, with no restrictions.",
  },
  {
    title: "Supports Multiple Platforms",
    text: "Compatible with various devices and platforms, including Windows, macOS, Android, and iOS.",
  },
];

const BENEFITS_LIST = [
  "Download Youtube videos to back up your content.",
  "Download Youtube videos to preserve your memories",
  "Create your own video compilations using Youtube videos that you download.",
  "Download Youtube videos for research purposes, such as studying a particular trend or social phenomenon.",
  "Save your favorite Youtube videos to your device so you can watch them offline or share them with others.",
  "Use Youtube videos for your own creative projects, such as making YouTube videos or creating presentations.",
  "Download Youtube videos for educational purposes, such as learning about a new skill or watching a historical event.",
];

const FAQ_LIST = [
  {
    question: "Is this website free?",
    answer:
      "Yes, this website is free. We do not collect any personal information from our users.",
  },
  {
    question: "Can I download Youtube stories?",
    answer: "No, downloading Youtube stories is not supported.",
  },
  {
    question: "Can I download images from Youtube?",
    answer: "No, we only provide the service of downloading Youtube videos.",
  },
  {
    question: "Is this website secure?",
    answer:
      "Yes, this website is secure. We do not collect any personal information from our users.",
  },
  {
    question: "Can I use the website from my mobile?",
    answer: "Yes, you can use the website from your mobile or tablet.",
  },
  {
    question: "What if the video I want to download is not available?",
    answer:
      "If the video you want to download is not available, please try again later.",
  },
  {
    question: "Can I download Youtube videos from private accounts?",
    answer: "No, you cannot download Youtube videos from private accounts.",
  },
  {
    question: "What is the best format to download Youtube videos in?",
    answer:
      "The best format to download Youtube videos in is MP4. MP4 is a widely supported video format that can be played on most devices.",
  },
];

export default function Youtube() {
  const initVideoInfo = {
    thumb: "",
    title: "",
    channel: "",
    view_count: 0,
    duration: "",
    formats: [],
  };

  const [videoInfo, setVideoInfo] = useState<{
    thumb: string;
    title: string;
    channel: string;
    view_count: number;
    duration: string;
    formats: Format[];
  }>(initVideoInfo);

  const handleValueChange = (dataInfo: VideoInfo) => {
    setVideoInfo({
      ...videoInfo,
      thumb: dataInfo.thumb,
      title: dataInfo.meta.title,
      duration: dataInfo.meta.duration,
      formats: dataInfo.formats,
      view_count: dataInfo.view_count,
      channel: dataInfo.channel,
    });
  };

  const handleValueClean = () => {
    setVideoInfo(initVideoInfo);
  };

  return (
    <main id="main" className="flex w-full flex-1 flex-col">
      <section
        id="#download"
        className="video-input flex w-full flex-col items-center bg-primary px-4 pb-20 pt-28 shadow-sm"
      >
        <h1 className="py-2 text-center text-2xl font-extrabold text-white sm:text-4xl">
          Youtube Video Mp4
        </h1>
        <YoutubeForm
          onValueChange={handleValueChange}
          onValueClear={handleValueClean}
        />
      </section>
      {videoInfo && <CardVideoInfo videoInfo={videoInfo} />}
      <div className="container mx-auto mb-12 mt-8 flex w-full flex-col gap-8 px-4 text-sm md:px-4 md:text-base">
        <section id="welcome">
          <h2 className={cn("mb-4 text-xl font-bold sm:text-3xl")}>
            Welcome to Youtube Video To Mp4
          </h2>
          <p className="leading-7">
            Welcome to Youtube Video Downloader! Unlock the world of Youtube
            videos like never before. Our user-friendly platform empowers you to
            effortlessly save your favorite Youtube videos, offering you the
            convenience and freedom to enjoy them offline. With high-quality
            downloads, speed, and reliability at the core of our service, you
            can trust us for all your video downloading needs. Explore our
            user-friendly interface and start building your own offline
            collection of Youtube content. Discover the world of Youtube videos
            with ease and convenience, right here!
          </p>
        </section>

        <hr className="w-full" />

        <section id="features">
          <h2 className={cn("mb-2 text-xl font-semibold sm:text-2xl")}>
            Youtube Video Downloader Features
          </h2>
          <ul className="ml-6 flex list-disc flex-col gap-1 leading-7">
            {FEATURES_LIST.map(({ title, text }, index) => (
              <li key={index}>
                <span className="font-medium">{title}</span>
                {": "}
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </section>

        <hr className="w-full" />

        <section id="instructions">
          <h2 className={cn("py-2 text-xl font-semibold sm:text-2xl")}>
            How to download Youtube videos
          </h2>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Go to the Youtube video that you want to download.</li>
            <li>Copy the URL of the video.</li>
            <li>Paste the URL into the search bar on this website.</li>
            <li>Click the `Download` button.</li>
          </ol>
        </section>

        <hr className="w-full" />

        <section id="benefits">
          <h2 className={cn("py-2 text-xl font-semibold sm:text-2xl")}>
            Benefits of using our Downloader
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            {BENEFITS_LIST.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </section>

        <hr className="w-full" />

        <section id="faq">
          <h2
            className={cn(
              "mb-2 py-2 text-center text-xl font-semibold sm:text-2xl"
            )}
          >
            Frequently Asked Questions - FAQ
          </h2>
          <Accordion
            defaultExpandedKeys={["0"]}
            variant="bordered"
            className="gap-2 rounded"
          >
            {FAQ_LIST.map(({ question, answer }, index) => (
              <AccordionItem
                key={index}
                aria-label={question}
                title={question}
                className="rounded"
              >
                {answer}
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="body-font text-gray-600">
          <div className="mx-auto flex flex-col items-center justify-center px-5 py-10">
            <div className="flex w-full flex-col items-center gap-4 text-center md:w-2/3">
              <h1 className="title-font text-3xl font-medium text-gray-900 sm:text-4xl">
                Download with app
              </h1>
              <p className="leading-relaxed">
                We now provide an app for Youtube video Download. It is fast,
                easy, with no watermark and HD quality
              </p>
              <div className="flex gap-5">
                <Image
                  src={"/images/googleplay.svg"}
                  width={165}
                  height={48}
                  alt="logo"
                />
                <Image
                  src={"/images/app-store.svg"}
                  width={145}
                  height={48}
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
