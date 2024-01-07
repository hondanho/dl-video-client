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

  files.forEach((file) => {
    const fileName = path.basename(file);
    languages.push(fileName.replace(".json", ""));
  });

  await Promise.all(
    languages.map(async (locale) => {
      const jsonData = fs.readFileSync(
        `${rootPath}/messages/${locale}.json`,
        "utf-8"
      );
      const parsedData: any = JSON.parse(jsonData);

      const keys = Object.keys(parsedData.Page);

      const sitemapItem = keys.map((key) => {
        const slug =
          !parsedData.Page[key]["slug-high-level"] && parsedData.Page[key].title
            ? `/${slugify(parsedData.Page[key].title)}`
            : "";
        return {
          url: `${baseUrl}/${locale}/${key}${slug}`,
          lastModified: new Date().toISOString(),
          changeFrequency: "monthly",
          priority: 1,
        };
      });

      result = result.concat(sitemapItem);
    })
  );

  return result;
}
