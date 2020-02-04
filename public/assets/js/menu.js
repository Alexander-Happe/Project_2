$(document).ready(function() {
  var menuList = $(".menu-list");
  var inventoryIds;
  var quantities;
  var quantitiesNew;

  $(document).on("click", ".delete-item", function() {
    var listItemData = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/recipes/" + listItemData
    }).then(makeList);
  });

  $(document).on("click", ".make-item", function() {
    var id = $(this).data("id");
    inventoryIds = [];
    quantities = [];
    console.log(id);
    $.get("/api/recipes/" + id, function(data) {
      if (data[0].ingredient1 != null) {
        inventoryIds.push(data[0].ingredient1);
        quantities.push(data[0].qty1);
      }
      if (data[0].ingredient2 != null) {
        inventoryIds.push(data[0].ingredient2);
        quantities.push(data[0].qty2);
      }
      if (data[0].ingredient3 != null) {
        inventoryIds.push(data[0].ingredient3);
        quantities.push(data[0].qty3);
      }
      if (data[0].ingredient4 != null) {
        inventoryIds.push(data[0].ingredient4);
        quantities.push(data[0].qty4);
      }
      if (data[0].ingredient5 != null) {
        inventoryIds.push(data[0].ingredient5);
        quantities.push(data[0].qty5);
      }
      if (data[0].ingredient6 != null) {
        inventoryIds.push(data[0].ingredient6);
        quantities.push(data[0].qty6);
      }
      if (data[0].ingredient7 != null) {
        inventoryIds.push(data[0].ingredient7);
        quantities.push(data[0].qty7);
      }
      if (data[0].ingredient8 != null) {
        inventoryIds.push(data[0].ingredient8);
        quantities.push(data[0].qty8);
      }
      if (data[0].ingredient9 != null) {
        inventoryIds.push(data[0].ingredient9);
        quantities.push(data[0].qty9);
      }
      if (data[0].ingredient10 != null) {
        inventoryIds.push(data[0].ingredient10);
        quantities.push(data[0].qty10);
      }
      return inventoryIds, quantities;
    })
      .then(function(data) {
        console.log(inventoryIds);
        let quantitiesOrg = [];
        for (let i = 0; i < inventoryIds.length; i++) {
          $.get("/api/inventory/" + inventoryIds[i], function(newData) {
            var dataToAdd = newData[0].qty;
            quantitiesOrg.push(dataToAdd);
          });
        }

        console.log(quantitiesOrg);
      })
      .then(function(data) {
        //console.log(quantitiesOrg);
        //console.log(quantitiesOrg.length);
      });
  });

  makeList();

  function makeList() {
    $.get("/api/recipes", function(data) {
      for (var i = 0; i < data.length; i++) {
        var menuItem = `<tr data-name='${data[i]}'><td> ${data[i].name} </td>
      <td><a class='make-item' data-id='${data[i].id}'>Make Item</a></td>
      <td><a class='delete-item' data-id='${data[i].id}'>Delete Item</a></td></tr>`;
        menuList.append(menuItem);
      }
      menuItem = ``;
    });
  }
});
