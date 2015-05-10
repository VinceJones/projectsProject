 var i;
 var min;
 var sec;

    var value;
    var appleArray = [];
    var orangeArray = [];
    var bananaArray = [];
    var pearArray = [];

    var names = ["Apple", "Orange", "Banana", "Pear"];
    var fruitArray = [appleArray, orangeArray, bananaArray, pearArray];
    var masterArray = [];

// User Object
    var User = {
        cash : 100
    }

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    }

    function avgPrice(array) {
        value = 0;

        for (j = 0; j < array.length; j++){
            value+=array[j];
        }
        if (array.length > 1){
            value /= array.length;
        }
        value = (Math.round(value * 100) /100);
        return value;
    }


    function priceChange(object) {
        value = ( randomNumber(-50, 50) / 100);
        object.price = value + object.price;

        if (object.price > 9.99) {
            return object.price = 9.99;
        } else if ( object.price < 0.5 ) {
            return object.price = 0.5;
        } else {
            return (Math.round(object.price * 100) /100);
        };
    }

    function userDisplay(object, array){
        //$('.basket')
        var invString = "<div>You have " + object.quantity + " " + object.name + "(s)<br>Average Price: " + avgPrice(array) + "</div>";
        var buttonSell ="<button class='sellBtn' data-id='" + object.name + "'>Sell " + object.name + "</button>";
        var divWrapper = "<div class='basketFruit " + object.name +"Item'>" + invString + buttonSell + "</div>";
        $(".basket").append(divWrapper);
    }

    function fruitDisplay(object){

        var imgString = "<img src='../assets/images/" + object.name + ".png'>";
        var string = "<div>" + imgString + "<br>$" + priceChange(object) + "</div>";
        var buttonBuy = "<button class='buyBtn' data-id='" + object.name + "'>Buy " + object.name + "</button>";
        var divWrapper = "<div class='marketFruit " + object.name + "Buy'>" + string + buttonBuy + "</div>";
        $(".market").append(divWrapper);
    }
    // Fruit Contructor
    var Fruit = function(name) {
        this.name = name;
        this.price = randomNumber(1, 5) + (randomNumber(-50, 50) / 100);
        this.quantity = 0;
    }
    //--------------------Make Fruit-----------------------
    for (i = 0; i < names.length; i++) {
        var newObject;
        newObject = new Fruit(names[i]);
        masterArray.push(newObject);
    }

 function timer() {
         setInterval(function(){
             if (min >= 0 && sec >= 0) {
                 sec--;
                 if (sec < 10) {
                     sec = "0" + sec;
                 }
                 $(".timeDisplay").html(min + ":" + sec);
                 sec = parseInt(sec);
                 if (sec < 1) {
                     min--;
                     sec = 60;
                 }
             } else {
                 $(".timeDisplay").html("Times Up!");
                 $(".displayFruitstand").empty();
                 $(".endGame").html("<h2>You made $" + User.cash +"! Way to go!</h2>");
             }
         },1000);

 }

    $(document).ready(function(){

        $("#openButton").on("click", function () {
            min = 4;
            sec = 60;
            timer();
            $(".basket").empty();
            $(".market").empty();
            for (i = 0; i < masterArray.length; i++) {
                fruitDisplay(masterArray[i]);
                userDisplay(masterArray[i], fruitArray[i]);
            }

            //------------ Changing Price in Market -----------------
            setInterval(function () {
                // Clears the market display
                $(".market").empty();
                for (i = 0; i < masterArray.length; i++) {
                    fruitDisplay(masterArray[i], fruitArray[i]);
                }
            }, 10000);
            console.log(masterArray);
        });

//------------------- Buy things ----------------------

        $(".market").on('click', '.buyBtn', function () {
            var btnName = $(this).data("id");
            console.log("Buy: " + btnName);
            $('.basket').empty();

            for (i = 0; i < masterArray.length; i++) {
                if (masterArray[i].name == btnName) {

                    console.log("Master array name: " + masterArray[i].name);

                    User.cash = User.cash - masterArray[i].price;

                    if (User.cash > 0) {
                        masterArray[i].quantity++;
                        fruitArray[i].push(masterArray[i].price);

                        User.cash = (Math.round(User.cash * 100) / 100);
                        $("#totalCash").html("<p>How much money you have: $" + User.cash + "</p>");
                    } else {
                        User.cash = User.cash + masterArray[i].price;
                        alert("You don't have the money to buy that!");
                    }
                }
                userDisplay(masterArray[i], fruitArray[i]);
            }
        });

//------------------- Sell Things --------------------
        $('.basket').on('click', '.sellBtn', function () {
            var btnName = $(this).data("id");
            console.log("Sell: " + btnName);
            $('.basket').empty();

            for (i = 0; i < masterArray.length; i++) {
                if (masterArray[i].name == btnName) {

                    User.cash = User.cash + masterArray[i].price;

                    if (masterArray[i].quantity > 0) {
                        masterArray[i].quantity--;
                        fruitArray[i].pop(masterArray[i].price);

                        User.cash = (Math.round(User.cash * 100) / 100);
                        $("#totalCash").html("<p>How much money you have: $" + User.cash + "</p>");
                    } else {
                        User.cash = User.cash - masterArray[i].price;
                        alert("You can't sell what you don't have!");
                    }
                }
                userDisplay(masterArray[i], fruitArray[i]);
            }
        });

//------------------- Display Cash -------------------
        $("#totalCash").text("How much money you have: $" + User.cash);

    });