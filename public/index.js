let search = document.getElementById("search");

search.onclick = function() {
  let input = document.getElementById("input").value;
  console.log(input);
  getQuery(input);
};

function getQuery(input) {
  //delete old data

  let text = document.getElementById("result-display");
  text.innerText = `1 GBP today equals...`;

  let xhr = new XMLHttpRequest();
  let url = `query?=${input}`;
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = JSON.parse(xhr.responseText);
      let text = document.getElementById("result-display");
      text.innerText = `1 GBP today equals ${response[input]} ${input}`;

      console.log(response[input]);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

var countdown = "test";

window.onload = function() {
  console.log("this is working");
  document.getElementById("deportation").innerText = countdown;
};

// document.onload = alert("test");

var oldExchangeRates = {
  EUR: "1.4372",
  USD: "1.5558",
  JPY: "192.7117",
  AUD: "2.0949",
  CAD: "2.0139",
  CHF: "1.4911",
  SEK: "13.2891",
  NZD: "2.3473"
};

search.onclick = function() {
  let input = document.getElementById("input").value;
  console.log(input);
  // document.getElementById("old-rate") = oldExchangeRates[input];
  document.getElementById("old-rate").innerText =
    "On 21st July 2015, 1 GBP was " +
    oldExchangeRates[input] +
    " " +
    input +
    ".";
};
