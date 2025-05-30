// Implement an image slider that automatically cycles through an array of images with smooth fade transitions, includes "Next" and "Previous" navigation buttons, and displays dot indicators for each image, with the slider pausing on mouse hover.

document.body.innerHTML = `
    <div id="slider">
        <button id="prev">Prev</button>
        <button id="next">Next</button>
        <div id="dots"></div>
    </div>
`;

const slider = document.getElementById('slider');

const images = [
    'https://image1',
    'https://image2',
    'https://image3',
    'https://image4',
    'https://image5'
];

let currentImageIndex = 0;

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const dotsContainer = document.getElementById('dots');

