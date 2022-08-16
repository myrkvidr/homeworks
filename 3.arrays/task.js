function compareArrays(arr1, arr2) {
  let result; 
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    result = (arr1.every((val, index) => val === arr2[index]));
  }
  return result;
}


function advancedFilter(arr) {
  let resultArr = arr.filter((num) => num >= 0).filter((num) => num % 3 === 0).map((num) => num * 10);
  return resultArr; // array
}



