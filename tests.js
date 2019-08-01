const test = require("tape");
const router = require("./src/router");
const myRequest = require("./src/api");
const nock = require("nock");
const supertest = require("supertest");

test("Testing tape", t => {
  t.pass("Tape is working yayyy");
  t.end();
});

// test("Test fetches JSON data.", t => {
//   const actual = myRequest("http://jsonplaceholder.typicode.com/users/1", (null, res) => {
//
//   })
// });

test("myRequest fetches data correctly", t => {
  nock("http://jsonplaceholder.typicode.com")
    .get("/users/1")
    .reply(200, {
      name: "Leanne Graham"
    });
  myRequest(
    "http://jsonplaceholder.typicode.com/users/1",
    (error, response) => {
      t.error(error);
      t.equal(
        response.statusCode,
        200,
        "the API should respond with a status code of 200"
      );
      t.deepEqual(
        response.body.name,
        "Leanne Graham",
        "the response body should contain the correct json"
      );
      t.end();
    }
  );
});

test("404 route",(t)=>{
  supertest(router)
   .get('/fhkwefhe')
   .expect(404)
   .end( (err,res)=>{
       t.error(err);
       t.equal(res.text,`<h1>404 page not found</h1>`,'Should return 404 page not found');
       t.end();
   })
});
