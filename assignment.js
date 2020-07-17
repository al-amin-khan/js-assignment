// Feet to Mile
function feetToMile(feet) {
  if (feet < 0) {
    return "Feet can't be negative!"
  } else if (isNaN(feet)) {
    return "input number value only!"
  } else {
    return result = feet / 5280;
  }

}


// Wood Calucator
function woodCalculator(chair, table, bed) {
  if (chair < 0 || table < 0 || bed < 0) {
    return 'The is no such table, chair or bed in negative value!!!'
  } else if (isNaN(chair) || isNaN(table) || isNaN(bed)) {
    return "Invalid input!!!"
  } else if (parseInt(chair + table + bed) != parseFloat(chair + table + bed)) {
    return "Are you kidding!!! There is no chair, table or bed in partial form. ";
  } else {
    var estimateOfChair = chair * 1;
    var estimateOfTable = table * 3;
    var estimateOfBed = bed * 5;

    return requireWood = estimateOfChair + estimateOfTable + estimateOfBed;
  }

}

// Brick calculator
function brickCalculator(floorNumber) {
  if (isNaN(floorNumber)) {
    return "Invalid input!!!"
  } else if (floorNumber < 0) {
    return "Floor cant be a negative value!!!"
  } else {
    var brickPer1FeetHeight = 1000;
    if (floorNumber >= 1 && floorNumber <= 10) {
      var requiredBrick = floorNumber * brickPer1FeetHeight * 15;
      return requiredBrick;
    } else if (floorNumber >= 11 && floorNumber <= 20) {
      var overTenFloor = floorNumber - 10;
      var requiredBrick = (10 * brickPer1FeetHeight * 15) + (overTenFloor * brickPer1FeetHeight * 12)
      return requiredBrick;
    } else if (floorNumber >= 21) {
      var overTwentyFloor = floorNumber - 20;
      var requiredBrick = (10 * brickPer1FeetHeight * 15) + (10 * brickPer1FeetHeight * 12) + (overTwentyFloor * brickPer1FeetHeight * 10);
      return requiredBrick;
    }
  }
}


// TinyFriend
function tinyFriend(nameList) {
  var smallestName = nameList[0];
  for (var i = 0; i < nameList.length; i++) {
    var name = nameList[i]
    if (smallestName.length > name.length) {
      smallestName = name;
    }
  }
  return smallestName;
}
