/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    for (let i = 0; i < table.rows.length; i++) {
        checkAvailability(table.rows[i].cells[3]);
        checkSex(table.rows[i].cells[2]);
        checkMinor(table.rows[i].cells[1]);
    }
}

function checkAvailability(item) {
    let tr = item.parentElement;
    if(item.getAttribute("data-available") === "true") {
        setClass(tr, "available");
    } else if(item.hasAttribute("data-available")) {
        setClass(tr, "unavailable");

    } else {
        setAtr(tr, "hidden", "");
    }
}

function checkSex(item) {
    let tr = item.parentElement;
    if(item.innerHTML == "m") {
        setClass(tr, "male");
    } else if(item.innerHTML == "f") {
        setClass(tr, "female");    
    } 
}

function checkMinor(item) {+item.innerHTML < 18 ? setAtr(item.parentElement, "style", "text-decoration: line-through;") : "";}

function setAtr(item, atr, value ="") {item.setAttribute(atr, value)}
function setClass(item, value) {item.classList.add(value)}

