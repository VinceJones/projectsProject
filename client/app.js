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
            console.log("Success! Getting pictures from works ");
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

// Get Resume HTML
function getTemplate() {
    $.ajax({
        url: '/template',
        //data: JSON.stringify(),
        success: function(response) {
            var templateData = response;
            console.log("Success! Resume template works ");
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

// Get contact info
function getContactInfo() {
    $.ajax({
        url: '/getContact',
        data: JSON.stringify(),
        success: function(response) {
            var data = response;
            console.log("Success! Contact works ", data);
            displayContactInfo(data);
        },
        complete: function() {
            console.log("Contact ajax complete");
        },
        error: function () {
            console.log("Contact ajax epic fail");
        }
    });
}

function displayContactInfo(data) {
    $(".name").append(data.name);
    $(".email").append(data.email);
    $(".socials").append("<a href=" + data.github + ">" + data.gitLogo + "</a><a href=" + data.linkedin + ">" + data.linkedinLogo + "</a>");
    //$(".socials").append("");
}


$(document).ready(function(){
    getPics();
    getTemplate();
    getContactInfo();

    $(".fsaContent").on('click', ".startFruit", function(){
        $(".displayFruitstand").fadeToggle("slow").toggleClass("hidden");
    });

});