var mouseEvent = "";

Canvas = document.getElementById(myCanvas);
ctx = canvas.getContext("2d");

var color = "black";
var width_of_line = 2;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;

    mouseEvent = mouseDown;
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_position_of_mouse_x = e.clientx - canvas.offSetLeft;
    current_position_of_mouse_y = e.clienty - canvas.offSetTop;

    if(mouseEvent == mousedown){
        console.log("current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc = current_position_of_mouse_x, current_position_of_mouse_y, radius, o, 2 * Math.PI;
        ctx.stroke();
}
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent = my_mouseup;
}

canavs.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent = my_mouseleave;
}

function clearArea(){
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}

