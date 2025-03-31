// შექმენით fruits მასივი და გადაეცით 5 მნიშვნელობა. for in ის დახმარებით გამოიტანეთ თითოეული მნიშვნელობა და მისი ინდექსი. ასევე გამოიტანეთ გაერთიანებული ტექსტი, სადაც გამოვა ტექსტი შემდეგნაირად. 'ეს არის ... მნიშვნელობა და ეს არის მისი ინდექსი ... '.

let fruits = ['apple', 'banana', 'strawberry', 'melon', 'watermelon']

for(let fruit in fruits){
    console.log(fruit)
    console.log(fruits[fruit]);
    console.log(`This is the fruit ${fruits[fruit]} and it's the index of it: ${fruit}`)
}