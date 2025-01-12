var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.scale(0.2, 0.17);
ctx.beginPath();
ctx.moveTo(183.94,137.5);
ctx.bezierCurveTo(184,138,152,199,163,230);
ctx.bezierCurveTo(175,261,209,278,265,262);
ctx.bezierCurveTo(326,248,720,139,720,139);
ctx.bezierCurveTo(720,139,332,312,255,344);
ctx.bezierCurveTo(179,376,137,362,126,355);
ctx.bezierCurveTo(115,349,75,325,99,259);
ctx.bezierCurveTo(131,185,184,138,184,138);
ctx.closePath();
ctx.fillStyle = 'rgb(222,223,228)';
ctx.fill();
ctx.strokeStyle = 'lightgray';
ctx.stroke();


