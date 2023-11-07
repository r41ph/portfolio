import { rest } from "msw";

export const handlers = [
  rest.get("https://api.unsplash.com/photos/random", (_req, res, ctx) => {
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
  rest.get("api/works", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        works: [
          {
            name: "Mock project",
            stack: ["HTML", "CSS", "JAVASCRIPT"],
            company: "Syrox",
            image: "/images/works/green-sheep-thumbnail.jpg",
            description: "Mock description",
          },
        ],
      }),
    );
  }),
  rest.get("api/labs", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        labs: [
          {
            name: "Mock Lab",
            stack: ["HTML", "CSS", "JAVASCRIPT"],
            company: "Syrox",
            image: "/images/works/green-sheep-thumbnail.jpg",
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
