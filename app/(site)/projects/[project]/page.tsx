import TechAvatar from "@/components/TechAvatar";
import { getProject } from "@/sanity/utils";
import { PortableText } from "@portabletext/react";
import { ArrowLeft, Github, Info } from "lucide-react";
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
        <h1 className="font-extrabold text-5xl leading-loose drop-shadow bg-gradient-to-r from-green-500 via-teal-600 to-blue-950 bg-clip-text text-transparent">
          {project.name}
        </h1>

        <span className="flex gap-3">
          {project.url && (
            <a
              href={project.githubUrl}
              title="View project on Github"
              target="_blank"
              rel="noopener norefer"
              className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-teal-700 hover:text-slate-100 transition"
            >
              <Github />
            </a>
          )}
          <a
            href={project.url}
            title="View project"
            target="_blank"
            rel="noopener norefer"
            className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-teal-700 hover:text-slate-100 transition"
          >
            View Project
          </a>
        </span>
      </header>

      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content} />
      </div>

      {project.isSomethingDisabled && (
        <div
          className="flex p-4 my-4 text-md text-yellow-800 rounded-lg bg-yellow-50"
          role="alert"
        >
          <Info className="mr-2" />
          Some functionalities are disabled 💸
        </div>
      )}

      <div className="relative flex py-10 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4">💻</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <h2 className="font-semibold text-2xl text-gray-800 my-3">
            Tech stack I used 🤓
          </h2>

          {project.stack && (
            <ul className="max-w-md divide-y divide-gray-200">
              {project.stack.map((elem) => (
                <li key={elem} className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <TechAvatar tech={elem} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-lg font-medium text-gray-900 truncate">
                        {elem}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h2 className="font-semibold text-2xl text-gray-800 mt-3">
            This is how it looks like 📸
          </h2>
          <Image
            src={project.image}
            alt={project.name}
            width={1920}
            height={1080}
            className="mt-6 border-2 border-gray-700 object-cover rounded-xl drop-shadow"
          />
        </div>
      </section>
    </div>
  );
}
