// Type 1
// Var, let, const
// Var is global variable(ကြိုက်တဲ့နေရာက ခေါ်သုံးလို့ရ)
// let is scope variable({}နှစ်ခုကြားရှိတာကို scope လို့ခေါ်တယ်/{}ထဲမှာပဲအလုပ်လုပ်တယ် ကျန်တဲ့ နေရာမှာ မသတ်ရောက်ဘူး)
// const is const variable(တန်ဖိုးတေဘယ်တော့မှမပြောင်းလဲသင့်/တစ်သက်မတ်ထဲဖြစ်အောင်ထားမဲ့နေရာမှာသုံး)

document.write("Hello Js");

// console.log("Hello from console");
// alert(12);

var varmessage = 'Hello World!';

if(true){
    var varmessage = 'Hello Var';
}
console.log(varmessage)

if(true){
    let letmessage = 'Hello Let'; 
    console.log(letmessage);
}

function today(){
    return new Date();
}
console.log(today());

var today = function(){
    return new Date();
}
console.log(today());

today = 'Today is not tomorrow';

console.log(today);

// Type 2
// Arrow Key Function

function myfun(){
    return 'Hello World!';
}
console.log(myfun());

const myconst = function(){
    return 'Hello Myconst!'
}
console.log(myconst());

const oneset = () => 'Hello World OneSetence'
    console.log(oneset(''));

const paramater = name => 'Hello World Paramater' . name
    console.log(paramater('JS'));

// Spread Operator
// Array နှစ်ခု ပေါင်းတာ Array ကို String ပြောင်းရင် ... ကိုသုံးပေးရတယ်
var mail = ["Mg Mg", "Aung Aung"];
var femail = ["Aye Aye", "Mya Mya"];
var people = [...mail, ...femail, "Hla Hal"];

console.log(people);

// Object နှစ်ခု ပေါင်း တာက
var users = [
    {name: "Mg Mg", age: "12"},
    {name: "Aung Aung", age: "15"},
];
var newUser = {name: "Tun Tun", age: "20"};
// users.push(newUser); (or)
users= [...users, newUser];
console.log(users);

var user = {name: "su su", age: "10"};
var adds = {address: "Yangon"};
var person = {...user, ...adds};

console.log(person);
