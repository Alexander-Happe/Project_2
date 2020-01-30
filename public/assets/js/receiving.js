$(document).ready(function () {
    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            var upc = $("#scan").val().trim();
            $.get("/api/receive/" + upc).then(function (data) {
                var item = data.items[0].title;
                console.log(data.items[0].title)
                var listItem = $("#list").append('<ul></ul>')
                listItem.append(item);
            })
        }
    });
});

