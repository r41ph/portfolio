import { rest } from "msw";

export const handlers = [
  rest.get("https://api.unsplash.com/photos/random", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          urls: { small: "testSrc" },
          user: {
            name: "testAuthorName",
            links: { self: "testAuthorUrl" },
          },
        },
      ]),
    );
  }),
  rest.get("api/projects", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        projects: [
          {
            name: "Mock project",
            stack: ["HTML", "CSS", "JAVASCRIPT"],
            company: "Syrox",
            image: "/images/projects/green-sheep-thumbnail.jpg",
            description: "Mock description",
          },
        ],
      }),
    );
  }),
  rest.get("*", (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(
      ctx.status(500),
      ctx.json({ error: "You must add request handler." }),
    );
  }),
];
// {
//     projects: [
//       {
//         name: "Mock project",
//         stack: [Icons.HTML, Icons.CSS, Icons.JAVASCRIPT],
//         company: "Syrox",
//         image: "/images/projects/green-sheep-thumbnail.jpg",
//       },
//     ],
//   }
