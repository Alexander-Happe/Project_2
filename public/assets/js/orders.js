$(document).ready(function() {
  function addToList() {
    var listItem = document.getElementById("#newItemInput");
    console.log(listItem);
  }

  var critList = localStorage.length;
  console.log(critList);
});
