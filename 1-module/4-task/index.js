/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  str = str.toLocaleLowerCase();  
  
  return ( str.includes('1xbet') || str.includes('xxx') );
}
