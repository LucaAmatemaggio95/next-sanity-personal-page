import { getPage } from "@/sanity/utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div>
      <h1 className="font-extrabold text-5xl drop-shadow bg-gradient-to-r from-green-500 via-teal-600 to-blue-950 bg-clip-text text-transparent">
        {page.title}
      </h1>

      <div className="text-lg text-gray-700 mt-10 min-h-[100% - 92px]">
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
