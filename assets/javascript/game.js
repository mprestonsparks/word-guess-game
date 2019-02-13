
document.addEventListener("DOMContentLoaded", function (event) {

    // DECLARE VARIALBES
    var wordList = [];
    var activeWord;
    var activeWordLetters = [];
    var correctKeysEntered = [];
    var lettersEntered = [];
    var lettersToPush = [];

    var guessLimit = 5;
    var guessesLeft;
    var gameStatus;
    var compScore = 0;
    var roundNum;



    // CREATE WORD LIST
    wordList = [
        "Preston",
        "Sparks",
        "Tried",
        "His",
        "Best"
    ]
    console.log(wordList);

    generateWord();
    // SELECT RANDOM WORD FROM LIST
    function generateWord() {
        if ( lettersEntered.length ===  0 || guessesLeft === 0)  { // If new game (roundNum = 1) or game ended (guessesLeft = 0), select new word
            activeWord = wordList[Math.floor(Math.random() * wordList.length)];
            console.log("activeWord: " + activeWord);
             };
        }

    if (activeWord) {
        // PUSH THE CORRECT LETTERS ENTERED TO THEIR RESPECTIVE IDs ON THE PAGE
        // Create DIVs for letters, assign ID tags, write default text
        for (i = 0; i < activeWord.length; i++) {
            var para = document.createElement("span"); // Create element
            para.setAttribute("id", "letter" + i); // Give element correct ID tag
            // letterNum = activeWord.indexOf(correctKeysEntered[i])
            var textToWrite = "____"; // write default message for unguessed letter
            var t = document.createTextNode(textToWrite); // Create text node to replace default text
            para.appendChild(t); // Append text to element
            document.getElementById("letters").appendChild(para); // Write text to page 
        };

        // PUT ACTIVE WORD'S LETTERS IN AN ARRAY
        for (var i = 0; i < activeWord.length; i++) {
            activeWordLetters.push(activeWord[i]);
        }

    
    }





    // DETECT KEY PRESSED, PUSH IT TO THE lettersEntered ARRAY
    function checkIfUserScored () {



        for (i=0; i<=activeWord.length; i++) {
            divNum = activeWord.indexOf[i];
            var checkDivConent = document.getElementById("letter" + divNum);
            var defaultDivContent = "____";
            var testDivContent = (checkDivContent === defaultDivContent);
        };
        for (i=0; i<activeWord.length; i++) {
            checkIfUserScored(i) = true;
            console.log("This is a message");
        }
    }
        // var testscore1 = document.getElementById("letter0").textContent;
        // var testScore2 = "____";
        // var testScore3 = (testscore1 === testScore2);
        // console.log("testscore1: " + testScore3);

        // var defaultDivContent = "____";
        // switch(activeWord.length) {
        //     case 0:
        //     var letter0Content = document.getElementById("letter0").textContent;
        //     var letter0Check = (letter0Content === defaultDivContent);

        //     break;
        //     case 1:
        //       // code block
        //     break;
        //     case 2:
        //       // code block
        //     break;
        //     case 3:
        //       // code block
        //     break;
        //     case 4:
        //       // code block
        //     break;
        //     default:
        //       // code block
        //   } 






    var keyPressed;

    document.getElementById("keyEntered").addEventListener('input', function (e) {
        console.log(e.target.value); //abc

        // keyPressed = e.key;
        var lastChar = e.target.value.length
        lettersEntered.push(e.target.value[lastChar-1]);

        seperateCorrect();
        writeToPage();
        writeLettersToPage();
        calcGuessesLeft();
        // checkIfUserScore();
        console.log("correctKeysEntered: " + correctKeysEntered);
        console.log("activeWord: ") + activeWord;
    });

    function seperateCorrect() {
        for (i = 0; i <= lettersEntered.length; i++) {

            if ((lettersEntered.indexOf(activeWordLetters[i])) != -1) {
                correctKeysEntered.push(activeWordLetters[i]);
            }
        }
    }

    function writeLettersToPage() {
        // document.getElementById("letter0").innerHTML = "this text";
        for (i = 0; i < lettersToPush.length; i++) {
            var rightDiv = "letter" + lettersToPush[i]; //try indexOf ? // Assign DIV ID based on letter's position in activeWord
            lettersInActiveWord = lettersToPush[i]; // Find letters in activeWord
            letterPosition = activeWord[lettersInActiveWord]; // Find letter's position in activeWord
            document.getElementById(rightDiv).innerHTML = letterPosition; // Write letter to its respective DIV
            // document.getElementById(rightDiv+letterPosition).setAttribute("class","not-guessed");
        };
    };

    // WRITE correctKeysEntered to lettersToPush ARRAY
    function writeToPage() {
        for (i = 0; i < (correctKeysEntered.length); i++) {
            var test1 = correctKeysEntered[i];
            var test3 = activeWord.includes(test1);
            if (test3) {
                var testA = activeWord.indexOf(correctKeysEntered[i]);
                lettersToPush.push(testA);
            };
        };
    };

    // -------------------------------------------------------------------------

    // CALCULATE # OF GUESSES LEFT AND ROUND #
    function calcGuessesLeft() {
        if (lettersEntered.length < guessLimit) {
            roundNum = (Math.ceil((lettersEntered.length + 1) / 5) * 5) / guessLimit;
            guessesLeft = (guessLimit * roundNum) - lettersEntered.length
            console.log("guessesLeft: " + guessesLeft);
            console.log("lettersEntered: " + lettersEntered.length);
            console.log("roundNum " + roundNum);
        } else {
            roundNum = (Math.ceil((lettersEntered.length + 1) / 5) * 5) / guessLimit;
            guessesLeft = (guessLimit * roundNum) - lettersEntered.length;
            console.log("guessesLeft: " + guessesLeft);
            console.log("lettersEntered: " + lettersEntered.length);
            console.log("roundNum " + roundNum);
        }
    }

});


