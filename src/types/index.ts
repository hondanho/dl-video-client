export type VideoInfo = {
  thumb: string;
  channel: string;
  meta: {
    duration: string;
    source: string;
    tags: string[];
    title: string;
    desc: string;
    uploader: string;
  };
  video_quality: string[];
  view_count: number;
  formats: Format[];
};

export type Format = {
  url: string;
  audio: boolean;
  video: boolean;
  type: "audio" | "video_yes_audio" | "video_no_audio";
  name: string;
  quality: number;
};

export type SuccessResponse<T> = {
  status: "success";
  message?: string;
  data?: T;
};

export type ErrorResponse = {
  status: "error";
  message: string;
};

export type APIResponse<T> = SuccessResponse<T> | ErrorResponse;

export type FAQ = {
  question: string;
  answer: string;
};
