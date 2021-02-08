/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    checkAvailability(document.querySelectorAll("td:last-child"));
    checkSex(document.querySelectorAll("tr td:nth-child(3"));
    minor(document.querySelectorAll("tr td:nth-child(2"));
}

function checkAvailability(obj) {
    obj.forEach((item) => {
        let tr = item.parentElement;
        if(item.getAttribute("data-available") === "true") {
            setAtr(tr, "class", value ="available");
        } else if(item.hasAttribute("data-available")) {
            setAtr(tr, "class", value ="unavailable");

        } else {
            setAtr(tr, "hidden", "", setAtr(tr, "class", value ="unavailable"));
        }
    }); 
}

function checkSex(obj) {
    for(let item of obj){
        let tr = item.parentElement;
        if(item.innerHTML == "m") {
            setAtr(tr, "class", value ="male");    
        } else if(item.innerHTML == "f") {
            setAtr(tr, "class", value ="female");    
        } 
    }
}

function minor(obj) {
    for(let item of obj) {
        +item.innerHTML < 18 ? setAtr(item.parentElement, "style", "text-decoration: line-through") : "";
    }
}

function setAtr(item, atr, value ="") {item.setAttribute(atr, value)}
