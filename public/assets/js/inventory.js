$(document).ready(function() {
  getIngredients();
  var ingredList = $(".ingred-list");

  // Function for retrieving ingredients and getting them ready to be rendered to the page
  function getIngredients() {
    $.get("/api/inventory", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(data[i].item);
      }
    }).then(function(data) {
      for (var i = 0; i < data.length; i++) {
        ingredItem = $("<div></div>");
        ingredItem.text(data[i].item);
        ingredList.append(ingredItem);
      }
    });
  }
});
