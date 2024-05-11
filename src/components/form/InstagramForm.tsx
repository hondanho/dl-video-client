"use client";
import { useState } from "react";
import { Exception, ClientException } from "@/utils/handle";

import AlertError from "@/components/ui/AlertError";
import DownloadButton from "@/components/ui/DownloadButton";
import InputField from "@/components/ui/InputField";
import { fetchVideoInfoAction } from "@/lib/instagram/actions/fetchVideoInfo";
import { downloadFile } from "@/utils";

const isValidFormInput = (postUrl: string) => {
  if (!postUrl) {
    return "Instagram URL was not provided";
  }

  if (
    !postUrl.includes("instagram.com") &&
    !postUrl.includes("www.instagram.com")
  ) {
    return "Invalid URL does not contain Instagram domain";
  }

  if (!postUrl.startsWith("https://")) {
    return 'Invalid URL it should start with "https://..."';
  }

  return "";
};

export default function InstagramForm({
  onValueClear,
  onValueChange,
  btnText,
  btnLoadingText,
  btnArialLabel,
  placeholder,
  arialLabel,
}: any) {
  const [postUrl, setPostUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleError(error: any) {
    if (error instanceof Exception) {
      setErrorMsg(error.message);
    } else {
      console.error(error);
      setErrorMsg("Something went wrong, please try again.");
    }
  }

  function handleClear() {
    setPostUrl("");
    setErrorMsg("");
    onValueClear();
  }

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    onSubmit();
  }

  async function onSubmit(setUrl?: string) {
    const postUrlValue = setUrl ?? postUrl;
    setIsLoading(true);
    setErrorMsg("");

    try {
      const inputError = isValidFormInput(postUrlValue);
      if (inputError) {
        throw new ClientException(inputError);
      }

      const response = await fetchVideoInfoAction(postUrlValue);

      if (response.status === "error") {
        throw new ClientException(response.message);
      }

      if (!response.data) {
        throw new ClientException();
      }

      // onValueChange(response.data);
      downloadFile(response.data.meta.title, response.data.formats[0].url);
    } catch (error: any) {
      handleError(error);
    }

    setIsLoading(false);
  }

  async function onPaste(event: React.ClipboardEvent<HTMLInputElement>) {
    event.preventDefault();
    const clipboardData = event.clipboardData;
    const pastedText = clipboardData.getData("text");
    setPostUrl(pastedText);
    onSubmit(pastedText);
  }

  return (
    <form
      className="flex w-full max-w-2xl flex-col items-center"
      onSubmit={handleSubmit}
    >
      <AlertError errorMsg={errorMsg} handleReset={() => setErrorMsg("")} />
      <div className="flex w-full flex-col items-center gap-2 md:flex-row">
        <InputField
          id="url-input"
          type="url"
          placeholder={placeholder}
          aria-label={arialLabel}
          title={placeholder}
          value={postUrl}
          onPaste={onPaste}
          onChange={(e) => setPostUrl(e.target.value)}
          isLoading={isLoading}
          handleClear={handleClear}
          className="h-[48px] w-full rounded border-gray-400 text-sm focus:ring-white md:text-base"
          autoComplete="on"
          autoFocus
          required
        />
        <DownloadButton
          type="submit"
          btnText={btnText}
          btnLoadingText={btnLoadingText}
          title={btnArialLabel}
          aria-label={btnArialLabel}
          isLoading={isLoading}
        />
      </div>
    </form>
  );
}
