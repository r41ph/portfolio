import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import { server } from "./node.js";
import "@testing-library/jest-dom/vitest";
import "./mocks.js";
import "./utils.js";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  // runs a cleanup after each test case (e.g. clearing jsdom)
  cleanup();
});

afterAll(() => {
  server.close();
});
