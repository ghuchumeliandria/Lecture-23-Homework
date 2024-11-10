// 1. ჯამი: შექმენი ფუნქცია, რომელიც მასივის რიცხვების ჯამს გამოთვლის reduce-ის გამოყენებით.
let numbers = [3, 432, 2, 5, 6, 3, 4, 5];

let sum = numbers.reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(sum);

// 2. უმაღლესი რიცხვი: დაწერე ფუნქცია, რომელიც მასივში ყველაზე მაღალ რიცხვს პოულობს reduce-ის გამოყენებით.

let numMax = [1, 34, 2, 222, 5, 9, 555];
let numMax2 = numMax.reduce((acc, cur) => {
  if (acc < cur) {
    acc = cur;
  }
  return acc;
}, 0);
console.log(numMax2);

// 4. სტრიქონების გაერთიანება: დაწერე ფუნქცია, რომელიც მასივში არსებული სტრიქონების გაერთიანებას ახდენს ერთ სტრიქონად.

let strings = ["salami,", "me", "var", "andria"];

console.log(strings.join(" "));

// 5. რიცხვების გამრავლება: შექმენი ფუნქცია, რომელიც მასივში არსებული რიცხვების გამრავლებას ახდენს reduce-ის მეშვეობით.

let multiply = [3, 12, 4532, 523];

let multiplyNumbers = multiply.reduce((acc, cur) => {
  return acc * cur;
}, 1);
console.log(multiplyNumbers);

// 7. რიცხვების სხვაობა: დაწერე ფუნქცია, რომელიც მასივში არსებული რიცხვების სხვაობას გამოთვლის reduce-ის გამოყენებით.
let nums = [1, 3, 4, 2, 3, 5, 6];
let substraction = nums.reduce((acc, cur) => {
  return acc - cur;
}, 0);
console.log(substraction);
// 8. ორმაგი მნიშვნელობები: შექმენი ფუნქცია, რომელიც მასივის თითოეულ რიცხვს გაამრავლებს ორით map-ის გამოყენებით.
console.log("Exam 8");
let num2 = [3, 2, 3, 5, 2, 3, 4, 2, 3];
let multiplyMap = num2.map((num) => {
  console.log(num * 2);
});
console.log("");

// 9. სტრიქონების შეცვლა: გქონდეს სტრიქონების მასივი. დაწერე ფუნქცია, რომელიც თითოეულ სტრიქონს პატარა ასოებით გადააქცევს map-ის გამოყენებით.

let strng = ["Re:Invent", "Re:Educate", "Re:Soft", "Re:School"];
let strngLower = strng.map((lower) => {
  return lower.toLowerCase();
});
console.log(strngLower.toString());

// 11. DOM მანიპულაცია: შექმენი HTML ელემენტების მასივი. map-ის გამოყენებით თითოეულ ელემენტზე დამატებული ტექსტი ჩაწერე.

const p = document.getElementById("p");
const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");
const btn = document.getElementById("button");

let domArray = [p, h1, h2, btn];

let pushHtml = domArray.map((text) => {
  text.textContent = "Ravi esaa DOM is pirveli davaleba, imedia sworad gavige";
});

// 12. რიცხვების კვადრატები: დაწერე ფუნქცია, რომელიც მასივში არსებულ თითოეულ რიცხვს კვადრატში გაამრავლებს map-ის გამოყენებით.

let num3 = [1, 4, 2, 5, 3, 4];
let ravi = num3.map((num) => {
  console.log(num * num);
});

// 13. DOM ელემენტების აღება: დაწერე ფუნქცია, რომელიც forEach-ის გამოყენებით თითოეულ HTML ელემენტს ტექსტს მიუმატებს.

const p2 = document.getElementById("p2");
const h4 = document.getElementById("h4");
const h5 = document.getElementById("h5");
const btn2 = document.getElementById("button2");

let domArray2 = [p2, h4, h5, btn2];
domArray2.forEach((index) => {
  index.textContent = "Reali mougebs barselonas meore Tamashs ;)";
});

// 14. ქულების ზრდა: გქონდეს სტუდენტების მასივი, სადაც თითოეულ სტუდენტს აქვს ქულა. forEach-ის მეშვეობით თითოეულ ქულას დაუმატე 5 ქულა.
let students = [
  {
    student: "Andria",
    score: 10,
  },
  {
    student: "Andria2",
    score: 10,
  },
  {
    student: "Vaxo",
    score: 9,
  },
  {
    student: "Niki",
    score: 8,
  },
];

students.forEach((object) => {
  object.score += 5;
});

console.log(students);
// 16. რიცხვების შებრუნება: დაწერე ფუნქცია, რომელიც for ციკლის გამოყენებით შებრუნებულ რიგითობით დააბრუნებს მასივს.
let array4 = [1, 4, 3, 5, 7, 2];

let newArray2 = [];
function newArray(num) {
  for (i = num.length - 1; i >= 0; i--) {
    // მასივში undefiend ამატებდა პირველ ელემენტად და ჯამში
    // 7 ელემენტი გამოდიოდა და რატო? მაგიტომ გამოვაკელი 1
    newArray2.push(num[i]);
  }
  return newArray2;
}

let callArray = newArray(array4);
console.log(callArray);

// 17. DOM-ის შექმნა: შექმენი HTML დივ ელემენტები მასივიდან და ჩასვი ისინი გვერდზე for-ის გამოყენებით.
let array8 = ["andria", "nika", "asd", "adsa", ""];
for (i = 0; i < array8.length; i++) {
  let div = document.createElement("div");
  div.textContent = array8[i];
  document.body.appendChild(div);
}
// 18. ცხრილის გამოტანა: გქონდეს რიცხვების მასივი, for-ის გამოყენებით გამოიტანე თითოეული რიცხვის განმრავლების ცხრილი.

let numbers2 = [1, 3, 5, 2, 6, 7];

for (i = 1; i < numbers2.length; i++) {
  for (j = 1; j <=10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// 19. რიცხვების ფილტრაცია: დაწერე ფუნქცია, რომელიც filter-ის გამოყენებით დააბრუნებს მხოლოდ იმ რიცხვებს, რომლებიც 10-ზე მეტია.

let array5 = [3,4,52,6,2,22,33,51,3,32]

let array6 = array5.filter((num) =>{
  return num > 10
})
console.log(array6)

// 20. DOM ელემენტების ფილტრაცია: გქონდეს HTML ელემენტების მასივი. filter-ის გამოყენებით დააბრუნე მხოლოდ ის ელემენტები, რომელთაც აქვთ კონკრეტული CSS კლასი.

let h3 = document.getElementById('heading')
let btn3 = document.getElementById('btnw')
let div2 = document.getElementById('box')
let a = document.getElementById("link")
let pa = document.getElementById("paragraph")

let classAray = [h3,btn3,div2,a,pa]

let array9 = classAray.filter((index)=>{
  return index.classList.contains("box")
})

console.log(array9)