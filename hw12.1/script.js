document.addEventListener("DOMContentLoaded", function(){
   let link = '';
   
   document.getElementById("link").addEventListener('click', function(){
      link = prompt('Please enter your link') ;
      if(link){
         if(!link.startsWith('http://') && !link.startsWith('https://')){
            link = 'http://' + link;
         }else{
            alert(`Link set to ${link}`);
         }
      }else{
         alert('No link added');
      }
   });
   document.getElementById("GotoLink").addEventListener("click", function(){
      if (link) {
         window.location.href = link;
     } else {
         alert('No link has been set. Please enter a link first.');
     }
 
   });
})