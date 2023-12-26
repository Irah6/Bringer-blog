import { MetadataRoute } from "next";
import { userAgent } from "next/server";
export default function robots():MetadataRoute.Robots{
    return{
        rules:[
            {
            userAgent:"*",
            allow:"/",
            disallow:["/studio"],
            }
        ],
    sitemap:`${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
    }
}