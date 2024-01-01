"use client";

import Image from "next/image";
import { cn } from "@/utils";
import { useState } from "react";
import { Format, VideoInfo } from "@/types";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { CardVideoInfo } from "@/components/ui/CardVideoInfo";
import GeneralForm from "@/components/form/GeneralForm";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import StructuredData from "@/components/StructuredData";

const FAQ_LIST = [
  {
    question: "Is this website free?",
    answer:
      "Yes, this website is free. We do not collect any personal information from our users.",
  },
  {
    question: "Can I download stories?",
    answer: "No, downloading stories is not supported.",
  },
  {
    question: "Can I download images from ?",
    answer: "No, we only provide the service of downloading videos.",
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
    question: "Can I download videos from private accounts?",
    answer: "No, you cannot download videos from private accounts.",
  },
  {
    question: "What is the best format to download videos in?",
    answer:
      "The best format to download videos in is MP4. MP4 is a widely supported video format that can be played on most devices.",
  },
];

export default function Home() {
  const t = useTranslations("Page");
  const structuredHowToJson = structuredHowTo();
  const structuredSoftwareApplicationJson = structuredSoftwareApplication(t);
  const structuredVideoObjectJson = structuredVideoObject();
  const structuredFaqJson = structuredFaq();
  const structuredEntertainmentBusinessJson = structuredEntertainmentBusiness(t);

  const initVideoInfo = {
    thumb: "",
    title: "",
    channel: "",
    view_count: 0,
    duration: "",
    formats: [],
  };

  const locale = useLocale();

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
          Online Video Downloader
        </h1>
        <GeneralForm
          onValueChange={handleValueChange}
          onValueClear={handleValueClean}
        />
        <div className="mx-auto mt-4 text-xs md:text-sm prose prose-neutral prose-a:no-underline marker:text-xl text-white">
          <p>By downloading this video, you agree to the <Link href={`/${locale}/privacy-policy`} className="text-[#3BDF70] font-bold">Privacy Policy</Link>.
          </p>
        </div>
      </section>
      {videoInfo && <CardVideoInfo videoInfo={videoInfo} />}
      <div className="container mx-auto mb-16 mt-16 flex w-full flex-col gap-24 px-4 text-sm md:px-4 md:text-base">

        <section className="mx-auto flex max-w-2xl grid-cols-5 flex-wrap items-start justify-center gap-12 md:grid">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-lg p-2">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="h-9 w-9 text-cyan-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M336 416h-11.17l9.26-27.77L267 336.4 240.49 416H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm297.82 42.1L377 259.59 426.17 112H544v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16H176a16 16 0 0 0-16 16v43.9L45.46 3.38A16 16 0 0 0 23 6.19L3.37 31.46a16 16 0 0 0 2.81 22.45l588.36 454.72a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zM309.91 207.76L224 141.36V112h117.83z">
                </path>
              </svg>
            </div>
            <h2 className="whitespace-nowrap pt-3 text-sm">No watermark</h2>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-lg p-2">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-9 w-9 text-purple-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM7.5 11.25V9H6V15H7.5V12.75H9.5V15H11V9H9.5V11.25H7.5ZM14.5 10.5H16C16.2761 10.5 16.5 10.7239 16.5 11V13C16.5 13.2761 16.2761 13.5 16 13.5H14.5V10.5ZM13 9V15H16C17.1046 15 18 14.1046 18 13V11C18 9.89543 17.1046 9 16 9H13Z">
                </path>
              </svg>
            </div>
            <h2 className="whitespace-nowrap pt-3 text-sm">HD quality</h2>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-lg p-2">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="h-9 w-9 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z">
                </path>
                <path fillRule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z">
                </path>
              </svg>
            </div>
            <h2 className="whitespace-nowrap pt-3 text-sm">Fast download</h2>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-lg p-2">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-9 w-9 text-green-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M203.1 158.3c5.2-11.2 8.1-23.5 8.1-36.7 0-49.5-40.1-89.6-89.6-89.6S32 72.1 32 121.6s40.1 89.6 89.6 89.6c13.2 0 25.5-2.9 36.7-8.1l52.9 52.9-52.9 52.9c-11.2-5.2-23.5-8.1-36.7-8.1-49.5 0-89.6 40.1-89.6 89.6S72.1 480 121.6 480s89.6-40.1 89.6-89.6c0-13.2-2.9-25.5-8.1-36.7l52.9-52.9 156.8 156.8H480v-22.4L203.1 158.3zm-81.5 8.1c-24.6 0-44.8-19.9-44.8-44.8S97 76.8 121.6 76.8s44.8 19.9 44.8 44.8-20.2 44.8-44.8 44.8zm0 268.8c-24.6 0-44.8-19.9-44.8-44.8s20.2-44.8 44.8-44.8 44.8 19.9 44.8 44.8-20.2 44.8-44.8 44.8zm134.4-168c-6.3 0-11.2-4.9-11.2-11.2 0-6.3 4.9-11.2 11.2-11.2 6.3 0 11.2 4.9 11.2 11.2 0 6.3-4.9 11.2-11.2 11.2zM412.8 54.4L278.4 188.8l44.8 44.8L480 76.8V54.4h-67.2z">
                </path>
              </svg>
            </div>
            <h2 className="whitespace-nowrap pt-3 text-sm">Easily editable</h2>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-lg p-2">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" className="h-9 w-9 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 11h-1.586l-2.5-2.5 2.5-2.5h1.586v2.5l3.5-3.5-3.5-3.5v2.5h-2c-0.265 0-0.52 0.105-0.707 0.293l-2.793 2.793-2.793-2.793c-0.188-0.188-0.442-0.293-0.707-0.293h-3v2h2.586l2.5 2.5-2.5 2.5h-2.586v2h3c0.265 0 0.52-0.105 0.707-0.293l2.793-2.793 2.793 2.793c0.188 0.188 0.442 0.293 0.707 0.293h2v2.5l3.5-3.5-3.5-3.5v2.5z">
                </path>
              </svg>
            </div>
            <h2 className="whitespace-nowrap pt-3 text-sm">Any format</h2>
          </div>
        </section>

        <section className="grid grid-flow-row text-center md:gap-16 pb-0 md:pb-0">
          <h2 className="text-2xl font-medium leading-tight tracking-tight sm:text-4xl">How to download videos online</h2>
          <div className="grid grid-cols-1 items-start justify-items-center gap-12 sm:grid-cols-3">
            <div className="grid grid-flow-row justify-items-center gap-2">
              <h3 className="text-xl font-bold leading-tight tracking-tight">1. Paste a any video URL</h3>
              <div className="max-w-full prose prose-neutral prose-a:no-underline prose-a:text-blue-600 marker:text-xl marker:text-blue-600">
                <p>Paste a any video URL on the field provided and hit Download. Click “Accept” to acknowledge that you’ve read and agreed to our privacy policy.</p>
              </div>
              <Image alt="Paste a any video URL"
                src={"/images/home/Paste_a_video_URL_69db3bce0f.png"}
                width="250" height="213" decoding="async" data-nimg="1" loading="lazy" />
            </div>
            <div className="grid grid-flow-row justify-items-center gap-2">
              <h3 className="text-xl font-bold leading-tight tracking-tight">2. Edit or download</h3>
              <div className="max-w-full prose prose-neutral prose-a:no-underline prose-a:text-blue-600 marker:text-xl marker:text-blue-600">
                <p>You have the option to edit your video using our complete suite of video editing tools. Or click “Download now” to save your video to your device.</p>
              </div>
              <Image alt="Edit or download"
                src={"/images/home/Edit_or_download_66e0255ec1.png"}
                width="250" height="213" decoding="async" data-nimg="1" loading="lazy" />
            </div>
            <div className="grid grid-flow-row justify-items-center gap-2">
              <h3 className="text-xl font-bold leading-tight tracking-tight">3. Share</h3>
              <div className="max-w-full prose prose-neutral prose-a:no-underline prose-a:text-blue-600 marker:text-xl marker:text-blue-600">
                <p>Export your video and share!</p>
              </div>
              <Image alt="Share tool download video online"
                src={"/images/home/Share_313367e072.png"}
                width="250" height="213" decoding="async" data-nimg="1" loading="lazy" />
            </div>
          </div>
        </section>

        <section id="logo-section" className="mb-16 mx-auto flex flex-wrap items-center justify-center gap-8">
          <Image alt="Facebook Logo" src="/images/home/facebook_eeafacb0ea.png" width="111" height="21" decoding="async" data-nimg="1" />
          <Image alt="Visa Logo" src="/images/home/visa_c3a605a752.png" width="60" height="21" decoding="async" data-nimg="1" />
          <Image alt="P&amp;G Logo" src="/images/home/pandg_ed1613b589.png" width="45" height="21" decoding="async" data-nimg="1" />
          <Image alt="Pinterest Logo" src="/images/home/pinterest_e2176fc546.png" width="91" height="22" decoding="async" data-nimg="1" />
          <Image alt="Booking Logo" src="/images/home/booking_com_2eb121846e.png" width="108" height="18" decoding="async" data-nimg="1" />
          <Image alt="Hublot Logo" src="/images/home/hublot_238379d6c6.png" width="122" height="17" decoding="async" data-nimg="1" />
        </section>

        <section className="grid grid-flow-row gap-4 rounded bg-gray-100  p-10">
          <h2 className="text-2xl font-medium leading-tight tracking-tight lg:text-3xl">Instant Download Video Online</h2>
          <div className="max-w-none md:columns-2 prose prose-neutral prose-a:no-underline prose-a:text-blue-600 marker:text-xl marker:text-blue-600">
            <p>Download Video Online You can download video clips from <Link className="text-primary" href="/">{process.env.NEXT_PUBLIC_WEBSITE_URL}</Link> in just one click! Download Video Online lets you download video content from any platforms such as Youtube, Tiktok, Facebook, Twitter, Instagram, Twitch,... then you can edit, repurpose, and share them anywhere. No watermarks, no loss in video quality, and fast! </p>
            <p>Download Video Online works straight from your Mobile or Desktop Browser or Mobile App. You can even edit your videos using our free built-in video editor. You can also add images, audio, text, subtitles, and more. For more information, you can view Terms of Service. Thank you.</p>
          </div>
        </section>

        <section className="grid grid-flow-row gap-12 text-center sm:text-start md:gap-32 ">
          <div className="grid grid-cols-1 gap-8 sm:gap-32 md:grid-cols-2">
            <div className="grid grid-flow-row content-start gap-4">
              <div className="max-w-full prose prose-neutral prose-a:no-underline prose-a:text-blue-600 marker:text-xl marker:text-blue-600">
                <h2 className="text-2xl font-medium leading-tight tracking-tight lg:text-3xl mb-5">Download video online and remove the watermark</h2>
                <p>Download Video Online lets you download content with no watermarks so you can repurpose and share them anywhere. No loss in video quality—download videos in HD and in any format the video has been uploaded. Perfect for content creators everywhere! Share your videos on your YouTube, gaming, and podcast channels and grow your following.</p>
              </div>
            </div>
            <Image alt="Download Video Online remove the watermark"
              sizes="(min-width: 1536px) 512px, (min-width: 1280px) 480px, (min-width: 1024px) 352px, (min-width: 768px) 272px, (min-width: 640px) 512px, 296px"
              src="/images/home/Add_voice_overs_to_your_video_instantly_1b5fc1ddfc.webp"
              width="512" height="378" decoding="async" data-nimg="1" className="h-auto" loading="lazy" />
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-32 md:grid-cols-2">
            <div className="grid grid-flow-row content-start gap-4 md:order-last">
              <div className="max-w-full prose prose-neutral prose-a:no-underline prose-a:text-blue-600 marker:text-xl marker:text-blue-600">
                <h2 className="text-2xl font-medium leading-tight tracking-tight lg:text-3xl mb-5">Add voice overs to your video instantly</h2>
                <p>If you don’t have the time or resources to add voiceovers, you can use Download Video Online <a href="#" className="text-primary">text-to-speech software</a>! Our TTS uses real human voices. Choose from different languages and voice profiles. Our text-to-voice AI will read your text in that accent. Just paste a text or start typing and add the audio to your video! It’s super easy to use and free. Adding voiceovers from text saves you a lot of time and effort in creating your video. </p>
              </div>
            </div>
            <Image alt="Add voice overs to your video instantly"
              sizes="(min-width: 1536px) 512px, (min-width: 1280px) 480px, (min-width: 1024px) 352px, (min-width: 768px) 272px, (min-width: 640px) 512px, 296px"
              src="/images/home/Download_Twitch_clips_and_remove_the_watermark_abeab12228.webp"
              width="512" height="378" decoding="async" data-nimg="1" className="h-auto" loading="lazy" />
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-32 md:grid-cols-2">
            <div className="grid grid-flow-row content-start gap-4">
              <div className="max-w-full prose prose-neutral prose-a:no-underline prose-a:text-blue-600 marker:text-xl marker:text-blue-600">
                <h2 className="text-2xl font-medium leading-tight tracking-tight lg:text-3xl mb-5">Create professional-looking videos in a few clicks</h2>
                <p>If you’re a streamer, chances are you also have other social media channels to maintain. Repurposing your content for different platforms has never been easier. With Download Video Online’s built-in video editing software, you can create professional-looking videos in just a few clicks—straight from your browser. Add sound effects, background music, images, text, subtitles, and more. You can also record your screen and webcam using our free <a href="#" className="text-primary">screen recorder</a>. Create gaming walkthroughs and more! </p>
              </div>
            </div>
            <Image alt="Create professional-looking videos in a few clicks"
              sizes="(min-width: 1536px) 512px, (min-width: 1280px) 480px, (min-width: 1024px) 352px, (min-width: 768px) 272px, (min-width: 640px) 512px, 296px"
              src="/images/home/Create_professional_looking_videos_in_a_few_clicks_7329a86885.webp"
              width="512" height="378" decoding="async" data-nimg="1" className="h-auto" loading="lazy" />
          </div>
        </section>

        <section>
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
            className="gap-2 rounded border"
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
                We now provide an app for video Download. It is fast,
                easy, with no watermark and HD quality
              </p>
              <div className="item-center flex justify-center gap-5 text-center">
                <Image
                  src={"/images/googleplay.svg"}
                  width={165}
                  height={48}
                  alt="googleplay app url"
                />
                <Image
                  src={"/images/app-store.svg"}
                  width={145}
                  height={48}
                  alt="apple app url"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <StructuredData data={structuredSoftwareApplicationJson} />
      <StructuredData data={structuredHowToJson} />
      <StructuredData data={structuredVideoObjectJson} />
      <StructuredData data={structuredFaqJson} />
      <StructuredData data={structuredEntertainmentBusinessJson} />
    </main>
  );
}

