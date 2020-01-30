$(document).ready(function () {
  var list = $("#ingred-list");

  getIngredients();

  // Function for retrieving ingredients and getting them ready to be rendered to the page
  function getIngredients() {
    $.get("/api/ingredients", function (data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(data[i]);
      }
      renderIngredients(rowsToAdd);
      nameInput.val("");
    });
  }

  //Function for rendering the list of ingredients to the page
  function renderIngredients(rows) {
    if (rows.length) {
      console.log(rows);
      list.prepend(rows);
    } else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no ingredients in the database
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("There are no ingredients to list here!");
    list.append(alertDiv);
  }
});
