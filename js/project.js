$(document).ready(function() {
function draw(){
var hang = document.getElementById("hangman").getContext('2d');
hang.fillStyle = "white";
hang.lineWidth = 3;
hang.fillRect(0, 0, 300, 300);
hang.beginPath(); // vertical bar
    hang.moveTo(50,270);
    hang.lineTo(50,25);
    hang.stroke();
hang.beginPath(); // vertical bar long piece
    hang.moveTo(65,270);
    hang.lineTo(65,85);
    hang.stroke();
hang.beginPath(); // vertical bar short piece
    hang.moveTo(65,64);
    hang.lineTo(65,40);
    hang.stroke();
hang.beginPath(); // horizontal line
    hang.moveTo(49,25);
    hang.lineTo(175,25);
    hang.stroke();
hang.beginPath(); //  horizontal bar short piece
    hang.moveTo(49,40);
    hang.lineTo(86,40);
    hang.stroke();
hang.beginPath(); // horizontal bar long piece
    hang.moveTo(106,40);
    hang.lineTo(175,40);
    hang.stroke();
hang.beginPath(); // small vertical bar
    hang.moveTo(173,25);
    hang.lineTo(173,40);
    hang.stroke();
hang.beginPath(); // cross bar
    hang.moveTo(50,80);
    hang.lineTo(100,25);
    hang.stroke();
hang.beginPath(); // cross bar
    hang.moveTo(60,90);
    hang.lineTo(111,35);
    hang.stroke();
hang.beginPath(); // cross bar
    hang.moveTo(50,80);
    hang.lineTo(60,90);
    hang.stroke();
hang.beginPath(); // cross bar
    hang.moveTo(100,25);
    hang.lineTo(65,85);
    hang.stroke();
hang.beginPath(); // ground
    hang.moveTo(35,270);
    hang.lineTo(265,270);
    hang.stroke();
hang.beginPath(); // noose
    hang.moveTo(150,40);
    hang.lineTo(150,80);
    hang.stroke();
}
draw();
}