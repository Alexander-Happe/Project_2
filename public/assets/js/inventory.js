$(document).ready(function() {
  var ingredList = $(".ingred-list");
  ListCritical();
  // Function to list all ingredients critically low
  function ListCritical() {
    $.get("/api/inventory", function(data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].isCritical === true) {
          var crit = "YES";
          var ingredItem = `<tr class="toolow"><td> ${data[i].item} </td> 
          <td> ${data[i].qty} </td>
          <td> ${data[i].unit} </td>
          <td> ${crit}</td></tr>`;
          ingredList.append(ingredItem);
          itemName = data[i].item;
          itemUnit = data[i].unit;
        }
      }
      $(".toolow").click(function() {
        var item = this.children[0].innerText;
        var unit = this.children[2].innerText;
        localStorage.setItem(item, unit);
      });
      ListNormal();
    });
  }
  //Function to list all ingredients not ciritcally low
  function ListNormal() {
    $.get("/api/inventory", function(data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].isCritical === false) {
          var crit = "NO";
          var ingredItem = `<tr class='normalAmount'><td id='item'> ${data[i].item} </td> 
          <td> ${data[i].qty} </td>
          <td id='unit'> ${data[i].unit} </td>
          <td> ${crit} </td></tr>`;
          ingredList.append(ingredItem);
        }
      }
      $(".normalAmount").click(function() {
        var item = this.children[0].innerText;
        var unit = this.children[2].innerText;
        localStorage.setItem(item, unit);
      });
    });
  }
});
