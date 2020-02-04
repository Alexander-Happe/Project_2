$(document).ready(function() {
  const rmBtn = document.getElementById("removeOrderRowBtn");

  function addToList() {
    var listItem = document.getElementById("#newItemInput");
    console.log(listItem);
  }
  function DeleteRow() {
    rmBtn.click();
  }

  var critList = localStorage.length;
  console.log(critList);
});
