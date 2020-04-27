class Employes {
  name: string;
  age: number;
  nic: number | string;
  constructor(_name, _age, _nic) {
    this.name = _name;
    this.age = _age;
    this.nic = _nic;
  }
  show = () => {
    console.log(this.name);
    console.log(this.age);
    console.log(this.nic);
  };
}

var emp1: any;
var emp2: any;
emp1 = new Employes("Kumara", 25, "12235679v");
emp2 = new Employes("Supun", 24, 1223567923);
emp1.show();
emp2.show();

var emp3: [string, number, number | string] = ["Kumara", 25, "12235679v"];
var emp4: [string, number, number | string] = ["Kumara", 25, "12235679v"];
