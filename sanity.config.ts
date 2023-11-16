import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

// config for sanity studio
const config = defineConfig({
  projectId: "gl4k094t",
  dataset: "production",
  title: "My personal website",
  apiVersion: "v2022-03-07", // use the current date
  basePath: "/admin", // path for the sanity view
  plugins: [deskTool()], // use to view the studio
  schema: { types: schemas },
});

export default config;
