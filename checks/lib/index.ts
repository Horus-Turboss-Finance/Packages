import { validate } from "email-validator";
import { check } from "tcp-port-used";

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

/**
 * Vérifie le premier port libre (après 1k)
 * @param {string} IP
 * @returns {number}
 * 
 * @example
 * import { FreePort } from "checks";
 *
 *  let main = async () => {
 *    console.log(await FreePort())
 *  }
 *  
 * main()
 */
export async function FreePort (IP = "127.0.0.1") : Promise<number> {
    return new Promise(async (res, rej) => {
        try{
            for(let i = 1000; i < 60000; i++){
                let isFree = await check(i, IP)
                if(isFree){
                    res(i)
                    break
                }
            }
        }catch(e){
            rej(e)
        }
    })
}