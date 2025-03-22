// შექმენით ვებსაიტი, სადაც იქნება შემოტანილი 3 ელემენტი. 2 ელემენტი უნდა იყოს ღილაკი, ხოლო ერთი ელემენტი უნდა იყვეს დივი. პირველმა ღილაკმა უნდა გაზარდოს დივის ზომა, ხოლო მეორე ღილაკმა უნდა შეამციროს დივის ზომა.  - ამ ღილაკებს ზემოდან დააწერეთ დასახელება თუ რას აკეთებს. - გამოიყენეთ classList თვისება და მისი მეთოდები.

document.body.innerHTML = `
    <button id="increase">Increase Size</button>
    <button id="decrease">Decrease Size</button>
    <div id="resizable" class="box"></div>
`;

const resizableDiv = document.getElementById('resizable');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');

resizableDiv.classList.add('box');

increaseButton.addEventListener('click', () => {
    resizableDiv.style.width = (resizableDiv.offsetWidth + 20) + 'px';
    resizableDiv.style.height = (resizableDiv.offsetHeight + 20) + 'px';
});

decreaseButton.addEventListener('click', () => {
    resizableDiv.style.width = Math.max(resizableDiv.offsetWidth - 20, 20) + 'px';
    resizableDiv.style.height = Math.max(resizableDiv.offsetHeight - 20, 20) + 'px';
});

const style = document.createElement('style');
style.textContent = `
    .box {
        width: 100px;
        height: 100px;
        background-color: lightblue;
        margin-top: 20px;
    }
    button {
        margin-right: 10px;
    }
`;
document.head.appendChild(style);