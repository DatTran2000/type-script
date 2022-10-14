"use strict";
class Employee {
    constructor(id, name, add) {
        this.id = id;
        this.name = name;
        this.add = add;
    }
    getInfo() {
        return this.name + " " + this.add;
    }
}
class Manager extends Employee {
    constructor(id, name, add) {
        super(id, name, add);
    }
    getInfo() {
        return `${this.name} stays at ${this.add}`;
    }
}
let john = new Employee(1, "Cong Dat", "19 nguyen huu tho");
let moo = new Manager(2, "Noo", "290 NKKN");
console.log(moo.getInfo());
