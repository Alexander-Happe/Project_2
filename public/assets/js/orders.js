$(document).ready(function() {
  const rmBtn = document.getElementById("removeOrderRowBtn");

  $(document).on("click", "#addToListBtn", addToList);

  function addToList() {
    event.preventDefault();
    var listItem = $("#newItemInput")
      .val()
      .trim();
    var addqty = $("#qtySelected")
      .children("option:selected")
      .val();
    var addUnit = $("#unitSelected")
      .children("option:selected")
      .val();

    var row = $("<tr>").attr("class", "columns");

    $("<td>")
      .attr("class", "column item")
      .text(listItem)
      .appendTo(row);

    $("<td>")
      .attr("class", "column")
      .text(addUnit)
      .appendTo(row);

    $("<td>")
      .attr("class", "column")
      .text(addqty)
      .appendTo(row);

    $("<button>")
      .attr("class", "column button close")
      .text("X")
      .appendTo(row);

    row.append(rmBtn);
    row.appendTo($("#orderItemsDisplay"));
  }

  // displays the localstorage to the orders page
  function showStorage() {
    var length = localStorage.length;
    for (var i = 0; i < length; i++) {
      item = localStorage.key(i);
      // rows = [];

      unit = localStorage.getItem(localStorage.key(i));

      var row = $("<tr>").attr("class", "columns");

      $("<td>")
        .attr("class", "column item")
        .text(item)
        .appendTo(row);

      $("<td>")
        .attr("class", "column")
        .text(unit)
        .appendTo(row);

      $("<button>")
        .attr("class", "column button close")
        .text("X")
        .appendTo(row);

      row.append(rmBtn);
      $("#addItem").val("");
      row.appendTo($("#orderItemsDisplay"));
    }

    // var values = [],
    //   keys = Object.keys(localStorage),
    //   i = keys.length;
    // while (i--) {
    //   values.push(localStorage.getItem(keys[i]));
    // }
    // for (j = 0; j < values.length; j++) {
    //   var newTr = $("<div>").attr("class", "");
    //   var newListItem = $("<li>")
    //     .attr(
    //       "class",
    //       "listItems column is-four-fifths-desktop is-two-thirds-tablet is-two-thirds-mobile"
    //     )
    //     .text(values[j]);
    //   var addSpan = $("<button>")
    //     .attr(
    //       "class",
    //       "column is-2-desktop is-2-tablet is-2-mobile listButton close"
    //     )
    //     .text("X");
    //   newTr.append(newListItem, addSpan);
    //   $("#orderItemsDisplay").append(newTr);
    // }
  }

  // call the funciton that renders the order items list
  showStorage();

  // Click on a close button to hide the current list item
  $(document).on("click", ".close", close);

  function close() {
    var self = $(this);
    self.parent().css("display", "none");
    // localStorage.removeItem();
    localStorage.removeItem(
      self.parent().find("td.first").prevObject[0].children[0].innerText
    );
    // onclick function for the create order button

    $(document).on("click", "#createOrderBtn", empty);

    // delete the table and empty local storage.
    function empty() {
      var table = $("#orderItemsDisplay");
      console.log(table);
      // table.parent().css("display", "none");
      // localStorage.clear();
    }

    // console.log(self.parent().find("td.first"));
  }
});
