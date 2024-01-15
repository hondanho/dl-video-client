import { ReactNode } from "react";
import { Metadata } from "next";
import { pageMetadata } from "@/configs/seo";

type Props = {
  children: ReactNode;
};

export const metadata = async (): Promise<Metadata> => {
  return await pageMetadata(
    "Page.download-youtube-shorts",
    "download-youtube-shorts",
    "/images/open-graph/open-graph-youtube-shorts.png"
  );
};

export default function RootLayout({ children }: Props) {
  return children;
}
