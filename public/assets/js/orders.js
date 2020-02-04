$(document).ready(function() {
  function addToList() {
    var listItem = document.getElementById("#newItemInput");
    console.log(listItem);
  }

  document.getElementById("#addToListBtn").onclick = addToList();
});
