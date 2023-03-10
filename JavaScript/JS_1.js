function color_function(){
    var color_output;
    var colors=document.getElementById("color_input").value;
    var color_string = " is a great color!";
    switch(colors) {
        case "Red":
            color_output = "Red" + color_string;
        break;
        case "Yellow":
            color_output = "Yellow" + color_string;
        break;
        case "Green":
            color_output = "Green" + color_string;
        break;
        case "Blue":
            color_output ="Blue" + color_string;
        break;
        case "Pink":
            color_output = "Pink" + color_string;
        break;
        case "Purple":
            color_output = "Purple" + color_string;
        break;
        default:
            color_output="Please enter a color exactly as written on the above list.";

    }
    document.getElementById("output").innerHTML = color_output;
}

function hello_world_fxn() {
    var A=document.getElementsByClassName("click");
    A[0].innerHTML="The text has changed!"; //setting the index to 0 means this function will apply to the first element with the class ID
}

var c=document.getElementById("border");
var ctx=c.getContext("2d");
var grd = ctx.createLinearGradient(0,0,200,0);
    grd.addColorStop(0,black);
    grd.addColorStop(1,white);
ctx.fillStyle = grd;
ctx.fillRect(50, 50, 350, 100);
// ctx.moveTo(0,0);
// ctx.lineTo(500,350);
// ctx.stroke();


