export default {
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    {
      name: "mainTitle",
      title: "Main Title",
      type: "string",
    },
    {
      name: "mainDescription",
      title: "Main Description",
      type: "text",
    },
    {
      name: "resume",
      title: "Resume",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "array",
              of: [{ type: "block" }],
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "startDate",
              title: "Start Date",
              type: "date",
            },
            {
              name: "endDate",
              title: "End Date",
              type: "date",
            },
            {
              name: "isCurrent",
              title: "Is Current",
              type: "boolean",
            },
          ],
        },
      ],
    },
    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "language",
              title: "Language",
              type: "string",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "proficiency",
              title: "Proficiency",
              type: "number",
            },
          ],
        },
      ],
    },
    {
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
            {
              name: "link",
              title: "Link",
              type: "url",
            },
          ],
        },
      ],
    },
  ],
};
