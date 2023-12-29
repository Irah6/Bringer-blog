import { ImageResponse } from "next/og";
import { Post } from "@/app/lib/interface";
import  getData from "@/app/lib/getdata";
import { urlFor } from "@/app/lib/sanityImageUrl";
import Image from "next/image";
export const size = {
  width: 1200,
  height: 630,
};
export const alt = "Bringer Blog";
export const contentType = "image/png";
export default async function og({ params }: { params: { slug: string } }) {
    const post = await getData(params.slug) as Post;
    const imageUrl = post?.meta as string; // Ensure post?.meta is a string
    return new ImageResponse(
      (
        <div tw="relative flex w-full h-full flex items-center justify-center">
          {/* Background */}
          <div tw="absolute flex inset-0">
            <img 
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
              tw="flex flex-1"
              src={urlFor(post?.meta).url()} 
              alt={post?.title!!}
            />
          </div>
        </div>
      ),
      size
    );
    
}