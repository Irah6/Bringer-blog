import { Post } from "@/app/lib/interface";
import { client } from "@/app/lib/client";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import { MetadataRoute } from "next"
import Image from "next/image";

async function getData(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);
  return data;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}){
  const data = (await getData(params.slug)) as Post;
  if (!data) {
    return {
        title: 'Post Not Found',
        description:"Check some other posts"
    }
}
  return{
    title:data.title,
    description:data.overview,
    alternates: {
      canonical:`/post/${data.slug.current}`,
    }
  }
}
export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as Post;

  const PortableTextComponent = {
    types: {
      image: ({ value }:any ) => (
        <Image
          src={urlFor(value).url()}
          alt={value.alt || ' '}
          loading="lazy"
          className="object-cover"
          width={800}
          height={800}
        />
      ),
    },
    marks: {
      // Ex. 1: custom renderer for the em / italics decorator
      em: ({children}:any) => <em className="text-gray-600 font-semibold">{children}</em>,
  
      // Ex. 2: rendering a custom `link` annotation
      link: ({children, value}:any) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
        return (
          <a href={value.href} rel={rel}>
            {children}
          </a>
        )
      },
    },
    block: {

      blockquote: ({children}:any) => <blockquote className="border-l-purple-500">{children}</blockquote>,
  
      // Ex. 2: rendering custom styles
      customHeading: ({children}:any) => (
        <h2 className="text-lg text-primary text-purple-700">{children}</h2>
      ),
    },
    list: {
      // Ex. 1: customizing common list types
      bullet: ({children}:any) => <ul className="mt-xl">{children}</ul>,
      number: ({children}:any) => <ol className="mt-lg">{children}</ol>,
  
      // Ex. 2: rendering custom lists
      checkmarks: ({children}:any) => <ol className="m-auto text-lg">{children}</ol>,
    },
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
      <header className="pt-6 xl:pb-6">
        <div className="space-y-1 text-center">
          <div className="space-y-10">
            <div>
              <p className="text-base font-medium leading-6 text-[#027FFA]">
                {data?._createdAt}
              </p>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900  sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              {data?.title}
            </h1>
          </div>
        </div>
      </header>

      <div className="divide-y divide-gray-200 pb-7  xl:divide-y-0">
        <div className="divide-y divide-gray-200  xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose max-w-none pb-8 pt-10  prose-lg">
            <PortableText
              value={data?.content}
              components={PortableTextComponent} onMissingComponent={false}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}