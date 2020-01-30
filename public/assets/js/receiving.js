$(document).ready(function () {
    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            var upc = $("#scan").val().trim();
            $.get("/api/receive", {
                upc
            }).then(function (data) {
                console.log(data)
            })
        }
    });
});

// $(document).on('keypress', function (e) {
//     if (e.which == 13) {
//         alert('You pressed enter!');
//     }
// });

// $(document).ready(function () {
//     $("#scan").on("keypress", function (e) {
//         var userInput = $(".main-search")
//             .val()
//             .trim();
//         $.ajax({
//             url:
//                 "https://api.edamam.com/search?q=" +
//                 userInput +
//                 "&app_id=aa7e15d0&app_key=95bc405156202f2376c3c63ef483565b",
//             method: "GET"
//         }).then(function (response) {
//             var hits = response.hits;
//             console.log(response.hits);
//             $(".dish-results").empty();
//             for (i = 0; i < hits.length; i++) {
//                 //loops through and makes a new div for each recipe
//                 var recipeDiv = $("<div>");
//                 recipeDiv.addClass("name column is-5 has-text-centered subtitle");
//                 //adds name of the recipes
//                 var names = hits[i].recipe.label;
//                 recipeDiv.text(names);
//                 //adds div for buttons (style) ****This is so bulma understands how to lay out the buttons
//                 var resultbuttons = $("<div>");
//                 resultbuttons.addClass("columns is-mobile is-centered");
//                 recipeDiv.append(resultbuttons);
//                 //adds links to the divs
//                 var links = $("<a>");
//                 var recipeLinks = hits[i].recipe.url;
//                 console.log(recipeLinks);
//                 links.addClass(
//                     "column is-5-desktop is-5-tablet is-5-mobile search-item"
//                 );
//                 links.attr("href", recipeLinks);
//                 links.attr("target", "_blank");
//                 links.text("Recepie Source");
//                 resultbuttons.append(links);
//                 //adds buttons for adding ingredients
//                 var ingredientBttn = $("<button>");
//                 ingredientBttn.text("Save Ingredients");
//                 ingredientBttn.attr(
//                     "class",
//                     "ingredients-button column is-5-desktop is-5-tablet is-5-mobile search-item"
//                 );
//                 ingredientBttn.attr("value", hits[i].recipe.ingredientLines);
//                 ingredientBttn.attr("data-link", recipeLinks);
//                 ingredientBttn.attr("data-name", names);
//                 resultbuttons.append(ingredientBttn);
//                 //makes new image tags
//                 var imgs = $("<img>");
//                 var sourceImg = hits[i].recipe.image;
//                 imgs.attr("src", sourceImg);
//                 imgs.attr("alt", "recipe img");
//                 imgs.attr("class", "img image is-250x250");
//                 //adds image to the divs
//                 recipeDiv.append(imgs);
//                 $(".dish-results").append(recipeDiv);
//             }
//         });
//     });