//const request = require("supertest")
//const app = require("./app.js")
import { Request } from "supertest";
import app from "./app.js";

describe("Test the root path", () => {
    test("It should respond to the GET method", done => {
        request(app)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });
});

describe("Second test", () => {
    test("It should respond to the GET method", done => {
        request(app)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(404);
                done();
            });
    });
});

describe("Test the /api/contacts path", () => {
    test("It should return code status 200", done => {
        request(app)
            .get("/api/contacts")
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });
});

describe("Should return nom key in response", () => {
    test("It should return code status 200", done => {
        request(app)
            .get("/api/contacts")
            .then(response => {
                expect(response.body[0].nom).toBe("Xavier");
                done();
            });
    });
});
