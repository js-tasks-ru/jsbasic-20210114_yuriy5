/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(arr) {
  let ul = document.createElement('ul');
  
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');

    li.append(`${arr[i].firstName} ${arr[i].lastName}`);
    ul.append(li);
  }
    
  return ul;
}
