$(document).ready(function () {
    //when the enter key is pressed
    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            //grab the UPC then clear the text box
            var upc = $("#scan").val().trim();
            $("#scan").val("");
            //GET request to run the UPC API
            $.get("/api/receive/" + upc).then(function (data) {
                //grab the name of the product
                var item = data.items[0].brand + ": " + data.items[0].title;
                var qty = ""
                //if there is a "size" use that for the qty and units
                if (data.items[0].size) {
                    str = data.items[0].size;
                    res = str.split(" ")
                    qty = res[0];
                    unit = res[1];
                }
                //or if there is a weight use that instead for the qty and the units
                else if (data.items[0].weight) {
                    str = data.items[0].weight;
                    res = str.split(" ")
                    qty = res[0];
                    unit = res[1];
                }
                //if neither of those then just set the qty equal to 1 and the unit to the size
                else {
                    qty = 1;
                    unit = data.items[0].size;
                }
                //template literal to add a new list item
                var receiveItem = `<li id="listItem">
                <span id="itemHeader">Item:</span>
                <span id="item">${item}</span>
                <span id="qtyHeader">Quantity:</span>
                <input id="qty" value=${qty}>
                <span id="unitHeader">Unit:</span>
                <input id="unit" value=${unit}>
                </li>`
                // append the new list item to the unordered list
                var listItem = $("#list").append('<ul></ul>')
                listItem.append(receiveItem);
            })
        }
    });
    //code for adding the new items to the DB
    $("#submit").on('click', function () {
        var newInventory = {
            item: document.getElementById("item").innerHTML,
            qty: document.getElementById("qty").value,
            unit: document.getElementById("unit").value,
            critical: 50,
            isCritical: 0
        }
        if (newInventory.qty < newInventory.critical) {
            newInventory.isCritical = 1
        }
        console.log(newInventory);
        $.post("/api/inventory", newInventory);

        $("#list").empty();

    });
});

