const removeFromArray = function (array, ...args) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!args.includes(array[i])) {
      //includes() is a method of the Array object that returns a boolean value indicating whether the array contains the specified element. "!" is for negate the boolean value, if its true with the ! it becomes false.

      newArray.push(array[i]); //push() is a method of the Array object that adds one or more elements to the end of an array and                                 returns the new length of the array.
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
