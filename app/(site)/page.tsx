import { getProjects } from "@/sanity/utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r from-green-500 via-teal-600 to-blue-950 bg-clip-text text-transparent">
          Luca
        </span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">
        I like MTB 🚵‍♀️, wine 🍷 and building fun projects with the latest tech 👨‍💻
      </p>
      <p className="mt-3 text-xl text-gray-600">Enjoy you visit 😄</p>

      <h2 className="mt-24 font-bold text-gray-800 text-3xl">💻 My Projects</h2>
      <p className="text-lg mt-2 text-gray-600">
        Here you can find all my coding projects
      </p>

      <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            className="border-4 border-slate-200 rounded-lg hover:scale-105 hover:border-teal-600 transition"
            key={project._id}
            href={`/projects/${project.slug}`}
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={400}
                className="rounded-lg rounded-b-none object-fill"
              />
            )}
            <div className="flex items-center justify-center">
              <p className="md:mt-5 p-3 font-bold text-xl bg-gradient-to-r from-green-500 via-teal-600 to-blue-950 bg-clip-text text-transparent">
                {project.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
