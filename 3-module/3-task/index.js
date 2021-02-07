/**
 * @param {string} str
 * @returns {string}
 */


//
// Does it make sense to use arrays to solve current task? It is string and we can resolve this task without unnecessary conversation to arrays and back.
//

function camelize(str) {
  if (typeof str !== 'string') return "String for modification wasn't defined";
  
  let convertedStr = "";
  for (let i = 0; i < str.length; i++) {
    str[i] === "-" ? convertedStr += str[++i].toUpperCase()  : convertedStr += str[i];
 }
  
  return convertedStr;
}



// Second version

function camelize1(str) {
  str = str.split('-');
  str = str.map(
      function(word, index) { 
          return index == 0 ? word : word[0].toUpperCase() + word.slice(1);
        
        }
    )

  return str.join('');
}

