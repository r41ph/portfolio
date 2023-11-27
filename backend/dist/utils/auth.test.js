import { expect, test, describe } from "vitest";
import { createJSONToken, validateJSONToken } from "./auth";
describe("createJSONToken", () => {
    test("should return a token", () => {
        const dbUser = {
            username: "testuser"
        };
        const token = createJSONToken(dbUser.username);
        expect(token).toBeDefined();
        expect(token).not.toBeNull();
    });
});
describe("validateJSONToken", () => {
    test("should return true for a valid token", () => {
        const username = "testuser";
        const token = createJSONToken(username);
        try {
            const result = validateJSONToken(token);
            expect(result.username).toBe("testuser");
        }
        catch (err) {
            // If the function throws an error, fail the test
            expect(true).toBe(false);
        }
    });
    test("should return false for an invalid token", () => {
        const token = "INVALID_zI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InI0MXBoIiwiaWF0IjoxNzAwNTY2MjU3LCJleHAiOjE3MDA1NjYyNzJ9.D4L0ygw8_eq6X6jUh6Yco4rDXxN6iGagFpDsYbR7CeA";
        try {
            validateJSONToken(token);
            // If the function doesn't throw an error, fail the test
            expect(true).toBe(false);
        }
        catch (err) {
            // If the function throws an error, check that it's the right error
            expect(err.message).toContain("invalid token");
        }
    });
    test("should return false for an empty token", () => {
        const token = "";
        const result = validateJSONToken(token);
        expect(result).toBe(false);
    });
    test("should return false for a null token", () => {
        const token = null;
        const result = validateJSONToken(token);
        expect(result).toBe(false);
    });
});
