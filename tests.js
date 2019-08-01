const test = require("tape");
const myRequest = require("./src/api");
const nock = require("nock");

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
    myRequest("http://api.ratesapi.io/api/latest", 
    (error, response) => {
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
    }
    );
});
