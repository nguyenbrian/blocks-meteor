import { Template } from 'meteor/templating';
import { Main } from '../ui/body.js'; 
import './body.html';

var count = 0
var timer 
var loops

Template.body.events({
    'click .clock' (event) {
       loops = Math.floor(parseInt($("#texter").val())) / 10 + 1
       if ($("#go").html() == "Reset") {
           $("#texter").show()
           $("#go").html("CREATE")
           $(".square").remove()
           $("#upwards-arrow").show()
           $("#downwards-arrow").show()
       } 
      else if (isNaN(loops)) {
           alert("Please input a number!")
       }
       
       else {
       for (var i = 1; i < loops; i++) {
           if (i == 1 ) {
                $("#asshole").append("<div id='" + i + "' class='square'></div>");
               $("#" + i).animate({
                   backgroundColor: "black"
               }, 5000, function() {
                   $("#1").animate({
        height: 0
        }, 500, function() {
            $("#1").animate({
                width: 0
            }, 250, function() {
                $("#1").remove()
            })})
               })
               $("#upwards-arrow").hide()
               $("#downwards-arrow").hide()
               $("#texter").hide()
               $("#go").html("Reset")
               }
      else {
               $("#asshole").append("<div id='" + i + "' class='square'></div>");
               $("#" + i).delay(i * 5000).animate({
                   backgroundColor: "black"
               }, 5000, function() {
                   $("#" + JSON.stringify(count)).animate({
        height: 0
        }, 500, function() {
            $("#" + JSON.stringify(count)).animate({
                width: 0
            }, 250, function() {
                $("#" + JSON.stringify(count)).remove()
            })})
               })
               $("#upwards-arrow").hide()
               $("#downwards-arrow").hide()
               $("#texter").hide()
               $("#go").html("RESET")
       }
               
       }
        count = loops 
        timer = setInterval(counter, 5000)
       }
    }
});


$("#upwards-arrow").on("tap", function() {
    alert("tapped!")
});
        
        
function counter() {
    count = count - 1
    console.log(count)
    if (count < 0) {
        clearInterval(timer)
    }
    
}