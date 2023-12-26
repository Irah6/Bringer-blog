import { MetadataRoute } from "next"
import { client } from "./lib/client";
import { Post } from "./lib/interface";
export default async function sitemap():Promise<MetadataRoute.Sitemap>{
    const query = `*[_type == "post"] | order(_createdAt desc)`;
    const data:Post[] = await client.fetch(query);
    const postEntries:MetadataRoute.Sitemap=data.map((slug)=>({
    url:`${process.env.NEXT_PUBLIC_BASE_URL}/post/${slug.slug.current}`,
    lastModified:new Date(slug._createdAt),
    changeFrequency:"never",
    priority:0.7
}))
    return[
        {
            url:`${process.env.NEXT_PUBLIC_BASE_URL}`,
            lastModified:new Date(),
            changeFrequency:"always",
            priority:1.0,
        },
        ...postEntries,
    ]
}