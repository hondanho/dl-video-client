export interface UrlApi {
    name: string;
    path: string;
    domain: string[];
}

export const entityDomains: UrlApi[] = [ 
    {
        name: "facebook",
        path: "api/fb/dl",
        domain: ["facebook.com"]
    },
     {
        name: "instagram",
        path: "api/ins/dl",
        domain: ["instagram.com"]
    },
    {
        name: "tiktok",
        path: "api/tik/dl",
        domain: ["tiktok.com"]
    },
    {
        name: "twitch",
        path: "api/twitch/dl",
        domain: ["twitch.tv"]
    },
    {
        name: "twitter",
        path: "api/tw/dl",
        domain: ["twitter.com"]
    },
    {
        name: "youtube",
        path: "api/yt/dl",
        domain: ["youtube.com", "youtubekids.com"]
    }
];

export const defaultGeneralApi = "api/yt/dl";