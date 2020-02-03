$(document).ready(function () {
  getCriticalItems();

  function getCriticalItems() {
    $.get("/api/orders", function (data) {
      var allItems = [];
      var criticalItems = [];
      var length = data.length;
      for (i = 0; i < length; i++) { }
    });
  }
});
