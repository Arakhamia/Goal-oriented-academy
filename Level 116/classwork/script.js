// შექმენით რეგისტრაციის ფორმა, რომელშიც მომხმარებელმა უნდა შეიტანოს სახელი, გვარი, ემაილი, პაროლი და დამადასტურებელი პაროლი. თქვენი დავალებაა, რომ შეამოწმოთ თითოეული ველი, ნახოთ შეიტანა თუ არა მომხმარებელმა ინფორმაცია, თუ რომელიმე ველში არ იქნება ინფორმაცია შეტანილი, მაშინ alert ის სახით უნდა გამოვიდეს გამაფრთხილებელი მესიჯი. როდესაც მომხმარებელი შეიყვანს პაროლს, აუცილებელია, რომ ორივე პაროლი ემთხვეოდეს ერთმანეთს, თუ პაროლები ერთმანეთს არ დაემთხვევა, მაშინ ვებსაიტის background ფერი უნდა გახდეს წითელი და ვებსაიტზე დაიწეროს Warning ტექსტი თეთრ ფერში.



const form = document.querySelector('form');
const nameInput = document.querySelector('#name');

const surnameInput = document.querySelector('#surname');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const warningText = document.querySelector('#warning-text');
const body = document.querySelector('body');
const warningText1 = document.createElement('div');
warningText.id = 'warning-text';
warningText.innerText = 'Warning';
warningText.style.color = 'white';
warningText.style.fontSize = '24px';
warningText.style.textAlign = 'center';
warningText.style.marginTop = '20px';
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const surname = surnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (!name || !surname || !email || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== confirmPassword) {
        body.style.backgroundColor = 'red';
        body.appendChild(warningText);
        warningText.style.display = 'block';
    } else {
        body.style.backgroundColor = '';
        warningText.style.display = 'none';
        alert('Registration successful!');
    }
});