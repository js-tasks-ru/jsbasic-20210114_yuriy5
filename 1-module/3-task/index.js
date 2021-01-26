/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  return str != "" ? `${str[0].toLocaleUpperCase()}${str.slice(1)}` : str;
}
  