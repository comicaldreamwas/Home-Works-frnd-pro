document.addEventListener('DOMContentLoaded', function(){
   const textElement = document.getElementById("changeColorText");
   const button = document.getElementById("changeColorBtn");
   let orgColor = true;

   button.addEventListener("click",function(){
      if(orgColor){
         textElement.style.color = "green";
      }else{
         textElement.style.color = "";
      }
   orgColor = !orgColor;
   })
})