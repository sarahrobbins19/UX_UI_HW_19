console.log("Your index.js file is loaded correctly!");


$(document).ready(function(){
    $("a").hover(function(){
        $(this).css("background-color", "#5B624F");
        }, function(){
        $(this).css("background-color", "#324539");
      });
});

