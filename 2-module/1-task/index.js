/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */

function sumSalary(salaries) {
  let totalsalaries = 0;
  for(let key in salaries) {

    if(typeof salaries[key] === 'number' && isFinite(salaries[key])){  
      totalsalaries += salaries[key];      
    }
  }   
   return totalsalaries;    
}
