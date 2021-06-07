class Earth {
  private people: Array<Human> = [];
  private static instance: null | Earth = null;

  static getInstance = function () {
    if (Earth.instance) {
      return Earth.instance;
    }

    Earth.instance = new Earth();
    return Earth.instance;
  };

  addHuman = (human: Human) => {
    this.people.push(human);
  };

  getPeople = () => {
    return this.people;
  };
}

class Human {
  name: string;
  constructor(name: string) {
    this.name = name;
    Earth.getInstance().addHuman(this);
  }
}

let anuj = new Human("Anuj Garg");
let vasu = new Human("Vasudev");

console.log(Earth.getInstance().getPeople());
