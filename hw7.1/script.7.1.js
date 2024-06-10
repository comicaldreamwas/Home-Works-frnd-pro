function creatSum (){
   let originalNum = 0;
   return function (num){
originalNum += num;
return originalNum;
   }
}
const newSum = creatSum();

console.log(newSum(4)); 
console.log(newSum(8)); 
console.log(newSum(20)); 
console.log(newSum(5)); 