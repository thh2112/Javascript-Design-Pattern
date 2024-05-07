/**
 * Builder Pattern use to create complex object from simple field
 * The detail is hidden from client
 */

class House {
    constructor() {
        this.floor = null;
        this.door = null;
        this.room = null;
    }
}

class HouseBuilder {
    constructor() {
        this.house = new House();
    }

    buildFloor(floor) {
        this.house.floor = floor;
        return this;
    }

    buildDoor(door) {
        this.house.door = door;
        return this;
    }

    buildRoom(room) { 
        this.house.room = room;
        return this;
    }

    build() {
        return this.house;
    }
}

module.exports = HouseBuilder;