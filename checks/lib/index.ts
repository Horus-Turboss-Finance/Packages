import { validate } from "email-validator";

/**
 * Vérifie si c'est un nombre
 * @param {any} entityToCheck 
 * @returns {boolean}
 */
export function intCheck (entityToCheck : any) : boolean{
    return typeof entityToCheck === 'number' && !isNaN(entityToCheck) && isFinite(entityToCheck)
}

/**
 * Vérifie si c'est une date
 * @param {any} entityToCheck 
 * @returns {boolean}
 */
export function dateCheck (entityToCheck : any) : boolean{
    let checkVar = new Date(entityToCheck).getTime()
    return typeof checkVar === "number" && !isNaN(checkVar)
}

/**
 * Vérifie si c'est une chaine de caractère
 * @param {any} entityToCheck 
 * @returns {boolean}
 */
export function stringCheck (entityToCheck : any) : boolean{
    return typeof entityToCheck === "string"
}

/**
 * Vérifie si c'est un email valid
 * @param {any} entityToCheck 
 * @returns {boolean}
 */
export function emailCheck (entityToCheck : any) : boolean{
    return stringCheck(entityToCheck) && validate(entityToCheck.toLowerCase())
}