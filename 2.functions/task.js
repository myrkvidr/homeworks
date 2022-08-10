// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }

  avg = +(sum / arr.length).toFixed(2);
  
  return { min: min, max: max, avg: avg };
}


// Задание 2
function worker(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (x = 0; x < arrOfArr.length; x++) {
    let a = arrOfArr[x];
    if (func(a) > max) {
      max = func(a);
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;
  for (y = 0; y < arr.length; y++) {
    if (arr[y] < min) {
      min = arr[y];
    }
    if (arr[y] > max) {
      max = arr[y];
    }
  }
  let dist = Math.abs(max - min);
  return dist;
}
