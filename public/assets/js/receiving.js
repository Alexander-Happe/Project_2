$(document).ready(function () {
    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            var upc = $("#scan").val().trim();
            $("#scan").val("");
            $.get("/api/receive/" + upc).then(function (data) {
                var item = data.items[0].brand + ": " + data.items[0].title;
                var qty = ""
                if (data.items[0].size) {
                    str = data.items[0].size;
                    res = str.split(" ")
                    qty = res[0];
                    unit = res[1];
                }
                else if (data.items[0].weight) {
                    str = data.items[0].weight;
                    res = str.split(" ")
                    qty = res[0];
                    unit = res[1];
                }
                else {
                    qty = 1;
                    unit = data.items[0].size;
                }
                var receiveItem = `<li id="listItem">
                <span id="itemHeader">Item:</span>
                <span id="item">${item}</span>
                <span id="qtyHeader">Quantity:</span>
                <input id="qty" value=${qty}>
                <span id="unitHeader">Unit:</span>
                <input id="unit" value=${unit}>
                </li>`
                // console.log(data)
                var listItem = $("#list").append('<ul></ul>')
                listItem.append(receiveItem);
            })
        }
    });

    $("#submit").on('click', function () {
        console.log("yes");
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

        $("#list").empty();

    });
});

