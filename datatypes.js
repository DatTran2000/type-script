"use strict";
let lname;
let myNum;
let isValid = false;
let stringList;
let numberList;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
let c = Color.Blue;
lname = "Cong Dat";
myNum = parseInt("20");
isValid = true;
stringList = ["1", "2", "3"];
numberList = [1, 2, 3, 4, 4];
let result = numberList.filter((num) => num > 2);
function add(num1, num2) {
    return num2 ? num1 + num2 : num1;
}
function getItem(item) {
    return item;
}
