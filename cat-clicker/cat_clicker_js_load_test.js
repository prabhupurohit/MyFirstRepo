var numClick = 0;
var obj1 = {
    mango : "123",
    banana : function () {
        $('#cat1').click(function(e) {
            numClick++;
            console.log("No of Click: " + numClick);
        })
    }
};