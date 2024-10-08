import { ReactNode } from "react";
import { Metadata } from "next";
import { pageMetadata } from "@/configs/seo";

type Props = {
  children: ReactNode;
};

export const metadata = async (): Promise<Metadata> => {
  return await pageMetadata(
    "Page.download-twitch-clip",
    "download-twitch-clip",
    "/images/open-graph/open-graph-twitch-clip.png"
  );
};

export default function RootLayout({ children }: Props) {
  return children;
}
