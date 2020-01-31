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
        var ingredItem = `<tr><td> ${data[i].item} </td> 
        <td> ${data[i].qty} </td>
        <td> ${data[i].unit} </td>
        <td> ${data[i].isCritical} </td></tr>`;
        ingredList.append(ingredItem);
      }
    });
  }
});
