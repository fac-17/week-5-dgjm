const test = require("tape");
const router = require("./router");
const { myRequest } = require("./api");
const nock = require("nock");
const supertest = require("supertest");

test("Testing tape", t => {
  t.pass("Tape is working yayyy");
  t.end();
});

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

test("myRequest fetches JSON", t => {
  nock("http://api.ratesapi.io/api")
    .get("/latest")
    .reply(200, {
      base: "EUR",
      rates: {
        GBP: 0.91623,
        HKD: 8.7289,
        IDR: 15639.3,
        ILS: 3.8951,
        DKK: 7.4674,
        INR: 76.6965,
        CHF: 1.1041,
        MXN: 21.2005,
        CZK: 25.658,
        SGD: 1.5261,
        THB: 34.273,
        HRK: 7.3823,
        MYR: 4.6015,
        NOK: 9.7778,
        CNY: 7.6743,
        BGN: 1.9558,
        PHP: 56.685,
        SEK: 10.6645,
        PLN: 4.2912,
        ZAR: 15.8634,
        CAD: 1.4662,
        ISK: 134.7,
        BRL: 4.218,
        RON: 4.7338,
        NZD: 1.6883,
        TRY: 6.161,
        JPY: 121.04,
        RUB: 70.8041,
        KRW: 1318.25,
        USD: 1.1151,
        HUF: 326.48,
        AUD: 1.6175
      },
      date: "2019-07-31"
    });
  myRequest("http://api.ratesapi.io/api/latest", (error, response) => {
    t.error(error);
    t.equal(
      response.statusCode,
      200,
      "the API should respond with a status code of 200"
    );
    t.deepEqual(
      response.body.base,
      "EUR",
      "the response body.base should return EUR"
    );
    t.end();
  });
});

test("404 route", t => {
  supertest(router)
    .get("/fhkwefhe")
    .expect(404)
    .end((err, res) => {
      t.error(err);
      t.equal(
        res.text,
        `<h1>404 page not found</h1>`,
        "Should return 404 page not found"
      );
      t.end();
    });
});

test("home route should return status code 200", t => {
  supertest(router)
    .get("/")
    .expect(200)
    .expect("Content-type", /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "should return 200");
      t.end();
    });
});

test("Is styling being rendered in home route", t => {
  supertest(router)
    .get("/public/style.css")
    .expect(200)
    .expect("Content-type", /css/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "should render css in home route");
      t.end();
    });
});

