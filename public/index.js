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
