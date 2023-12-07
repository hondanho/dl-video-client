import { NextRequest } from "next/server";
import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getTimedFilename = (name: string, ext: string) => {
  const timeStamp = Math.floor(Date.now() / 1000).toString();
  return `${name}-${timeStamp}.${ext}`;
};

export const getClientIp = (request: NextRequest) => {
  let ip: string | null;

  ip = request.ip ?? request.headers.get("x-real-ip");
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (!ip && forwardedFor) {
    ip = forwardedFor.split(",").at(0) ?? null;
  }

  return ip;
};

const startFileDownload = (
  url: string,
  filename: string,
  target: string = "_self"
) => {
  const a = document.createElement("a");
  a.target = target;
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
};

export const downloadFile = async (filename: string, downloadUrl: string) => {
  try {
    const response = await fetch(downloadUrl);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    startFileDownload(blobUrl, filename);
  } catch (error) {
    startFileDownload(downloadUrl, filename, "_blank");
    console.log(error);
  }
};

export const formatViewCount = (viewCount: number) => {
  if (viewCount < 1000) {
    return viewCount.toString(); // No formatting needed for view counts below 1,000
  } else if (viewCount < 1000000) {
    return (viewCount / 1000).toFixed(1) + "K"; // Format view counts in thousands
  } else if (viewCount < 1000000000) {
    return (viewCount / 1000000).toFixed(1) + "M"; // Format view counts in millions
  } else {
    return (viewCount / 1000000000).toFixed(1) + "B"; // Format view counts in billions
  }
};
