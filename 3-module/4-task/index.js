/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age, result = "") {
  users.forEach((item) => (item.age <= age) && (result +=`\n${item.name}, ${item.balance}`));
  return result.slice(1); 
}
