const HouseBuilder = require('../../src/creational/buider');

test('Create house with 2 floor, 6 room, 15 door', () => {
    const builder = new HouseBuilder()
    const myHouse = builder.buildFloor(2).buildRoom(6).buildDoor(15).build();
    expect(myHouse).toEqual({floor: 2, room: 6, door: 15});
});