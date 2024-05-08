/**
 * Method Factory resolve the problem of simple factory
 */

class Truck {
    constructor(name, volumes) {
        this.name = name;
        this.volumes = volumes;
    }
}

class Car {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}


class VehicleFactory {
    createVehicle(type) {
        throw new Error("This method should be implemented by subclass");
    }
}

class TruckFactory extends VehicleFactory {
  createVehicle(type) {
    if (type === 'normal') {
        return new Truck('Truck', 1000);
    }

    if (type === 'vip') {
        return new Truck("Truck VIP", 10000);
    }
  }
}

class CarFactory extends VehicleFactory {
  createVehicle(type) {
    if (type === 'normal') {
        return new Car('Car', 'red');
    }

    if (type === 'vip') {
        return new Car("Car VIP", 'red');
    }
  }
}

function TestFactory(type, membershipCard) {
    let vehicle = null;
    if (type === 0) {
        vehicle = new CarFactory();
    } else if (type === 1) {
        vehicle = new TruckFactory();
    }

    return vehicle.createVehicle(membershipCard);
}


module.exports = TestFactory;


