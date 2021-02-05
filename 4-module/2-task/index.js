/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].children[i].style.backgroundColor = 'red';
    }
}

let table = document.body.firstElementChild;
