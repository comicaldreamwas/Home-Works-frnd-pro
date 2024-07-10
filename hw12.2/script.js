document.addEventListener('DOMContentLoaded', function(){
   const buttons = document.getElementById('section');

   buttons.addEventListener('click', function(event){
      if(event.target.tagName === 'BUTTON');
      const buttonName = event.target.getAttribute('data-button')
      alert(`You clicked on ${buttonName}`)
   });
});