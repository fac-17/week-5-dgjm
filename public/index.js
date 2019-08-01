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
      console.log(response);
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
