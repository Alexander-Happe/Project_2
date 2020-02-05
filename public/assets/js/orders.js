$(document).ready(function() {
  var criticalItemField = $("#criticalItemField");
  ListCritical();
  // Function to list all ingredients critically low
  function ListCritical() {
    $.get("/api/inventory", function(data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].isCritical === true) {
          var criticalItem = `<tr class="toolow"><td> ${data[i].item} </td> 
          <td> ${data[i].qty} </td>
          <td> ${data[i].unit} </td>`;
          criticalItemField.append(criticalItem);
        }
      }
    });
  }

  function addToList() {
    var listItem = document.getElementById("#newItemInput");
    console.log(listItem);
  }

  document.getElementById("#addToListBtn").onclick = addToList();
});
