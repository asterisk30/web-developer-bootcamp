/* printReverse is a function which takes in an array and print them out in the reversed order */
function printReverse(arr) {
  var index = arr.length - 1;
  for (var i = index; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverse([1, 2, 3]);
printReverse(['a', 'b', 'c']);

/* isUniform is a function which takes in an array and return true if all elements are the same, false if they are not all the same */
function isUniform(arr) {
  var compare = arr[0];
  var result = true;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== compare) {
      result = false;
    }
  }
  return result;
}

isUniform([1]);
isUniform([1, 1, 1]);
isUniform([1, 2, 3]);

/* sumArray is a function which takes in an array and sum up all the elements and return the sum  */
function sumArray(arr) {
  var sum = arr[0];
  for (var i = 1; i <arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i];
    } else {
      alert('Please input array with numbers.')
    }
  }
  return sum;
}

sumArray([1, 2, 3, 9, 10]);

/* max is a function which takes in an array and returns the largest number of the array */
function max(arr) {
  var big = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > big) {
      big = arr[i];
    }
  }
  return big;
}

max([1]);
max([1, 2, 3]);