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
            links: { html: "testAuthorUrl" },
          },
        },
      ]),
    );
  }),
  rest.get("data/works", (_req, res, ctx) => {
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
  rest.get("data/labs", (_req, res, ctx) => {
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
  rest.post("/data/add/stack/option", (_req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.post("/data/delete/stack/option", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
      ]),
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
