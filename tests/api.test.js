import request from "supertest";
import app from "../app.js";

describe("Test the root path", () => {
    test("should respond to the GET method", () => {
        request(app)
            .get("/")
            .then((response) => {
                expect(response.statusCode).toBe(200);
            });
    });
    test(" should respond with 404 to GET /coucou", () => {
        request(app)
            .get("/coucou")
            .then((response) => {
                expect(response.statusCode).toBe(404);
            });
    });
});
describe("Test the /api/contacts path", () => {
    test("should return code status 200", () => {
        request(app)
            .get("/api/contacts")
            .then((response) => {
                expect(response.statusCode).toBe(200);
            });
    });
    test("should return nom key in response", () => {
        request(app)
            .get("/api/contacts")
            .then((response) => {
                expect(response.body[0].nom).toBe("Xavier");
            });
    });
});