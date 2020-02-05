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

    var row = $("<tr>").attr("class", "columns orderItem");

    $("<td>")
      .attr("class", "column item")
      .text(listItem)
      .appendTo(row);

    $("<td>")
      .attr("class", "column")
      .text(addqty)
      .appendTo(row);

    $("<td>")
      .attr("class", "column")
      .text(addUnit)
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

      var row = $("<tr>").attr("class", "columns orderItem");

      $("<td>")
        .attr("class", "column item")
        .text(item)
        .appendTo(row);

      $("<td>")
        .attr("class", "column")
        .text(20)
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
  }

  $("#createOrderBtn").click(function() {
    localStorage.clear();
    $(".orderItem").remove();
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  });

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
  }
});
