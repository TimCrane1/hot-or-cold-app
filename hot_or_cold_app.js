if (confirm("Click OK if you want to play Hot or Cold!")) {
  var secretNumber = Math.floor(Math.random() * 100);
    
  var guess = undefined;
  var numGuesses = 0;
  var numAlready = [];
  var numDiff = [];


  function submit(){
      
      if (guess === secretNumber){
          console.log("You got it!");
          if (confirm("Click OK if you want to play Hot or Cold!")) {
              secretNumber = Math.floor(Math.random() * 100);
              guess = undefined;
              console.log("guess the new number");
          }
      }
      else  if (guess === undefined){
               console.log('Guess a number between 1 and 100(your guess should look like this "guess = 20") and call the submit function');
      }
      else if (guess < 1 || guess > 100) {
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
  submit()
}