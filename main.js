const words = [
    "Hello","Programming","Code","Javascript","Town","Country","Testing",
    "Youtube","Linkedin","Twitter","Github","Leetcode","Internet","Python",
    "Scala","Destructuring","Paradigm","Styling","Cascade","Documentation",
    "Coding","Funny","Working","Dependencies","Task","Runner","Roles",
    "Test","Rust","Playing"
];

//setting levels
const lvls = {
    "Easy": 6,    //value = seconds
    "Normal": 4,
    "Hard": 3,
};

// Setting Default Level
let defaultLevelName = "Normal";
let defaultLevelSeconds = lvls[defaultLevelName];


//Define Selectors
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".description .lvl");
let lvlSecSpan  = document.querySelector(".description .lvl-seconds");
let theWord     = document.querySelector(".the-word");
let input       = document.querySelector(".input");
let upcomingWords = document.querySelector(".upcoming-words");
let timeLeftSpan  = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");
let restartButton = document.querySelector(".finish .res");

//Setting levelName + Seconds + Score
lvlNameSpan.innerHTML = defaultLevelName;
lvlSecSpan.innerHTML  = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

//Disable Pasting
input.onpaste = () => true;


startButton.onclick = function (){
    this.remove();
    input.focus();
    genWords();
}

function genWords(){
    // Get A Random Word From The Array
    let randomWord = words[Math.floor(Math.random() * words.length)];
    // Get The Index Of The Random Word To Remove
    let randomWordIndex = words.indexOf(randomWord);
    // Remove The Random Word From The Array 
    words.splice(randomWordIndex,1);
    // Show The Random Word 
    theWord.innerHTML = randomWord;
    // Empty Upcoming Words
    upcomingWords.innerHTML = '';
    // Add The Remaining Words To The Word Contianer
    for(let i = 0 ; i < words.length ; i++){
        let div = document.createElement("div");
        div.appendChild(document.createTextNode(words[i]));
        upcomingWords.appendChild(div);
    }
    // Starting The Game
    startPlaying();
}

// Restart The Game
restartButton.onclick = function () {
    location.reload();
}

function startPlaying(){
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    let start = setInterval(() => {
        timeLeftSpan.innerHTML--;
        if(timeLeftSpan.innerHTML == "0"){
            // stop Timmer
            clearInterval(start);
            if(theWord.innerHTML.toLowerCase() === input.value.toLowerCase()){
                // Empty The Input For The Next 
                input.value = "";
                // Increase The Score
                scoreGot.innerHTML++;
                if(words.length > 0){
                    genWords();
                }else{
                    let span = document.createElement("span");
                    span.className = "win";
                    span.appendChild(document.createTextNode("Congrats You Won!"));
                    finishMessage.prepend(span);
                    upcomingWords.remove();
                }
            }else{
                let span = document.createElement("span");
                span.className = "lost";
                span.appendChild(document.createTextNode("Game Over HAHAHA"));
                finishMessage.prepend(span);
            }
        }
    }, 1000);
}
