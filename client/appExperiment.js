var i = 0;
var j = 0;
var k = 0;

//Get Pictures for Carousel on Homepage
function getPics() {
    $.ajax({
        url: '/getPics',
        //data: JSON.stringify(),
        success: function(response) {
            var picData = response;
            console.log("Success! Getting pictures from works ", picData.sewingPics, picData.cookingPics);
            displayPics(picData);
        },
        complete: function() {
            console.log("Pic ajax complete");
        },
        error: function () {
            console.log("Pic ajax epic fail");
        }
    });
}

// Get Resume HTML
function getTemplate() {
    $.ajax({
        url: '/template',
        //data: JSON.stringify(),
        success: function(response) {
            var templateData = response;
            console.log("Success! Template ajax works ", templateData);
            displayFruitApp(templateData);
        },
        complete: function() {
            console.log("Template ajax complete");
        },
        error: function () {
            console.log("Template ajax epic fail");
        }
    });
}

function displayFruitApp(template){
    $(".resumeContent").append(template);

}

function displayPics(data) {
    $(".campPics").html(data.campingPics[0].camp);
    $(".sewPics").html(data.sewingPics[0].anorak);
    $(".cookPics").html(data.cookingPics[0].food);
    setInterval(function(){
        j++;
        if (j > 3){ j = 0;}
        k++;
        if (k > 4){ k = 0;}
        i++;
        if (i > 7){ i = 0;}
        $(".campPics").hide().html(data.campingPics[k].camp);
        $(".campPics").fadeToggle("slow");
        $(".sewPics").hide().html(data.sewingPics[j].anorak);
        $(".sewPics").fadeToggle("slow");
        $(".cookPics").hide().html(data.cookingPics[i].food);
        $(".cookPics").fadeToggle("slow");
    },5000);
}

// Fruit Market Calls
// Open Market
function openMarket() {
    $.ajax({
        url: '/openMarket',
        //data: JSON.stringify(),
        success: function(response) {
            var templateData = response;
            console.log("Success! Template ajax works ", templateData);
            displayFruitApp(templateData);
        },
        complete: function() {
            console.log("Template ajax complete");
        },
        error: function () {
            console.log("Template ajax epic fail");
        }
    });
}
// Buy Fruit
function buyFruit() {
    $.ajax({
        url: '/buyFruit',
        //data: JSON.stringify(),
        success: function(response) {
            var templateData = response;
            console.log("Success! Buyfruit ajax works ", templateData);
            displayFruitApp(templateData);
        },
        complete: function() {
            console.log("Buyfruit ajax complete");
        },
        error: function () {
            console.log("Buyfruit ajax epic fail");
        }
    });
}
// Sell Fruit
function sellFruit() {
    $.ajax({
        url: '/sellFruit',
        //data: JSON.stringify(),
        success: function(response) {
            var templateData = response;
            console.log("Success! SellFruit ajax works ", templateData);
            displayFruitApp(templateData);
        },
        complete: function() {
            console.log("SellFruit ajax complete");
        },
        error: function () {
            console.log("SellFruit ajax epic fail");
        }
    });
}


$(document).ready(function(){
    getPics();
    getTemplate();

    $(".fsaContent").on('click', ".startFruit", function(){
        $(".displayFruitstand").fadeToggle("slow").toggleClass("hidden");
    });

    //-----------Fruit App---------------

    //$("#openButton").on("click", function () {
    //    openMarket();
    //});
    //
    //$(".market").on('click', '.buyBtn', function () {
    //    buyFruit();
    //});
    //
    //$('.basket').on('click', '.sellBtn', function () {
    //    sellFruit();
    //});

});