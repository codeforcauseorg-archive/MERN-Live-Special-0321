"use strict";
var Earth = /** @class */ (function () {
    function Earth() {
        var _this = this;
        this.people = [];
        this.addHuman = function (human) {
            _this.people.push(human);
        };
        this.getPeople = function () {
            return _this.people;
        };
    }
    Earth.instance = null;
    Earth.getInstance = function () {
        if (Earth.instance) {
            return Earth.instance;
        }
        Earth.instance = new Earth();
        return Earth.instance;
    };
    return Earth;
}());
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
        Earth.getInstance().addHuman(this);
    }
    return Human;
}());
var anuj = new Human("Anuj Garg");
var vasu = new Human("Vasudev");
console.log(Earth.getInstance().getPeople());
