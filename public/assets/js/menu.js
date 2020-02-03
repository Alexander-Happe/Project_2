$(document).ready(function() {
  var menuList = $(".menu-list");

  $(document).on("click", ".delete-item", function() {
    var listItemData = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/recipes/" + listItemData
    }).then(makeList);
  });

  makeList();

  function makeList() {
    $.get("/api/recipes", function(data) {
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
