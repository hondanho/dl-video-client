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


export enum AudioEXTEnum {
  M4A = "m4a",
  Mhtml = "mhtml",
  Mp4 = "mp4",
  None = "none",
  The3Gp = "3gp",
  Webm = "webm",
}

export type Format = {
  name: string,
  url: string,
  audio: boolean, // check by audio_ext && video_ext
  no_audio: boolean,
  quality: number | undefined,
  ext: AudioEXTEnum,
  cookies?: string
}

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
