    // class for Vehicle
    class Vehicle {
    constructor(name, company, id) {
    this.name = name;
    this.company = company;
    this.id = id;
    }
    }
    // class for Airplane extends Vehicle
    class Airplane extends Vehicle {
    constructor(name, company, id, type) {
    super(name, company, id);
    this.type = type;
    }
    }
    // class for Car extends Vehicle
    class Car extends Vehicle {
    constructor(name, company, id, type) {
    super(name, company, id);
    this.type = type;
    }
    }
   // class for Employee
    class Employee {
    constructor(name, id, birth) {
    this.name = name;
    this.id = id;
    this.birth = birth;
    }
    }
     // class for Driver extends Employee
    class Driver extends Employee {
    constructor(name, id, birth, licenseId) {
    super(name, id, birth);
    this.licenseId = licenseId;
    }
    }
    // class for Pilot extends Employee
    class Pilot extends Employee {
    constructor(name, id, birth, licenseId) {
    super(name, id, birth);
    this.licenseId = licenseId;
    }
    }
     // class for Reservation
    class Reservation {
    constructor(reservationDate, employeeId, vehiclesId, reservationID) {
    this.reservationDate = reservationDate;
    this.employeeId = employeeId;
    this.vehiclesId = vehiclesId;
    this.reservationID = reservationID;
    }
    }
    
    // add 3 cars and 2 airplane 
    const car0 = new Car("tesla02", "tesla", 0, "electric");
    const car1 = new Car("tures", "ford", 1, "gas");
    const car2 = new Car("elentra", "honday", 2, "gas");
    const air0 = new Airplane("boing 727", "boing", 3, "passenger");
    const air1 = new Airplane("boing 350", "boing", 4, "delivery");
    
    
    
    // makeReservation to check if employee driver or pilot and vehicle 
    function makeReservation(employeeId, vehicleId) {
    const employee = employees.find((emp) => emp.id === employeeId);
    const vehicle = vehicles.find((veh) => veh.id === vehicleId);
    
    if (!(employee instanceof Pilot && vehicle instanceof Airplane)) {
        console.log("Invalid reservation!");
      } else {
        const reservation = new Reservation(
          new Date(),
          employee.id,
          vehicle.id,
          reservations.length + 1
        );
        reserved.push(reservation);
        reservations.push(reservation);
        console.log("Reservation made successfully!");
      }
    }
    const reservations = [];
    const reserved = [];
    const employees = [
        new Pilot("Ali", 1, "01/01/2000", "21313"),
        new Driver("Ahmed", 2,"01/01/2001" , "12e122"),
        new Driver("aziz", 3, "03/03/1995", "124124"),
        ];
        
        const vehicles = [car0, car1, car2, air0, air1];
        
        
        makeReservation(2, 4); 
        makeReservation(1, 4);
