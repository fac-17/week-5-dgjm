# [Currency-watch](https://week-5-dgjm.herokuapp.com/) 🤯
[![Build Status](https://travis-ci.org/fac-17/week-5-dgjm.svg?branch=master)](https://travis-ci.org/fac-17/week-5-dgjm)

---

## Team
[Gigi](https://github.com/gminova) :smiley:  
[Collete](https://github.com/Coletterbox) :satisfied:  
[Victor](https://github.com/victormasson21) :sunglasses:  
[Andy](https://github.com/andy-mc-donald) :wink:  

---

## Tech stack 👀
1. Front-end(Vanilla.js, CSS, HTML)
2. Back-end(Node.js)
3. Git & GitHub
4. Testing (Nock, Tape, Supertest)
5. Continous Integration with Travis
6. Deployment with Heroku
7. [Rates API](https://api.exchangeratesapi.io/api/latest?base=GBP) 

---

## Installation & Set-up :vhs:

- `$ git clone git@github.com:fac-17/week-5-dgjm.git`
- `$ npm install`
- `$ npm start` 
### *Bonus:*
- `$ npm test` for tests
- `$ npm run lint` for lint warnings/errors

---

![](https://i.imgur.com/NOtkGau.png)
![](https://i.imgur.com/PecIvVp.png)

## User Journey 🚀
 
- Display live information on the Pound vs other currencies 💰

![](https://i.imgur.com/Of1Zl5i.jpg)

- Display a live countdown to Brexit ⏱
![Boris on zipline](https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/26/1467287656-tumblr-inline-mkvntak0yo1qz4rgp.gif)

- Allow users to watch the UK economy crash in real time.. or not #projectfear 😱

---

## Stretch goals 🤸‍♀️
- [ ] Display a random gif of Boris Johnson looking like a fool 🤡
- [ ] Dislay live departures from Heathrow Airport to more exotic peaceful lands 🌴

---

## Steps 🚶‍♂️

- [x] Set up a node server
- [x] Have a router and a handler
- [x] Serve a basic home page (html, css, vanilla JS)
- [x] Handle user input which triggers a requestour server
- [x] Test routes
- [x] Use CI
- [x] Deploy app
- [x] Display build staus on README
- [x] Write API call
- [x] Integrate API call to the back-end
- [x] Successfully get response from API call
- [x] Create stream receiving API call response
- [x] Filter API call results to display on site
- [x] Install supertest
- [x] Create fake server calls on supertest

- [x] Create dropdown menu in html
- [x] Integrate return data to html (DOM)
- [x] Style html output in css


- [x] Create countdown to deportation
- [x] Integrate countdown to front-end

- [ ] (stretch) Add input form validation to the back-end
- [ ] (stretch) Create random gif selector
- [ ] (stretch) Integrate random gif to the bck-end

---

## What we struggled with 🙈

![programmer-morale-graph](https://i.redd.it/d0dxcnw57kb01.jpg)

---

- Making the backend and frontend communicate with each other (at first)
- Improving on the api function we looked at this week 
- npm issues - one computer reverting to old version of npm caused bugs
- Our site breaking unexpectedly at the end of the day

---

## Code snippets 👾

### Dodging the https trap

```javascript
const http = require("http");
const https = require("https");

const myRequest = (url, cb) => {
  const protocol = url.includes("https") ? https : http;
  protocol
    .get(url, response => {
        // code....
    })
    .on("error", err => cb(err));
};
```
---

### Countdown function

```javascript
function updateCountdown() {
  var deadline = new Date("oct 31, 2019, 23:00:00").getTime();
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("countdown-time").innerText =
  `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

```
---

### 2015 rates comparison

```javascript
var oldExchangeRates = {
  EUR: "1.44",
  USD: "1.56",
  JPY: "192.71",
  // etc
};

function oldRates(input) {
  let input2 = input;
  document.getElementById("old-rate").innerText =
    "On 21st July 2015, 1 GBP was " +
    oldExchangeRates[input2] + " " + input2 + ".";
}
```

---

### Testing home route

```javascript
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
```

---

### Testing 404 route

```javascript
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
```

---

## What we would have liked to improve 🏹

- We weren't able to use input validation to the back-end with our site design.
- Didn't have time to finish our stretch goals.
- Provide exchange rate variation percentages since 2015.

---

## Questions from us 🧐
 
- Will we get a red, white and blue Brexit? 

#### PS: Thanks Babyfather for letting us rip off his album cover
(We didn't actually ask 🙊)

![](https://i.imgur.com/s0FjbLL.jpg)

[SLIDES](https://hackmd.io/@SjkyAeAyRjSqv_tPCU-41A/Bk4g2cZXH)
