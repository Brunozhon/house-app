function createHouseJSON() {
  return ({
    "floors": [
      {
        "name": "First floor",
        "rooms": [
          {
            "name": "Room 1",
            "size": {"x": 100, "y": 100}
          }
        ]
      }
    ]
  });
}
function getFloors(house) {
  return house.floors;
}
function getRooms(floorLevel, house) {
  return getFloors(house)[floorLevel - 1].rooms
}
var house = createHouseJSON();
