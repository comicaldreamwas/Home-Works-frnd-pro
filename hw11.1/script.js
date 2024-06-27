document.addEventListener("DOMContentLoaded", function() {
  
   let table = document.getElementById("pythagoras-table");

   
   for (let i = 1; i <= 10; i++) {
       let row = document.createElement("tr");

       
       for (let j = 1; j <= 10; j++) {
           let cell = document.createElement(i === 1 || j === 1 ? "th" : "td");
           cell.textContent = i * j;
           row.appendChild(cell);
       }

       
       table.appendChild(row);
   }
});
