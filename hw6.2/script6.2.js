function averageOfNumbers(array) {

   const numericElements = array.filter(item => typeof item === 'number');
   
   if (numericElements.length === 0) {
       return null; 
   }

   
   const sum = numericElements.reduce((accumulator, current) => accumulator + current, 0);

  
   const average = sum / numericElements.length;
   
   return average;
}

const mixedArray = [1, 'hello', 2, true, 3, null, 4, 'world', 5];
const average = averageOfNumbers(mixedArray);
console.log(average); 
