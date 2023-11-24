const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug", // type coming from sanity
      options: {
        source: "name",
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "githubUrl",
      title: "",
      type: "url",
    },
    {
      name: "stack",
      title: "Tech stack",
      type: "array",
      of: [{ type: "string"}]
    },
    {
      name: "isSomethingDisabled",
      title: "",
      type: "boolean"
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }], // we use type:block so that we are able to use headings and paragraphs
    },
  ],
};

export default project;