const structuredVideoObject = () => {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Video Downloader Tutorial",
    "contentUrl": process.env.NEXT_PUBLIC_LINK_YOUTUBE,
    "embedUrl": process.env.NEXT_PUBLIC_LINK_YOUTUBE_EMBED,
    "thumbnailUrl": process.env.NEXT_PUBLIC_LINK_THUMBNAIL_URL,
    "description": "Download videos online from your browser. Edit, save, and share anywhere!",
    "duration": "PT2M",
    "productionCompany": {
      "@type": "Organization",
      "url": process.env.NEXT_PUBLIC_WEBSITE_URL,
      "name": "Download Video Online"
    },
    "author": {
      "@type": "Organization",
      "url": process.env.NEXT_PUBLIC_WEBSITE_URL,
      "name": "Download Video Online"
    },
    "keywords": "Video Downloader Tutorial",
    "uploadDate": "2022-07-09T17:23:47.793Z"
  };
}

const structuredHowTo = () => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to download videos:",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Paste a video URL",
        "itemListElement": [
          {
            "@type": "HowToDirection",
            "text": "Paste a video URL (from Instagram, Twitch, TikTok, Twitter, Facebook, Youtube, Pinterest and Vimeo) on the field provided and hit Download. Click “Accept” to acknowledge that you’ve read and agreed to our fair-use policy. "
          }
        ]
      },
      {
        "@type": "HowToStep",
        "name": "Edit or download",
        "itemListElement": [
          {
            "@type": "HowToDirection",
            "text": "You have the option to edit your video using our complete suite of video editing tools. Or click “Download now” to save your video to your device. "
          }
        ]
      },
      {
        "@type": "HowToStep",
        "name": "Share",
        "itemListElement": [
          {
            "@type": "HowToDirection",
            "text": "Export your video and share! "
          }
        ]
      }
    ],
    "video": {
      "@type": "VideoObject",
      "name": "Video Downloader Tutorial",
      "description": "Download videos online from your browser. Edit, save, and share anywhere!",
      "contentUrl": process.env.NEXT_PUBLIC_LINK_YOUTUBE,
      "embedUrl": process.env.NEXT_PUBLIC_LINK_YOUTUBE_EMBED,
      "thumbnailUrl": process.env.NEXT_PUBLIC_LINK_THUMBNAIL_URL,
      "uploadDate": "2022-07-09T17:23:47.793Z",
      "duration": "PT2M"
    }
  };
}

