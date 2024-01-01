"use client";
import { useState } from "react";
import { Exception, ClientException, fetchVideoInfo } from "@/utils/handle";

import AlertError from "@/components/ui/AlertError";
import DownloadButton from "@/components/ui/DownloadButton";
import InputField from "@/components/ui/InputField";
import { getPathApiFromPlatform } from "@/utils";

const isValidFormInput = (postUrl: string) => {
  if (!postUrl) {
    return "Tiktok URL was not provided";
  }

  if (!postUrl.includes("tiktok.com")) {
    return "Invalid URL does not contain Tiktok domain";
  }

  if (!postUrl.startsWith("https://")) {
    return 'Invalid URL it should start with "https://..."';
  }

  return "";
};

export default function TiktokForm({ onValueClear, onValueChange }: any) {
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
    onValueClear();

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
      const tiktokPath = getPathApiFromPlatform("tiktok");

      const response: any = await fetchVideoInfo({
        apiUrl: `${process.env.NEXT_PUBLIC_API_URL}/${tiktokPath}`,
        postUrl: postUrlValue,
        timeout: 100000,
      });

      if (response.status === "error") {
        throw new ClientException(response.message);
      }

      if (!response.data) {
        throw new ClientException();
      }

      onValueChange(response.data.data);
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
      className="flex w-full max-w-3xl flex-col items-center"
      onSubmit={handleSubmit}
    >
      <AlertError errorMsg={errorMsg} handleReset={() => setErrorMsg("")} />
      <div className="flex w-full flex-col items-center gap-2 md:flex-row">
        <InputField
          id="url-input"
          type="url"
          placeholder="Paste your video link here"
          aria-label="Tiktok video download URL input"
          title="Tiktok video download URL input"
          value={postUrl}
          onPaste={onPaste}
          onChange={(e) => setPostUrl(e.target.value)}
          isLoading={isLoading}
          handleClear={handleClear}
          className="h-[58px] w-full rounded border-gray-400 text-sm focus:ring-white md:text-base"
          autoComplete="on"
          autoFocus
          required
        />
        <DownloadButton
          type="submit"
          btnText="Download"
          btnLoadingText="Fetching"
          title="Download Tiktok video button"
          aria-label="Download Tiktok video button"
          isLoading={isLoading}
        />
      </div>
    </form>
  );
}
