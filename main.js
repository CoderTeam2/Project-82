var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var mouse_event = "";
var color = "black";
var width_of_line = 2;
var radius = 50;
var pos_x,pos_y = 0;
canvas.addEventListener("mousedown",down);
function down(e){
    mouse_event = "MOUSE_DOWN";
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
}
canvas.addEventListener("mousemove",draw);
function draw(e){
    pos_x = e.clientX - canvas.offsetLeft;
    pos_y = e.clientY - canvas.offsetTop;
    if(mouse_event == "MOUSE_DOWN"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(pos_x,pos_y,radius,0,360);
        ctx.stroke();
    }
}
canvas.addEventListener("mouseup",up);
function up(e){
    mouse_event = "MOUSE_UP";
}
canvas.addEventListener("mouseleave",leave);
function leave(e){
    mouse_event = "MOUSE_LEAVE";
}
function clearCanvas (){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}