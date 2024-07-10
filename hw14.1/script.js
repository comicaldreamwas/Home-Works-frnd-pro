document.addEventListener("DOMContentLoaded", function() {
    const imageArray = [
        'logo.png',  '2222 1.svg', 'bisicel.svg','cake.svg','daim.svg','iot.svg','lang.svg'
    ];

    let currentIndex = 0;
    const sliderImage = document.getElementById('slider-image');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const dotsContainer = document.querySelector('.dots-container');

    function createDots() {
        imageArray.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === currentIndex) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
    }

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function updateButtons() {
        prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
        nextButton.style.display = currentIndex === imageArray.length - 1 ? 'none' : 'block';
    }

    function goToSlide(index) {
        currentIndex = index;
        sliderImage.src = `./img/${imageArray[currentIndex]}`;
        updateDots();
        updateButtons();
    }

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            goToSlide(currentIndex - 1);
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentIndex < imageArray.length - 1) {
            goToSlide(currentIndex + 1);
        }
    });

    createDots();
    updateButtons();
    sliderImage.src = `./img/${imageArray[currentIndex]}`;
});
