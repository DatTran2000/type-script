let lname : string;
let myNum : number;
let isValid : boolean = false;
let stringList : string [];
let numberList : number [];

enum Color {
    Red,
    Blue,
    Green
}
let c = Color.Blue;



lname = "Cong Dat";
myNum = parseInt("20");
isValid = true;
stringList = ["1", "2", "3"];
numberList = [1,2,3,4,4];

let result = numberList.filter( (num) => num > 2 );

function add(num1 : number, num2? : number) : number {
    return num2 ? num1 + num2 : num1;
}

function getItem<type> (item : type) {
    return item
}





 