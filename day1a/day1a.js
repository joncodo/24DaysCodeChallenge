module.exports = {
  getList: function getList(input) {
    var array = input.split(',');

    var objArray = [];

    array.forEach(function (element) {

      objArray.push({
        direction: element.trim().charAt(0),
        distance: parseInt(element.trim().substr(1, 4))
      })
    })

    return objArray;
  },

  getDistance: function getDistance(list) {
    var length, totalLengthX = 0,
      totalLengthY = 0,
      compass = 'north',
      left = false;

    list.forEach(function(instruction) {
      var left = instruction.direction == 'L';
      var distance = instruction.distance;


      if (compass === 'north'){
        if(left) {
          compass = 'west'
          totalLengthX -= distance;
        } else {
          compass = 'east'
          totalLengthX += distance;
        }
      } else if(compass === 'east') {
        if(left) {
          compass = 'north'
          totalLengthY += distance;

        } else {
          compass = 'south'
          totalLengthY -= distance;
        }
      } else if(compass === 'south') {
        if(left) {
          compass = 'east'
          totalLengthX += distance;

        } else {
          compass = 'west'
          totalLengthX -= distance;
        }
      } else if(compass === 'west') {
        if(left) {
          compass = 'south'
          totalLengthY -= distance;
        } else {
          compass = 'north'
          totalLengthY += distance;
        }
      }
    });

    return Math.abs(totalLengthX) + Math.abs(totalLengthY);
  }
}
