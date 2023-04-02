"use strict";
class Vehicle {
    constructor(make, model, year, rented) {
        this._make = make;
        this._model = model;
        this._year = year;
        this._rented = rented;
    }
    get make() {
        return this._make;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get rented() {
        return this._rented;
    }
    set rented(rented) {
        this._rented = rented;
    }
    rent() {
        if (this._rented) {
            console.log("This vehicle is already rented.");
        }
        else {
            this._rented = true;
            console.log("This vehicle is now rented.");
        }
    }
    return() {
        if (this._rented) {
            this._rented = false;
            console.log("Thank you for returning this vehicle.");
        }
        else {
            console.log("This vehicle was not rented.");
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, rented, numDoors) {
        super(make, model, year, rented);
        this._numDoors = numDoors;
    }
    rentalRate() {
        return 50;
    }
    get numDoors() {
        return this._numDoors;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, rented, cargoCapacity) {
        super(make, model, year, rented);
        this._cargoCapacity = cargoCapacity;
    }
    rentalRate() {
        return 75;
    }
    get cargoCapacity() {
        return this._cargoCapacity;
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, year, rented, engineSize) {
        super(make, model, year, rented);
        this._engineSize = engineSize;
    }
    rentalRate() {
        return 30;
    }
    get engineSize() {
        return this._engineSize;
    }
}
const car = new Car("Honda", "Civic", 2020, false, 4);
const truck = new Truck("Ford", "F-150", 2018, true, 50);
const motorcycle = new Motorcycle("Honda", "CD", 2019, false, 600);
car.rent();
car.rent();
car.return();
car.return();
truck.rent();
truck.return();
motorcycle.rent();
console.log(motorcycle.rentalRate());
//# sourceMappingURL=index.js.map