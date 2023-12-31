"use server";

import { VideoInfo } from "@/types";
import { Exception } from "@/lib/exceptions";
import { fetchPostInstagramJson } from "@/lib/instagram";
import { makeErrorResponse, makeSuccessResponse } from "@/utils/request";

function handleError(error: any) {
  if (error instanceof Exception) {
    return makeErrorResponse(error.message);
  } else {
    console.error(error);
    return makeErrorResponse();
  }
}

export async function fetchVideoInfoAction(postUrl: string) {
  try {
    const videoInfo = await fetchPostInstagramJson(postUrl);
    const response = makeSuccessResponse<VideoInfo>(videoInfo);
    return response;
  } catch (error: any) {
    return handleError(error);
  }
}
