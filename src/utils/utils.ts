import { validate } from "email-validator";
let { createServer } = require('node:net');

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
export async function FreePort () : Promise<number> {
    let port = 1000
    
    const server = createServer();
    return new Promise(resolve => {
      server.once('listening', () => {
        server.close();
        resolve(port);
      }).on('error', () => {
        port += 1;
        server.listen(port);
      }).listen(port);
    });
}

/**
 * Vérifie si c'est une ip valide
 * @param {string} ip - la valeur à tester
 * @returns {boolean}
 */
export function isValidIP  (ip : any) : boolean {
    // Regex qui test si c'est un ip qui restre entre 0.0.0.0 et 255.255.255.255
    let Reg = new RegExp(/^(\b25[0-5]|\b2[0-4][0-9]|\b[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/i);
    return Reg.test(ip);
}

/**
 * Vérifier si la valeur est un id mongoose valide.
 * @param {string} id - L'id mongoose à tester 
 * @returns {boolean}
 */
export function isValidMongooseId (id : any) : boolean {
    let Reg = new RegExp(/^[0-9a-fA-f]{24}$/)
    return Reg.test(id)
}

/**
 * Vérifie si la valeur est un json valide
 * @param {string} text - le texte à tester 
 * @returns {boolean}
 */
export function isValidJSON (text : any) : boolean{
    if(!stringCheck(text)) return false

    try{
        JSON.parse(text)
        return true
    }catch(e){
        return false
    }
}

/**
 * Vérifie si l'entité est bien une chaine de caractère d'une longueur compris entre {minimumInclude} et {maximumInclude}
 * @param {any} entityToCheck 
 * @param {number} minimumInclude 
 * @param {number} maximumInclude 
 * @returns {boolean}
 */
export function stringContraint (entityToCheck : any, minimumInclude : number = 0, maximumInclude : number= Infinity) : boolean{
    return stringCheck(entityToCheck) && entityToCheck.length >= minimumInclude && entityToCheck.length <= maximumInclude
}

/**
 * Vérifie si l'entité est bien un nombre compris entre {minimumInclude} et {maximumInclude}
 * @param {any} entityToCheck 
 * @param {number} minimumInclude 
 * @param {number} maximumInclude 
 * @returns {boolean}
 */
export function intContraint (entityToCheck : any, minimumInclude : number = 0, maximumInclude : number = Infinity) : boolean{
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
        let tmp = value
        if(tmp == 0) tmp ++
        if(tmp < Math.pow(10, i)){
            ret += "0"
        }
    }

    return `${ret}${value.toString()}`
}


/**
 * Retire toutes les valeurs qui pourrait donner lieux à une faille xss
 * @param {string} text - la valeur à tester
 * @returns {string}
 */
export function escapeHtmlContraint(text : string) : string {
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

/**
 *  Vérifie si la valeur donné est une couleur hexadécimale
 * @param {string} text - La valeur à tester
 * @returns {boolean}
 */
export function IsHexColor (text : any) : boolean{
    if(!stringCheck(text)) return false

    let Reg = new RegExp(/^#(?:[0-9a-fA-F]{3}){1,2}$/);
    return Reg.test(text)
}

/**
 * Function qui permet de formater les réponses au erreurs du validator de mongoose
 * @param {string} message - Le message de base (err.errors.property.message)
 * @param {any} value - La donnée envoyé par l'utilisateur (err.errors.property.value)
 * @param {string} property - la valeur concerné (err.errors.property.path)
 * @param {string} kindValueForProperty - le type de valeur qui aurait dû être (err.errors.property.type)
 * @returns {string}
 */
export function mongooseMessageErrorFormator (message : string, value : any, property : string, kindValueForProperty : string) : string{
    if(!message.startsWith('Validator')) return message;

    return `${property} should be a ${kindValueForProperty}, got "${value}"`
}