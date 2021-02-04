/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let arrNumbers = [],
    result;

    str.split(' ').join().split(',').forEach((item) => {
        if (isFinite(item) && item != "") {
            arrNumbers.push(item);
        }
    })

    if (arrNumbers.length > 0) {
        return {
        min: Math.min(...arrNumbers),
        max: Math.max(...arrNumbers),
        };
    }
}   
