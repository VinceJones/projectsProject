console.log("This runs");

var i = 0;
var j = 0;
var k = 0;

var sewingPicArray = ["<img src='../assets/images/pinkAnorak.png' height='250px' width='200px'>",
                      "<img src='../assets/images/blackAnorak.png' height='250px' width='200px'> ",
                      "<img src='../assets/images/whiteAnorak.png' height='250px' width='300px'>",
                      "<img src='../assets/images/vest.png' height='250px' width='200px'>"];

var cookPicArray = ["<img src='../assets/images/butcherPig.png' height='250px' width='200px'>",
                    "<img src='../assets/images/chopPig.png' height='250px' width='300px'>",
                    "<img src='../assets/images/dateGrape.png' height='250px' width='300px'>",
                    "<img src='../assets/images/lambDish.png' height='250px' width='300px'>"];

var campPicArray = ["<img src='../assets/images/campfire.png' height='250px' width='200px'>",
                    "<img src='../assets/images/hammock.png' height='250px' width='200px'>",
                    "<img src='../assets/images/parachute.png' height='250px' width='200px'>",
                    "<img src='../assets/images/loganPass.png' height='250px' width='200px'>",
                    "<img src='../assets/images/yellowStone.png' height='250px' width='200px'>"];

$(document).ready(function(){

    $(".sewPics").html(sewingPicArray[0]);
    setInterval(function(){
        i++;
        if (i > 2){
            i = 0;
        }
        $(".sewPics").hide().html(sewingPicArray[i]);
        $(".sewPics").fadeToggle();
    },5000);

    $(".cookPics").html(cookPicArray[0]);
    setInterval(function(){
        j++;
        if (j > 3){
            j = 0;
        }
        $(".cookPics").hide().html(cookPicArray[j]);
        $(".cookPics").fadeToggle();
    },5000);

    $(".campPics").html(campPicArray[0]);
    setInterval(function(){
        k++;
        if (k > 4){
            k = 0;
        }
        $(".campPics").hide().html(campPicArray[k]);
        $(".campPics").fadeToggle();
    },5000);

});