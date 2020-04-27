class Animal {
  private _name: string;
  private _age: number;
  private _weight: number;
  private _type: string;
  private _hasTail: boolean;

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  get age(): number {
    return this._age;
  }
  set age(value: number) {
    this._age = value;
  }

  get weight(): number {
    return this._weight;
  }
  set weight(value: number) {
    this._weight = value;
  }

  get type(): string {
    return this._type;
  }
  set type(value: string) {
    this._type = value;
  }

  get hasTail(): boolean {
    return this._hasTail;
  }
  set hasTail(value: boolean) {
    this._hasTail = value;
  }

  speak(sound: string) {
    console.log(sound);
  }

  details() {
    console.log(this._name);
    console.log(this._age);
    console.log(this._weight);
    console.log(this._type);
    console.log(this._hasTail);
  }
}

class Dog extends Animal {
  constructor(_name, _age, _weight, _type, _hasTail) {
    super();
    this.name = _name;
    this.age = _age;
    this.weight = _weight;
    this.type = _type;
    this.hasTail = _hasTail;
  }
}

class Cat extends Animal {
  constructor(_name, _age, _weight, _type, _hasTail) {
    super();
    this.name = _name;
    this.age = _age;
    this.weight = _weight;
    this.type = _type;
    this.hasTail = _hasTail;
  }
}

var dog = new Dog("Zue", 2, 12, "domestic", true);
dog.speak("Bark!!!");
dog.details();
var cat = new Cat("Pri", 3, 4, "domestic", true);
cat.speak("Meo!!");
cat.details();
