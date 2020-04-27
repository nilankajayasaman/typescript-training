var Employes = /** @class */ (function () {
    function Employes(_name, _age, _nic) {
        var _this = this;
        this.show = function () {
            console.log(_this.name);
            console.log(_this.age);
            console.log(_this.nic);
        };
        this.name = _name;
        this.age = _age;
        this.nic = _nic;
    }
    return Employes;
}());
var emp1;
var emp2;
emp1 = new Employes("Kumara", 25, "12235679v");
emp2 = new Employes("Supun", 24, 1223567923);
emp1.show();
emp2.show();
var emp3 = ["Kumara", 25, "12235679v"];
var emp4 = ["Kumara", 25, "12235679v"];
