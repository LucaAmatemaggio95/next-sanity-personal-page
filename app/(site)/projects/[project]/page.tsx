import { getProject } from "@/sanity/utils";
import { PortableText } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;

  const project = await getProject(slug);

  return (
    <div>
      <div className="mb-5 flex items-center justify-start">
        <Link
          href={"/"}
          className="flex flex-row items-center bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg font-semibold text-gray-600 transition"
        >
          <ArrowLeft className="w-5 h-5" /> <span className="ml-1">Back</span>
        </Link>
      </div>

      <header className="flex justify-between items-center">
        <h1 className="font-extrabold text-5xl drop-shadow bg-gradient-to-r from-green-500 via-teal-600 to-blue-950 bg-clip-text text-transparent">
          {project.name}
        </h1>

        <a
          href={project.url}
          title="View project"
          target="_blank"
          rel="noopener norefer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-teal-700 hover:text-slate-100 transition"
        >
          View Project
        </a>
      </header>

      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content} />
      </div>

      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      />
    </div>
  );
}
