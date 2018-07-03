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
//var cat1Click = 0;
//var cat2Click = 0;

function addDiv(parentElement, numberOfDivs) {
    catList.forEach(function(eachCat,catIndx,catArr) {
      catIndx++;
      var newDiv = document.createElement("div");
      newDiv.setAttribute("id", "cat"+catIndx+"Id");
      var newPara1 = document.createElement("p");
      var newCatIdName = "cat"+catIndx+"Name";
      var newCatIdDesc = "cat"+catIndx+"Desc";
      newPara1.setAttribute("id", newCatIdName);
      var newImg = document.createElement("img");
      newImg.setAttribute("id", "cat"+catIndx);
      newImg.setAttribute("src", "fav_cat"+catIndx+".jpg");
      newImg.addEventListener('click', (function(catNo) {
        var numClick=0;
        return function() {
            numClick++;
            console.log("Cat"+catNo+" Click: " + numClick);
            $("#"+newCatIdDesc).html("Cat" + catNo + " Clicked: " + numClick);
        };
      })(catIndx));
      var newPara2 = document.createElement("p");
      newPara2.setAttribute("id", newCatIdDesc);

      newDiv.appendChild(newPara1);
      newDiv.appendChild(newImg);
      newDiv.appendChild(newPara2);

      parentElement.appendChild(newDiv);
      $('#'+newCatIdName).text(eachCat.name);
    });
}

addDiv(document.body,2);


// $("#cat1Name").append("My Favourite Cat");
// $("#cat2Name").append("Darpok Cat");



// $("#cat1").click(function(e) {
//     cat1Click++;
//     console.log("Cat1 Click: " + cat1Click);
//     $("#cat1Desc").html("Cat1 Clicked: " + cat1Click);
// });

// $("#cat2").click(function(e) {
//     cat2Click++;
//     console.log("Cat2 Click: " + cat2Click);
//     $("#cat2Desc").html("Cat2 Clicked: " +cat2Click);
// });
