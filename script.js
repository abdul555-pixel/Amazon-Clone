document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.getElementById('nextBtn'); // Get the next button by ID
    const prevButton = document.getElementById('prevBtn'); // Get the previous button by ID

    let currentIndex = 0;
    const slidesToMove = 8; // Number of images to move at once
    const totalSlides = slides.length;
    const slideWidth = slides[0].getBoundingClientRect().width + 10; // Adjust for margin

    const moveTrack = () => {
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    const updateButtons = () => {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= totalSlides - slidesToMove;
    };

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalSlides - slidesToMove) {
            currentIndex += slidesToMove;
            if (currentIndex > totalSlides - slidesToMove) {
                currentIndex = totalSlides - slidesToMove; // Prevent overshooting
            }
            moveTrack();
            updateButtons();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= slidesToMove;
            if (currentIndex < 0) {
                currentIndex = 0; // Prevent going below zero
            }
            moveTrack();
            updateButtons();
        }
    });

    // Initial button state
    updateButtons();

    // Ensure track is responsive when window resizes
    window.addEventListener('resize', () => {
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.shop-over-2 .carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.getElementById('nextBtn2'); // Button for shop-over-2
    const prevButton = document.getElementById('prevBtn2'); // Button for shop-over-2

    let currentIndex = 0;
    const slidesToMove = 8; // Number of images to move at once
    const totalSlides = slides.length;
    const slideWidth = slides[0].getBoundingClientRect().width + 10; // Adjust for margin

    const moveTrack = () => {
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    const updateButtons = () => {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= totalSlides - slidesToMove;
    };

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalSlides - slidesToMove) {
            currentIndex += slidesToMove;
            if (currentIndex > totalSlides - slidesToMove) {
                currentIndex = totalSlides - slidesToMove; // Prevent overshooting
            }
            moveTrack();
            updateButtons();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= slidesToMove;
            if (currentIndex < 0) {
                currentIndex = 0; // Prevent going below zero
            }
            moveTrack();
            updateButtons();
        }
    });

    // Initial button state
    updateButtons();

    // Ensure track is responsive when window resizes
    window.addEventListener('resize', () => {
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.shop-over-3 .carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.getElementById('nextBtn3'); // Button for shop-over-2
    const prevButton = document.getElementById('prevBtn3'); // Button for shop-over-2

    let currentIndex = 0;
    const slidesToMove = 8; // Number of images to move at once
    const totalSlides = slides.length;
    const slideWidth = slides[0].getBoundingClientRect().width + 10; // Adjust for margin

    const moveTrack = () => {
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    const updateButtons = () => {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= totalSlides - slidesToMove;
    };

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalSlides - slidesToMove) {
            currentIndex += slidesToMove;
            if (currentIndex > totalSlides - slidesToMove) {
                currentIndex = totalSlides - slidesToMove; // Prevent overshooting
            }
            moveTrack();
            updateButtons();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= slidesToMove;
            if (currentIndex < 0) {
                currentIndex = 0; // Prevent going below zero
            }
            moveTrack();
            updateButtons();
        }
    });

    // Initial button state
    updateButtons();

    // Ensure track is responsive when window resizes
    window.addEventListener('resize', () => {
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.shop-over-4 .carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.getElementById('nextBtn4'); // Button for shop-over-2
    const prevButton = document.getElementById('prevBtn4'); // Button for shop-over-2

    let currentIndex = 0;
    const slidesToMove = 8; // Number of images to move at once
    const totalSlides = slides.length;
    const slideWidth = slides[0].getBoundingClientRect().width + 10; // Adjust for margin

    const moveTrack = () => {
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    const updateButtons = () => {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= totalSlides - slidesToMove;
    };

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalSlides - slidesToMove) {
            currentIndex += slidesToMove;
            if (currentIndex > totalSlides - slidesToMove) {
                currentIndex = totalSlides - slidesToMove; // Prevent overshooting
            }
            moveTrack();
            updateButtons();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= slidesToMove;
            if (currentIndex < 0) {
                currentIndex = 0; // Prevent going below zero
            }
            moveTrack();
            updateButtons();
        }
    });

    // Initial button state
    updateButtons();

    // Ensure track is responsive when window resizes
    window.addEventListener('resize', () => {
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.shop-over-5 .carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.getElementById('nextBtn5'); // Button for shop-over-2
    const prevButton = document.getElementById('prevBtn5'); // Button for shop-over-2

    let currentIndex = 0;
    const slidesToMove = 8; // Number of images to move at once
    const totalSlides = slides.length;
    const slideWidth = slides[0].getBoundingClientRect().width + 10; // Adjust for margin

    const moveTrack = () => {
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    const updateButtons = () => {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= totalSlides - slidesToMove;
    };

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalSlides - slidesToMove) {
            currentIndex += slidesToMove;
            if (currentIndex > totalSlides - slidesToMove) {
                currentIndex = totalSlides - slidesToMove; // Prevent overshooting
            }
            moveTrack();
            updateButtons();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= slidesToMove;
            if (currentIndex < 0) {
                currentIndex = 0; // Prevent going below zero
            }
            moveTrack();
            updateButtons();
        }
    });

    // Initial button state
    updateButtons();

    // Ensure track is responsive when window resizes
    window.addEventListener('resize', () => {
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    });
});