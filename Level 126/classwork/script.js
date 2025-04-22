// შექმენით ორი ობიექტი, პირველი უნდა იყვეს ძველი ტიპის ობიექტი, ხოლო მეორე უნდა იყვეს გაუმჯობესებული ტიპის ობიექტი. გაუმჯობესებული ტიპის ობიექტის ქვემოთ კომენტარების სახით დაწერეთ თუ კონკრეტულად რა გაუმჯობესდა,

let oldObject = {
    name: "John",
    lastname: "Marston",
    greet: function() {
        console.log(`Hello ${this.name} ${this.lastname}`);
    }
};

let name = "John"
let lastname = "Marston"


let newObject = {
    [name]: "Jack",
    lastname,
    greet() {
        console.log(`Hello ${this.name} ${this.lastname}`);
    }
};

// 1. შეიქმნა ცვლადი, შეგვიძლია ასევე ამ ცვლადის მნიშვნელობა გადავწეროთ, ანუ სხვა მნისვნელობა მივცეთ [] ფრჩხილების გამოყენებით ან პირდაპის შევქმნათ ცვლადი.
// 2. შევქმნათ ფუნქცია, რომელიც არ საჭიროებს function-ს.