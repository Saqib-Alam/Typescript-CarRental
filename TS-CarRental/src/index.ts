abstract class Vehicle {
    private _make: string;
    private _model: string;
    private _year: number;
    private _rented: boolean;
  
    constructor(make: string, model: string, year: number, rented: boolean) {
      this._make = make;
      this._model = model;
      this._year = year;
      this._rented = rented;
    }
  
    get make(): string {
      return this._make;
    }
  
    get model(): string {
      return this._model;
    }
  
    get year(): number {
      return this._year;
    }
  
    get rented(): boolean {
      return this._rented;
    }
  
    set rented(rented: boolean) {
      this._rented = rented;
    }
  
    abstract rentalRate(): number;
  
    rent(): void {
      if (this._rented) {
        console.log("This vehicle is already rented.");
      } else {
        this._rented = true;
        console.log("This vehicle is now rented.");
      }
    }
  
    return(): void {
      if (this._rented) {
        this._rented = false;
        console.log("Thank you for returning this vehicle.");
      } else {
        console.log("This vehicle was not rented.");
      }
    }
  }
  
  class Car extends Vehicle {
    private _numDoors: number;
  
    constructor(make: string, model: string, year: number, rented: boolean, numDoors: number) {
      super(make, model, year, rented);
      this._numDoors = numDoors;
    }
  
    rentalRate(): number {
      return 50;
    }
  
    get numDoors(): number {
      return this._numDoors;
    }
  }
  
  class Truck extends Vehicle {
    private _cargoCapacity: number;
  
    constructor(make: string, model: string, year: number, rented: boolean, cargoCapacity: number) {
      super(make, model, year, rented);
      this._cargoCapacity = cargoCapacity;
    }
  
    rentalRate(): number {
      return 75;
    }
  
    get cargoCapacity(): number {
      return this._cargoCapacity;
    }
  }
  
  class Motorcycle extends Vehicle {
    private _engineSize: number;
  
    constructor(make: string, model: string, year: number, rented: boolean, engineSize: number) {
      super(make, model, year, rented);
      this._engineSize = engineSize;
    }
  
    rentalRate(): number {
      return 30; 
    }
  
    get engineSize(): number {
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