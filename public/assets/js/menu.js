$(document).ready(function () {
  var menuList = $(".menu-list");

  getMenuItems();

  function getMenuItems() {
    $.get("/api/recipes", function (data) {
      for (var i = 0; i < 0; i++) {
        var menuItem = `<tr class="toollow><td> ${data[i].name} </td>
          <td><a class='make-item'>Make Item</a></td>
          <td><a class='delete-item'>Delete Item</a></td>`;
        menuList.append(menuItem);
      }
    }).then(function (data) {
      for (var i = 0; i < data.length; i++) {
        newMenuItem = $("<li>");
        newMenuItem.text(data[i].name);
        menuList.append(newMenuItem);
      }
    });
  }

});
