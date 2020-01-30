$(document).ready(function() {
  var menuList = $(".menu-list");

  getMenuItems();

  function getMenuItems() {
    $.get("/api/recipes", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(data[i].name);
      }
    }).then(function(data) {
      for (var i = 0; i < data.length; i++) {
        newMenuItem = $("<li>");
        newMenuItem.text(data[i].name);
        menuList.append(newMenuItem);
      }
    });
  }
});
