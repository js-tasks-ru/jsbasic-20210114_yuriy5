/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if(n > 1){
    let result = n;

    for(i = n; i > 1;){
      result = result * --i;
    }  
  
    return result;
  } 
  
  return 1;  
}
