/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    for (let i = 0; i < table.rows.length; i++) {
        checkAvailability(table.rows[i].cells[3], table.rows[i]);
        checkSex(table.rows[i].cells[2], table.rows[i]);
        checkMinor(table.rows[i].cells[1], table.rows[i]);
    }
}

function checkAvailability(item, row) {
    if(item.getAttribute("data-available") === "true") setClass(row, "available");
    else if(item.hasAttribute("data-available")) setClass(row, "unavailable");
    else setAtr(row, "hidden", "");
}

function checkSex(item, row) {
    if(item.innerHTML == "m") setClass(row, "male");
    else if(item.innerHTML == "f") setClass(row, "female"); 
}

function checkMinor(item, row) {+item.innerHTML < 18 ? setAtr(row, "style", "text-decoration: line-through;") : "";}
function setAtr(item, atr, value ="") {item.setAttribute(atr, value)}
function setClass(item, value) {item.classList.add(value)}
