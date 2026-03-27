// * Objects :

// 1.singleton

// * Object Literals

// Object.create

const mySym = Symbol("key1");
// const mySym= Symbol('key2')
const JsUser = {
  name: "Hitesh",
  "full name": "sejal sakhare",
  [mySym]: "myKey1",
  age: 18,
  location: "Jaipur",
  email: "sejal@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// // console.log(JsUser.fu);
// console.log(JsUser["full name"]);

console.log(JsUser.mySym);
console.log(JsUser[mySym]);

JsUser.email = "sejal@gpt.com";

console.log(JsUser);

//* freezing the object
// Object.freeze(JsUser);

JsUser.email = "sejal@gpt11.com";

console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello Js User");
};

// console.log(JsUser.greeting());

JsUser.greeting()


JsUser.greetingTwo = function () {
    console.log(`Hello Js User ${this.name} and full name ${this['full name']}`);
};

JsUser.greetingTwo()


console.log(JsUser[mySym]);


