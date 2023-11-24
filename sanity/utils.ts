import { Page } from "@/types/page";
import { Project } from "@/types/project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getProjects(): Promise<Project[]> {
  const client = createClient(clientConfig);

  // we use GROQ query
  // search all the documents with type == projects and return the requested fields
  return client.fetch(
    groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            content
        }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  const client = createClient(clientConfig);

  // we use GROQ query
  // search all the documents with type == projects and slug == current slug param and retrieve only the first ([0])
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            githubUrl,
            stack,
            isSomethingDisabled,
            content
        }`,
    { slug } // assigne the variable inside the query
  );
}

export async function getPages(): Promise<Page[]> {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
        }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content
        }`,
    { slug }
  );
}
