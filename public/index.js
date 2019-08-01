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
      console.log(xhr.responseText);
      let response = JSON.parse(xhr.responseText);
      console.log(response);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}
