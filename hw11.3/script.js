document.addEventListener('DOMContentLoaded',function(){
   const images = [
     'logo.png',  '2222 1.svg', 'bisicel.svg','cake.svg','daim.svg','iot.svg','lang.svg'
   ];
   const randomImg = Math.floor(Math.random() * images.length);
   const selectedImg = images[randomImg];


   const imgElement = document.getElementById('img');
   imgElement.src =  `./img/${selectedImg}`;
   
   console.log(selectedImg);
});
