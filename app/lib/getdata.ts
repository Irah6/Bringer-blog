import { client } from "@/app/lib/client";
 async function getData(slug: string) {
    const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
    const data = await client.fetch(query);
    return data;
  }
export default getData