var canvas=document.getElementById("myCanvas")
cs=canvas.getContext("2d")
mouseE="empty"
var endposition_x,endposition_y
colour="black"
widthofline=1
canvas.addEventListener("mousedown",mymousedown)
function mymousedown(E) {
    colour=document.getElementById("colour").value
    widthofline=document.getElementById("width").value
    mouseE="mouseDown"
}
canvas.addEventListener("mouseup",mymouseup)
function mymouseup(E) {
    mouseE="mouseup"
}
canvas.addEventListener("mouseleave",mymouseleave)
function mymouseleave(E) {
    mouseE="mouseleave"
}
canvas.addEventListener("mousemove",mymousemove)
function mymousemove(E) {
   
    console.log("mousemove"+mouseE)
    var currentpositionofmouse_x=E.clientX-canvas.offsetLeft
    var currentpositionofmouse_y=E.clientY-canvas.offsetTop
    if (mouseE=="mouseDown") {
        cs.beginPath()
        cs.strokeStyle=colour
        cs.linewidth=widthofline
        console.log(colour)
        cs.moveTo(endposition_x,endposition_y)
        cs.lineTo(currentpositionofmouse_x,currentpositionofmouse_y)
        cs.stroke()
    }
    endposition_x=currentpositionofmouse_x
    endposition_y=currentpositionofmouse_y
}
