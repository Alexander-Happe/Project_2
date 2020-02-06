$(document).ready(function() {
  var menuList = $(".menu-list");
  var inventoryIds;
  var quantities;
  var quantitiesOrg;
  var quantitiesNew;
  //Makes on click function for the make item button
  $(document).on("click", ".make-item", function() {
    var id = $(this).data("id");
    inventoryIds = [];
    quantities = [];
    console.log(id);
    //Gets the specified recipe for each button and adds in the quantity used to the array quantities
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

      return inventoryIds, quantities, quantitiesOrg;
    }).then(function(data) {
      quantitiesOrg = [];
      quantitiesNew = [];
      //gets the entire inventory table out of the database
      $.get("/api/inventory", function(newData) {
        //loops through all of the objects in the table to find the ones that match the recipe table
        for (let i = 0; i < inventoryIds.length; i++) {
          quantitiesOrg.push(newData[inventoryIds[i] - 1].qty);
          //subtracts the origonal quantity from the ingredients table from the used amout in the recipe table
          quantitiesNew.push(quantitiesOrg[i] - quantities[i]);
        }
      }).then(function(data) {
        //makes an update to the inventory table using the new quantities
        var url = "/api/inventory/" + inventoryIds[0];
        console.log(url);
        $.ajax({
          method: "PUT",
          url: url,
          data: quantitiesNew[0]
        });
      });
    });
  });
  //renders the list onto the html
  makeList();

  function makeList() {
    //gets all of the recipe table
    $.get("/api/recipes", function(data) {
      for (var i = 0; i < data.length; i++) {
        //uses the recipe table to make new html
        var menuItem = `<tr data-name='${data[i]}'><td> ${data[i].name} </td>
      <td><a class='make-item' data-id='${data[i].id}'>Make Item</a></td>`;
        menuList.append(menuItem);
      }
      menuItem = ``;
    });
  }
});
