// მარტივი ჩაშენებული ელემენტები
// შექმენით HTML ფაილი, რომელშიც გექნებათ შემდეგი სტრუქტურა:
// <div> ელემენტი, რომელსაც ექნება id="outer"
// ამ <div>-ში ჩადეთ კიდევ ერთი <div> ელემენტი, რომელსაც ექნება id="inner"
// ამ <div>-ში ჩადეთ button ელემენტი, რომელსაც ექნება id="button"

 
// დაამატეთ click event listener სამივე ელემენტს (outer, inner, button).
// თითოეულ event listener-ში კონსოლში გამოიტანეთ შესაბამისი ელემენტის id და ტექსტი "clicked".
// დააწკაპუნეთ ღილაკზე და დააკვირდით, რა თანმიმდევრობით იბეჭდება კონსოლში ინფორმაცია.
// ახსენით, რატომ ხდება ეს თანმიმდევრობა და რა როლს თამაშობს event propagation.


const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const button = document.getElementById('button');


outer.addEventListener('click', function() {
    console.log('Outer clicked');
});
inner.addEventListener('click', function() {
    console.log('Inner clicked');
});

button.addEventListener('click', function() {
    console.log('Button clicked');
});