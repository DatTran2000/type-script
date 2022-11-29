var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(id, name, add) {
        this.id = id;
        this.name = name;
        this.add = add;
    }
    Employee.prototype.getInfo = function () {
        return this.name + " " + this.add;
    };
    Employee.getId = function () {
        return 20;
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, name, add) {
        return _super.call(this, id, name, add) || this;
    }
    Manager.prototype.getInfo = function () {
        return "".concat(this.name, " stays at ").concat(this.add);
    };
    return Manager;
}(Employee));
var john = new Employee(1, "Cong Dat", "19 nguyen huu tho");
var moo = new Manager(2, "Noo", "290 NKKN");
console.log();
