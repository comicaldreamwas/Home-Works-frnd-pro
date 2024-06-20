let company = {
   sales: [
       {name: 'John', salary: 1000},
       {name: 'Alice', salary: 600}
   ],
   development: {
       web: [
           {name: 'Peter', salary: 2000},
           {name: 'Alex', salary: 1800}
       ],
       internals: [
           {name: 'Jack', salary: 1300}
       ]
   }
};

function getTotalSalary(department) {
   let totalSalary = 0;

   if (Array.isArray(department)) {
      
       for (let employee of department) {
           totalSalary += employee.salary;
       }
   } else {
  
       for (let subdep in department) {
           totalSalary += getTotalSalary(department[subdep]);
       }
   }

   return totalSalary;
}

console.log(getTotalSalary(company)); 
