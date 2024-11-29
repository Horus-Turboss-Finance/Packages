import { createHash } from "crypto";
import { env } from "../params/params";
import { createServer } from 'node:net';
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
    const server = createServer();
    return new Promise((res, rej) => {
        server.on('error', (err)=> rej(err))

        server.listen(0, () => {
            /* @ts-ignore */
            let port = server.address().port;

            server.close()

            if(!port) rej(new Error("Pas de port disponible"))
            else res(port)
        });
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
 * Vérifie si l'entité est une date qui n'est pas passé
 * @param {any} entityToCheck 
 * @returns {boolean}
 */
export function noPastDateContraint (entityToCheck : any) : boolean{
    return dateCheck(entityToCheck) && Math.floor(new Date(entityToCheck).getTime() / 1000) > Math.floor(Date.now() / 1000)
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
    if(!message.startsWith('Validator') || !message.startsWith('Cast')) return message;

    return `${property} should be a ${kindValueForProperty}, got "${value}"`
}

/**
 * Décode le token et stoque la réponse dans la requête pour être utilisé par les autres controller/middleware/services
 * @param req - la request de express
 * @param token - le token de l'utilisateur fourni
 * @returns {boolean} - Si c'est un token valide ou non
 */
export async function decodeUserToken (req : any, token : string) : Promise<boolean> {
    if(!token) return req.isValidToken = false;

    const tokenParts = token.split(".")

    let userID = tokenParts[0];
    let validDate = tokenParts[1];
    let signedProof = tokenParts[2];

    if(!userID || !signedProof || !validDate) return req.isValidToken = false;

    const signature = `${userID}.${validDate}.${env.PASSWORD_SERVICE}`
    
    let hash = createHash("sha512");
    hash.update(signature);

    validDate = Buffer.from(`${validDate}`, 'base64url').toString('utf-8')

    if(hash.digest("base64url") !== signedProof || parseInt(validDate) < Date.now()) return req.isValidToken = false;

    userID = Buffer.from(`${userID}`, 'base64url').toString('utf-8')

    req.userID = userID;
    return req.isValidToken = true;
}

/**
 * Fonction qui permet de générer le token facilement et rapidement
 * @param {string} id - L'id de l'utilisateur 
 * @returns {string} Le token généré
 */
export async function encodeUserToken (id : string) : Promise<string>{
    const secondData = Date.now() + env.TOKEN_EXPIRATION
    
    const userID = Buffer.from(`${id}`).toString('base64url')
    const validDate = Buffer.from(`${secondData}`).toString('base64url')
    
    const signature = `${userID}.${validDate}.${env.PASSWORD_SERVICE}`

    let hash = createHash("sha512");
    hash.update(signature)
    let signedProof = hash.digest("base64url")

    return `${userID}.${validDate}.${signedProof}`
}