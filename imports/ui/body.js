import { Template } from 'meteor/templating';
import { Main } from '../ui/body.js'; 
import './body.html';

var count = 0
var timer 
Template.body.events({
    'click .clock' (event) {
       var loops = Math.floor(parseInt($("#texter").val())) / 10 + 1
       if ($("#go").html() == "Reset") {
           $("#texter").show()
           $("#go").html("Blockify")
           $(".square").remove()
       } 
      else if (isNaN(loops)) {
           alert("Please input a number!")
       }
       
       else {
       for (var i = 1; i < loops; i++) {
               $("#asshole").append("<div id='" + i + "' class='square'></div>");
            // //   $("#" + i).css("animation-delay", JSON.stringify(i * 10) + "s")
            //   $("#" + i).on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',  function() {
            //       $("#" + i).remove() 
            //     })
               $("#texter").hide()
               $("#go").html("Reset")
               
               
       }
        count = loops 
        timer = setInterval(counter, 10000)
       }
    }
});

function counter() {
    count = count - 1
    if (count < 0) {
        clearInterval(timer)
    }
    $("#" + JSON.stringify(count)).animate({
        height: 0
        }, 500, function() {
        $("#" + JSON.stringify(count)).remove()
    })
}