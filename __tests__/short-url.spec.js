const request = require("supertest");
const app = require("../app");

describe("Test the root path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/users")
      .then(response => {
        expect(response.statusCode).toBe(200);
        console.log(response.body)
        done();
      });

      
  });
});