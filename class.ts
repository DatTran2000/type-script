class Employee {
    id : number;
    name : string;
    add :string;

    constructor(id: number, name: string, add: string) {
        this.id = id;
        this.name = name;
        this.add = add;
    }
    getInfo(): string {
        return this.name +" "+ this.add;
    }
    static getId() : number {
        return 20;
    }
}

class Manager extends Employee {
    constructor(id: number, name: string, add: string) {
        super(id, name, add);
    }
    getInfo(): string {
        return `${this.name} stays at ${this.add}`;
    }
}


let john = new Employee(1, "Cong Dat", "19 nguyen huu tho");
let moo = new Manager(2,"Noo","290 NKKN")

console.log();


