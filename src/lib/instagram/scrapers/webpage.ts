import { load } from "cheerio";
import { CheerioAPI } from "cheerio";

import { enableWebpage } from "@/configs/instagram";

import { makeHttpRequest } from "@/utils/request";
import { handleScraperError } from "@/utils/handle";
import { VideoInfo } from "@/types";

export const formatPageJson = (postHtml: CheerioAPI) => {
  const videoElement = postHtml("meta[property='og:video']");

  if (videoElement.length === 0) {
    return null;
  }

  const videoUrl = videoElement.attr("content");
  if (!videoUrl) return null;

  const videoJson: VideoInfo = {
    thumb: postHtml("meta[property='og:image']").attr("content") ?? "",
    meta: {
      desc: postHtml("meta[property='og:description']").attr("content") ?? "",
      title: postHtml("meta[property='og:title']").attr("content") ?? "",
      duration: "",
      source: "webpage",
      tags: [],
      uploader: ""
    },
    formats: [{
      url: videoUrl,
      audio : true,
      name: "Download video HD",
      quality: 1,
      type: "video_yes_audio",
      video: true
    }],
    video_quality: [],
    channel: "",
    view_count: 0
  };

  return videoJson;
};

export const fetchFromPage = async (postId: string, timeout: number = 0) => {
  if (!enableWebpage) {
    console.log("Instagram Webpage Scraper is disabled in @config/instagram");
    return null;
  }

  const postUrl = "https://www.instagram.com/p/" + postId;

  const headers = {
    accept: "*/*",
    host: "www.instagram.com",
    referer: "https://www.instagram.com/",
    DNT: "1",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/117.0",
  };

  let response;
  try {
    response = await makeHttpRequest({
      url: postUrl,
      method: "GET",
      headers,
      timeout,
    });
  } catch (e: any) {
    handleScraperError(e);
    return null;
  }

  if (response.statusText === "error") {
    return null;
  }

  if (!response.data) return null;

  const postHtml = load(response.data);
  const videoElement = postHtml("meta[property='og:video']");

  if (videoElement.length === 0) {
    return null;
  }

  const formattedJson = formatPageJson(postHtml);
  return formattedJson;
};
