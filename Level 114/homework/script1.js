// სურათის შეცვლა:
// HTML-ში შექმენით სურათი და ღილაკი.
// JavaScript-ში, ღილაკზე დაჭერისას, სურათის src ატრიბუტი შეცვალეთ სხვა სურათის URL-ით. (შექმენით ორი სურათი, რომელსაც გამოიყენებთ)


document.body.innerHTML = `
    <button id="changeImage">Change Image</button>
    <img id="image" src="https://image1" alt="placeholder image">
`;

const changeImageButton = document.getElementById('changeImage');
const image = document.getElementById('image');

changeImageButton.addEventListener('click', () => {
    image.src = 'https://image2';
});