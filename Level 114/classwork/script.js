// html ში შექმენით სამი ელემენტი, button, h1, input. თქვეი დავალებაა js ში შექმნათ პროგრამა, რომელიც input ში შეტანილ მნიშვნელობა მიანიჭებს h1 ს და შემდეგ ვებსაიტზე გამოვა კონტენტი, გამოიყენეთ button ელემენტი, იმისთვის, რომ input ში შეტანილი მნიშვნელობა მიანიჭოთ h1  - ს.
// დრო: 15წთ

document.body.innerHTML = `
    <button id="submit">Submit</button>
    <h1 id="title"></h1>
    <input id="input" type="text">
`; 

const submitButton = document.getElementById('submit');
const title = document.getElementById('title');
const input = document.getElementById('input');

submitButton.addEventListener('click', () => {
    title.textContent = input.value;
});
