import fs from "fs";
import { MetadataRoute } from "next";
import path from "path";
import slugify from "slugify";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_WEBSITE_URL ??
    "https://www.downloadvideoonline.org";
  const languages: string[] = [];
  let result: any[] = [];

  const rootPath = process.cwd();
  // const rootPath = "..";
  const files = fs.readdirSync(path.join(rootPath, "messages"));
  const directories = fs.readdirSync(
    path.join(rootPath, "src", "app", "[locale]"),
    { withFileTypes: true }
  );

  const localeFolders = directories
    .filter((dir) => dir.isDirectory())
    .map((dir) => dir.name);
  localeFolders.push("");

  files.forEach((file) => {
    const fileName = path.basename(file);
    languages.push(fileName.replace(".json", ""));
  });

  await Promise.all(
    languages.map(async (locale) => {
      const sitemapItem = localeFolders.map((name) => {
        return {
          url: `${baseUrl}/${locale}${name ? `/${name}` : ""}`,
          lastModified: new Date().toISOString()
        };
      });

      result = result.concat(sitemapItem);
    })
  );

  return result;
}
