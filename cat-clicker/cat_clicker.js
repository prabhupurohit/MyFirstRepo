//This is a TO-DO version

var catList = [{
    name : "My Favourite Cat",
    img : "fav_cat1.jpg",
    numClick : 0
},
{
    name : "Darpok Cat",
    img : "fav_cat2.jpg",
    numClick : 0
},
{
    name : "Romantic Cat",
    img : "fav_cat3.jpg",
    numClick : 0
}
];

//The following is a working version
var cat1Click = 0;
var cat2Click = 0;

$("#cat1Name").append("My Favourite Cat");
$("#cat2Name").append("Darpok Cat");

$("#cat1").click(function(e) {
    cat1Click++;
    console.log("Cat1 Click: " + cat1Click);
    $("#cat1Desc").html("Cat1 Clicked: " + cat1Click);
});

$("#cat2").click(function(e) {
    cat2Click++;
    console.log("Cat2 Click: " + cat2Click);
    $("#cat2Desc").html("Cat2 Clicked: " +cat2Click);
});
