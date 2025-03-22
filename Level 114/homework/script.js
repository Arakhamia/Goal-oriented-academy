// ფერის შეცვლა:
// HTML-ში შექმენით ღილაკი და div ელემენტი.
// JavaScript-ში, ღილაკზე დაჭერისას, div ელემენტის ფონი შემთხვევით  ფერზე შეცვალეთ.

document.body.innerHTML = `
    <button id="changeColor">Change Color</button>
    <div id="colorDiv"></div>
`;

const changeColorButton = document.getElementById('changeColor');
const colorDiv = document.getElementById('colorDiv');

changeColorButton.addEventListener('click', () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    colorDiv.style.backgroundColor = `#${randomColor}`;
});