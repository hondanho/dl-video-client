import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import { ErrorResponse, SuccessResponse, VideoInfo } from "@/types";

export class Exception extends Error {
  code: number;
  /**
   * @param message
   * @param code
   */
  constructor(message = "Default Exception", code = 500) {
    super(message);
    this.code = code;
  }
}

/* Server Exceptions */

export class BadRequest extends Exception {
  /**
   * @param message
   * @param code
   */
  constructor(message = "Bad Request", code = 400) {
    super(message, code);
  }
}

export class ServerException extends Exception {
  /**
   * @param message
   * @param code
   */
  constructor(message = "Internal Server Error", code = 500) {
    super(message, code);
  }
}

export class TimeoutException extends Exception {
  /**
   * @param message
   * @param code
   */
  constructor(message = "Request timeout, please try again.", code = 408) {
    super(message, code);
  }
}

export class RatelimitException extends Exception {
  /**
   * @param message
   * @param code
   */
  constructor(message = "Too many requests, try again later.", code = 429) {
    super(message, code);
  }
}

/* Client Exceptions */

export class ClientException extends Exception {
  /**
   * @param message
   * @param code
   */
  constructor(message = "Instagram Client Exception", code = 400) {
    super(message, code);
  }
}

export const handleScraperError = (error: any) => {
  console.log("Scraper error:", error.message);
  if (error.message.includes("status code 404")) {
    throw new BadRequest("This post is private or does not exist", 404);
  } else if (error instanceof TimeoutException) {
    throw new TimeoutException();
  }
};

export const makeSuccessResponse = <T extends any>(data: T) => {
  const response: SuccessResponse<T> = {
    status: "success",
    data: data,
  };
  return response;
};

export const makeErrorResponse = (
  message: string = "Internal Server Error"
) => {
  const response: ErrorResponse = {
    status: "error",
    message: message,
  };
  return response;
};

export const makeHttpRequest = async ({
  ...args
}: AxiosRequestConfig): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse = await axios(args);
    return response;
  } catch (error: any) {
    const axiosError: AxiosError = error;
    if (axiosError.response) {
      console.error("Axios Error:", axiosError.message);
      throw new ClientException(axiosError.message);
    } else if (axiosError.request) {
      console.error("Request Error:", axiosError.request);
      throw new TimeoutException();
    } else {
      console.error("Server Error:", axiosError.message);
      throw new ServerException("Something went wrong, please try again.");
    }
  }
};

function handleError(error: any) {
  if (error instanceof Exception) {
    return makeErrorResponse(error.message);
  } else {
    console.error(error);
    return makeErrorResponse();
  }
}

export const fetchVideoInfo = async (config: {
  apiUrl: string;
  postUrl: string;
  timeout: number;
}) => {
  try {
    let videoInfo: any;
    const headers = {
      accept: "*/*",
      referer: window.location.hostname,
      "Sec-Fetch-Dest": "document",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-Site": "same-origin",
      "User-Agent": navigator.userAgent,
      "User-OS": navigator.platform,
    };
    try {
      videoInfo = await makeHttpRequest({
        url: config.apiUrl,
        method: "POST",
        data: {
          postUrl: config.postUrl,
          ts: "",
          _s: "",
          _ts: "",
          _tsc: 0,
        },
        headers,
        timeout: config.timeout,
      });
    } catch (e: any) {
      handleScraperError(e);
      return null;
    }

    if (videoInfo.statusText === "error") {
      return null;
    }

    const response = makeSuccessResponse<VideoInfo>(videoInfo);
    return response;
  } catch (error: any) {
    return handleError(error);
  }
};
