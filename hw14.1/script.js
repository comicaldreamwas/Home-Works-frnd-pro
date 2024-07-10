document.addEventListener("DOMContentLoaded", function() {
   const imageArray = [
      'logo.png',  '2222 1.svg', 'bisicel.svg','cake.svg','daim.svg','iot.svg','lang.svg'
   ];

   let currentIndex = 0;
   const sliderImage = document.getElementById('slider-image');
   const prevButton = document.getElementById('prev');
   const nextButton = document.getElementById('next');

   prevButton.addEventListener('click', function() {
       currentIndex = (currentIndex === 0) ? imageArray.length - 1 : currentIndex - 1;
       sliderImage.src = `./img/${imageArray[currentIndex]}`;
   });

   nextButton.addEventListener('click', function() {
       currentIndex = (currentIndex === imageArray.length - 1) ? 0 : currentIndex + 1;
       sliderImage.src = `./img/${imageArray[currentIndex]}`;
   });
});
