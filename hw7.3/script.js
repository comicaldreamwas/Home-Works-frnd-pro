function promptForNumber() {
   let userInput = null;

   for (let i = 0; i < 10; i++) {
       userInput = prompt("Please enter a number biger than 100");

      
       if (userInput === null) {
           console.log("User canceled the prompt.");
           return;
       }

       userInput = Number(userInput);

       if (userInput > 100) {
           console.log(`You entered a valid number: ${userInput}`);
           return;
       }

       console.log(`You entered ${userInput}, which is not biger than 100. Please try again.`);
   }

   console.log(`Max iterations reached. Last entered value: ${userInput}`);
}

promptForNumber();
