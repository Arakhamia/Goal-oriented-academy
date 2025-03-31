// შექმენით ვებ-გვერდი, რომელიც გადაიყვანს ტემპერატურას ცელსიუსიდან ფარენჰეიტში და პირიქით.
// შექმენით input ველი ტემპერატურის შესაყვანად.
// შექმენით ღილაკი "გადაყვანა".
// შექმენით div ელემენტი, სადაც გამოჩნდება შედეგი.

// JavaScript ფუნქციონალი:

  
// ღილაკზე დაჭერისას, წაიკითხეთ ტემპერატურა input ველიდან და ერთეული input ველიდან.
// შექმენით ფუნქცია, რომელიც გადაიყვანს ტემპერატურას არჩეული ერთეულის მიხედვით.
// ცელსიუსიდან ფარენჰეიტში გადასაყვანად გამოიყენეთ ფორმულა: F = (C * 9/5) + 32.
// ფარენჰეიტიდან ცელსიუსში გადასაყვანად გამოიყენეთ ფორმულა: C = (F - 32) * 5/9.





const convertButton = document.getElementById('convertButton');
const temperatureInput = document.getElementById('temperatureInput');

const unitSelect = document.getElementById('unitSelect');
const resultDiv = document.getElementById('resultDiv');

temperatureInput = (C * 9/5) + 32.