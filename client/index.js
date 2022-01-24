document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:5000/getAll")
    .then((responce) => responce.json())
    .then((data) => console.log(data));
  loadHTMLTable([]);
});

function loadHTMLTable(data) {
  const table = document.querySelector("table tbody");
  //   const tableHtml = "";
  if (data.length === 0) {
    table.innerHTML =
      "<tr><td class='no-data' colspan = '5' >No Data</td></tr>";
  }
}
