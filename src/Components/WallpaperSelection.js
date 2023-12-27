"use client";

import data from "@/app/utils/fetchData";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function SiteSections() {
  let [content, setContent] = useState();
  useEffect(() => {
    data.then((values) => setContent(values));
  }, []);
  console.log(content);
  return (
    <article className="w-4/5 lg:w-full relative flex border-dotted border-2 border-purple-950">
      {content &&
        content.props.Section.map((val) => (
          <div key={val.sys.id}>
            <p>{val.fields.author}</p>
            {val.fields.picture && (
              <Image
                src={"http:" + `${val.fields.picture.fields.file.url}`}
                alt={val.fields.picAlt}
                width="500"
                height="500"
              />
            )}
          </div>
        ))}
    </article>
  );
}
