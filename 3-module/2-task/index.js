/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
// first version
function filterRange(arr, a, b) {
  let arr1 =[];
  arr.forEach(item => item >= a && item <= b && arr1.push(item));

  return arr1;  
}

// second version
function filterRange1(arr, a, b) {
  return arr.filter((item) => (a <= item && item <= b));
}
