import request from "supertest";
import app from "../app.js";

import * as service from "../service.js";

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
    test("should return nom key in response", async () => {
        const getContacts = jest.fn();
        service.getContacts = jest.fn(() => {
            getContacts;
        });
        service.getContacts.mockReturnValue([{ nom: "test" }]);
        const response = await request(app).get("/api/contacts");
        expect(response.body[0].nom).toBe("test");
    });
});