// JavaScript File
$(document).ready(function () {
  $("#button").click(function() {

var correctvalue = "7"
var userInput = $("User input").val();

if(userInput === correctvalue) {
    $("h1").text("You are correct");
