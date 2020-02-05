$(document).ready(function() {
  const rmBtn = document.getElementById("removeOrderRowBtn");

  function addToList() {
    var listItem = document.getElementById("#newItemInput");
    console.log(listItem);
  }
  function DeleteRow() {
    rmBtn.click();
  }

  function showStorage() {
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;
    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }
    for (j = 0; j < values.length; j++) {
      var newTr = $("<div>").attr("class", "columns is-mobile shopitem");
      var newListItem = $("<li>")
        .attr(
          "class",
          "listItems column is-four-fifths-desktop is-two-thirds-tablet is-two-thirds-mobile"
        )
        .text(values[j]);
      var addSpan = $("<button>")
        .attr(
          "class",
          "column is-2-desktop is-2-tablet is-2-mobile listButton close"
        )
        .text("X");
      newTr.append(newListItem, addSpan);
      $("#orderItemsDisplay").append(newTr);
    }
  }
  showStorage();

  var critList = localStorage.length;
  console.log(critList);
});
