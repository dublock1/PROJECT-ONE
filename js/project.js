$(document).ready(function() {
// create words
const phrase = ["JERSEY", "EAGLES", "PHILLY"];

// choose word
var pickAWord = Math.floor(Math.random() * phrase.length);
var wordToBeGuessed = phrase[pickAWord];
console.log(pickAWord);
console.log(wordToBeGuessed);
    // Create Letters
    var currentWord = "";
    var lettersGuess = 6;
    var wrongGuess= [];
    var usersGuess= [];
    // create buttons for my letters
    for(let i = 65; i <= 90; i++) {
        // console.log(String.fromCharCode(i))
        var button = $('<button class="letters">' + (String.fromCharCode(i)) + "</button>");
        $('#keyboard').append(button)
    }
    // make underscores that will be same length as my words hopefully
    
    var phraseUnderscores = wordToBeGuessed.length
    for(let i = 0; i < phraseUnderscores; i++) {
        console.log(wordToBeGuessed[i])
        let div = $(`<div class="letter-box" data-letter="${wordToBeGuessed[i]}"></div>`);
        $('#underscores').append(div)
               
}

    let test = $(`[data-letter="${lettersGuess}"]`)
    test.text(lettersGuess)
    console.log(lettersGuess)

    // let letterClickedOn = (("#keyboard") + (wordToBeGuessed)) 
    // console.log(letterClickedOn)

    
        // When user clicks button
        $("#keyboard").click(function(evt){
            evt.target.style.backgroundColor = "purple";
        console.log(evt.target.innerHTML) 
        // Compare letter clicked to current word to be guessed
        console.log(wordToBeGuessed.indexOf('#keyboard'))
        // if letter clicked is in Wordtobeguessed       
        if(wordToBeGuessed.indexOf(evt.target.innerHTML) > -1) {
            // if (evt.getAttribute(`data-letter`) === wordToBeGuessed) {
           let letterBox = document.querySelectorAll('.letter-box')
           letterBox.forEach(letter => {
               // push to underscores
               if (letter.getAttribute("data-letter") === evt.target.innerHTML) {
                   letter.innerHTML = letter.getAttribute('data-letter')
                   // if no more empty divs
                   // alert "you win"
               }
           })
            console.log(true);
        } else {
        console.log(false);
        var wrong = document.getElementById('incorrectGuess');
        
        wrongGuess.push(evt.target.innerHTML)
       
        wrong.innerHTML = wrongGuess
        console.log(wrongGuess)
        var totalGuesses = document.getElementById('guesses');
        totalGuesses.innerHTML = lettersGuess;
        console.log(lettersGuess)
        }
        if (wrongGuess.length === lettersGuess){
            alert("you lose");
        }
    })
    for(let i = 0; i < wordToBeGuessed.length; i++){
        // if wordToBeGuessed[i] === 
    }
    // disable button
    // else
        // push to incorrect
        // if amount incorrect === 6 
            // alert "you lose"
    
    
    

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
})
