function getUserInfo() {
   
   let yearBirth = prompt("Please enter your year of birth .");
   if (yearBirth === null) {
       alert("It's a pity that you didn't want to enter your year of birth.");
       return;
   }
   yearBirth = parseInt(yearBirth);
   if (isNaN(yearBirth)) {
       alert("Invalid input for year of birth.");
       return;
   }

   let city = prompt("In which city do you live?");
   if (city === null) {
       alert("It's a pity that you didn't want to enter your city.");
       return;
   }

 
   let sport = prompt("What is your favorite sport?");
   if (sport === null) {
       alert("It's a pity that you didn't want to enter your favorite sport.");
       return;
   }

   
   const currentYear = new Date().getFullYear();
   const age = currentYear - yearBirth;

  
   let cityMessage;
   switch (city.toLowerCase()) {
       case 'kyiv':
           cityMessage = "You live in the capital of Ukraine.";
           break;
       case 'washington':
           cityMessage = "You live in the capital of the USA.";
           break;
       case 'london':
           cityMessage = "You live in the capital of the UK.";
           break;
       default:
           cityMessage = `You live in the city of ${city}.`;
   }


   const sportsChampions = {
       "footbal": "Cristiano Ronaldo",
       "basketball": "LeBron James",
       "tennis": "Roger Federer"
   };

   let sportMessage;
   if (sportsChampions[sport.toLowerCase()]) {
       sportMessage = `Cool! Do you want to be like ${sportsChampions[sport.toLowerCase()]}?`;
   } else {
       sportMessage = `Your favorite sport is ${sport}.`;
   }

  
   alert(`Your age: ${age},${cityMessage},${sportMessage}`);
}
getUserInfo();
