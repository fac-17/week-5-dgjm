let search = document.getElementById("search");

search.onclick = function() {
  let input = document.getElementById("input").value;
  console.log(input);
  getQuery(input);
};

function getQuery(input) {

  let xhr = new XMLHttpRequest();
  let url = `query?=${input}`;
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = JSON.parse(xhr.responseText);
      let text = document.getElementById("result-display");
      text.innerText = `1 GBP today equals ${Math.round(response[input] * 100) / 100} ${input}`;

      console.log(response[input]);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}


function updateCountdown () {
  var deadline = new Date("oct 31, 2019, 23:00:00").getTime()
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  var minutes = Math.floor((t%(1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t% (1000 * 60)) / 1000);
  document.getElementById("countdown-time").innerText = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

setInterval(updateCountdown, 1000);
