import { dateCheck, intCheck, stringCheck } from "checks"

/**
 * Vérifie si l'entité est bien une chaine de caractère d'une longueur compris entre {minimumInclude} et {maximumInclude}
 * @param {any} entityToCheck 
 * @param {number} minimumInclude 
 * @param {number} maximumInclude 
 * @returns {boolean}
 */
export function stringContraint (entityToCheck : any, minimumInclude = 0, maximumInclude = Infinity) : boolean{
    return stringCheck(entityToCheck) && entityToCheck.length >= minimumInclude && entityToCheck.length <= maximumInclude
}

/**
 * Vérifie si l'entité est bien un nombre compris entre {minimumInclude} et {maximumInclude}
 * @param {any} entityToCheck 
 * @param {number} minimumInclude 
 * @param {number} maximumInclude 
 * @returns {boolean}
 */
export function intContraint (entityToCheck : any, minimumInclude = 0, maximumInclude = Infinity) : boolean{
    return intCheck(entityToCheck) && entityToCheck >= minimumInclude && entityToCheck <= maximumInclude
}

/**
 * Vérifie si l'entité est un nombre positif
 * @param {any} entityToCheck 
 * @returns {boolean}
 */
export function noNegativeNumberContraint (entityToCheck : any) : boolean{
    return intCheck(entityToCheck) && entityToCheck >= 0
}

/**
 * Vérifie si l'entité est une date qui n'est pas future
 * @param {any} entityToCheck 
 * @returns {boolean}
 */
export function noFutureDateContraint (entityToCheck : any) : boolean{
    return dateCheck(entityToCheck) && Math.floor(new Date(entityToCheck).getTime() / 1000) < Math.floor(Date.now() / 1000)
}

/**
 * Ajoute des 0 si la longueur de la chaine est inférieur à minLength
 * @example 
 * // retourne "01"
 * minWidthInteger(1, 2);
 * @param {any} value 
 * @param {number} minLength 
 * @returns {string}
 */
export function minWidthIntegerContraint (value : any, minLength : number): string {
    if(!intCheck(value)) return `${value}`

    value = parseInt(value);
    
    let ret = ""
    for(let i = 0; i < minLength; i++){
        if(value + 1 < Math.pow(10, i)){
            ret += "0"
        }
    }

    return `${ret}${value}`
}

export function escapeHtmlContraint(text : string) {
    let map : { [key: string]: string }= {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };

    return text.replace(/[&<>"']/g, (m : any ) => { 
        return `${map[m]}`
    });
}