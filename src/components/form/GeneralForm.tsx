"use client";
import { useState } from "react";
import { Exception, ClientException, fetchVideoInfo } from "@/utils/handle";

import AlertError from "@/components/ui/AlertError";
import DownloadButton from "@/components/ui/DownloadButton";
import InputField from "@/components/ui/InputField";
import { downloadFile, getPathApiFromUrl } from "@/utils";
import { fetchVideoInfoAction } from "@/lib/instagram/actions/fetchVideoInfo";
import { useTranslations } from "next-intl";

const isValidFormInput = (postUrl: string) => {
  if (!postUrl.startsWith("https://")) {
    return 'Invalid URL it should start with "https://..."';
  }

  return "";
};

export default function GeneralForm({ onValueClear, onValueChange }: any) {
  const t = useTranslations("FormInput.general");
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

  async function instagram(postUrlValue: string) {
    const response = await fetchVideoInfoAction(postUrlValue);

    if (response.status === "error") {
      throw new ClientException(response.message);
    }

    if (!response.data) {
      throw new ClientException();
    }

    downloadFile(response.data.meta.title, response.data.formats[0].url);
  }

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    onSubmit();
  }

  async function onSubmit(setUrl?: string) {
    const postUrlValue = setUrl ?? postUrl;
    setIsLoading(true);
    setErrorMsg("");
    onValueClear();

    try {
      const inputError = isValidFormInput(postUrlValue);
      if (inputError) {
        throw new ClientException(inputError);
      }

      if (
        postUrlValue.includes("instagram.com") ||
        postUrlValue.includes("www.instagram.com")
      ) {
        await instagram(postUrlValue);
      } else {
        const apiPath = getPathApiFromUrl(postUrlValue);
        const response: any = await fetchVideoInfo({
          apiUrl: `${process.env.NEXT_PUBLIC_API_URL}/${apiPath}`,
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
      }
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
          placeholder={t("placeholder")}
          aria-label={t("arialLabel")}
          title={t("placeholder")}
          value={postUrl}
          onPaste={onPaste}
          onChange={(e) => setPostUrl(e.target.value)}
          isLoading={isLoading}
          handleClear={handleClear}
          className="shadow-form h-[48px] w-full rounded border-gray-400 text-sm focus:ring-white md:text-base"
          autoComplete="on"
          autoFocus
          required
        />
        <DownloadButton
          type="submit"
          btnLoadingText={t("btnLoadingText")}
          btnText={t("btnText")}
          className="shadow-form"
          title="Download any video button"
          aria-label="Download any video button"
          isLoading={isLoading}
        />
      </div>
    </form>
  );
}