const structuredSoftwareApplication = (t: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "url": process.env.NEXT_PUBLIC_WEBSITE_URL,
    "name": t("youtube-shorts-downloader.title"),
    "description": t("youtube-shorts-downloader.description"),
    "operatingSystem": "Windows, MacOS, Chrome OS, Linux, iOS, Android",
    "applicationCategory": "MultimediaApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.9,
      "bestRating": 5,
      "ratingCount": 79
    },
    "offers": {
      "@type": "Offer",
      "price": 0,
      "priceCurrency": "GBP"
    }
  };
}

const structuredFaq = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_LIST.map(x => {
      return {
        "@type": "Question",
        "name": x.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": x.answer
        }
      }
    })
  };
}

const structuredEntertainmentBusiness = (t: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    "name": "Download Video Online",
    "alternateName": "Download Video Online - Online Youtube Downloader",
    "@id": process.env.NEXT_PUBLIC_WEBSITE_URL,
    "logo": "/images/android-chrome-512x512.png",
    "image": "/images/android-chrome-512x512.png",
    "description": t("youtube-shorts-downloader.description"),
    "priceRange": "free",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1203 W Monroe St",
      "addressLocality": "Phoenix",
      "addressRegion": "Arizona",
      "postalCode": "85007",
      "addressCountry": "US"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61554864750576",
      "https://www.instagram.com/downloadvideoonline/",
      "https://www.pinterest.com/DownloadVideoOnlineZ/",
      "https://www.tiktok.com/@downloadvideoonline",
      "http://www.youtube.com/@DownloadVideoOnline",
      "https://www.tumblr.com/blog/downloadvideoonline3232"
    ]
  }
}