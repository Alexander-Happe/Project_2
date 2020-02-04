// $(document).ready(function() {
//   var menuList = $(".menu-list");

//   getMenuItems();

//   function getMenuItems() {
//     $.get("/api/recipes", function(data) {
//       var rowsToAdd = [];
//       for (var i = 0; i < data.length; i++) {
//         rowsToAdd.push(data[i].name);
//       }
//     }).then(function(data) {
//       for (var i = 0; i < data.length; i++) {
//         newMenuItem = $("<li>");
//         newMenuItem.text(data[i].name);
//         menuList.append(newMenuItem);
//       }
//     });
//   }
// });


$(document).ready(function () {
  var menuList = $(".menu-list");

  $(document).on("click", ".delete-item", function() {
    var listItemData = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/recipes/" + listItemData
    }).then(makeList);
  });

<<<<<<< HEAD
  makeList();

  function makeList() {
    $.get("/api/recipes", function(data) {
=======
  function getMenuItems() {
    $.get("/api/recipes", function (data) {
      for (var i = 0; i < 0; i++) {
        var menuItem = `<tr class="toollow><td> ${data[i].name} </td>
          <td><a class='make-item'>Make Item</a></td>
          <td><a class='delete-item'>Delete Item</a></td>`;
        menuList.append(menuItem);
      }
    }).then(function (data) {
>>>>>>> 590e93184a5af8236b42e710c209ec6fa432b7a9
      for (var i = 0; i < data.length; i++) {
        var menuItem = `<tr data-name='${data[i]}'><td> ${data[i].name} </td>
      <td><a class='make-item' data-id='${data[i].name}'>Make Item</a></td>
      <td><a class='delete-item' data-id='${data[i].id}'>Delete Item</a></td></tr>`;
        menuList.append(menuItem);
      }
      menuItem = ``;
    });
  }
});
