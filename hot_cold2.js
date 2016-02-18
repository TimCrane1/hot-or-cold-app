function hotOrCold() {
guess = -1;
var numGuesses = 0;
var numAlready = [];
var numDiff = [];
secretNumber = Math.floor(Math.random() * 100);
  while (guess != secretNumber) {
        guess = parseInt(prompt('guess a number from 1 to 100'));
        if (isNaN(guess) || (guess < 1 || guess > 100)) {
           console.log("Make sure your guess is a number between 1 and 100. Try again");
        }
        else { numGuesses = numGuesses + 1;
               numAlready.push(guess);
               var absoluteDiff = Math.abs(secretNumber - guess);
               numDiff.push(absoluteDiff);
               if (numGuesses > 1) {
                   if (numDiff[(numGuesses - 1)] > numDiff[(numGuesses - 2)]) {
                       var temp = "you're getting colder.";
                   }
                   else { var temp = "you're getting warmer.";
                   }
               }
               else {var temp = ""
               }

               if (absoluteDiff >= 50) {
                   console.log("ice cold, guess again. That was guess number " + numGuesses + ". So far you've guessed " + numAlready + ". " + temp);
               }
               else if (absoluteDiff < 50) {
                    if (absoluteDiff >= 30) {
                       console.log("cold, guess again. That was guess number " + numGuesses + ". So far you've guessed " + numAlready + ". " + temp);
                    }
                    else if (absoluteDiff >= 20) {
                            console.log("warm, guess again. That was guess number " + numGuesses + ". So far you've guessed " + numAlready + ". " + temp);
                    }
                    else if (absoluteDiff >= 10) {
                            console.log("hot, guess again. That was guess number " + numGuesses + ". So far you've guessed " + numAlready + ". " + temp)
                    }
                    else { console.log("very hot, guess again. That was guess number " + numGuesses + ". So far you've guessed " + numAlready + ". " + temp)
                    }
               }
          }
  }
  console.log('You got it!');
var playAgain = confirm('Would you like to play again?');
  if (playAgain) {
     hotOrCold()
  }
}
hotOrCold()