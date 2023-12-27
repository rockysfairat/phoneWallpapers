import { createClient } from "contentful";

export async function getData() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "section" });
  return {
    props: {
      Section: res.items,
    },
    revalidate: 1,
  };
}

let data = getData();

export default data;
