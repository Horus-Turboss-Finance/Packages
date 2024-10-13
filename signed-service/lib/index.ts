import { env, loadEnv } from "./config/env";
import { ServicesOptions } from "./definitions";
import * as bcrypt from "bcryptjs"

loadEnv()

/**
 * Retourne la signature d'un service pour authentifier que c'est bien lui.
 * @param {string} service 
 * 
 * @example
 * // 12af1b5.502adf.ad2590bc1a
 * await CreateSignature(ServicesOptions.User)
 * @returns {string}
 */
export function CreateSignature (service : string) : string {
  let services = Object.values(ServicesOptions)
  if(services.find(item => item === service) == undefined) throw new Error("Service inconnue")

  let date = (Math.round(Date.now() / 1000))

  const firstPartToken = Buffer.from(`${service}`).toString('base64url');
  const secondPartToken = Buffer.from(`${date}`).toString('base64url');

  const signature = `${firstPartToken}.${secondPartToken}.${env.SERVICE_SIGNATURE}`
  let tokenEndPart = bcrypt.hashSync(signature, 10)
  tokenEndPart = Buffer.from(`${tokenEndPart}`).toString('base64url')

  return `${firstPartToken}.${secondPartToken}.${tokenEndPart}`
}

/**
 * Vérifie si la signature d'un service est bien légitime.
 * 
 * @param token 
 * @returns {boolean}
 */
export function CompareSignature (token : string) : boolean {
  if(!token) return false
  const tokenParts = token.split(".")
  
  if(tokenParts[2] === undefined) return false
  const tokenFirstPart = tokenParts[0]; // service
  const tokenSecondPart = tokenParts[1]; // valid date
  let tokenEndPart = tokenParts[2];
  tokenEndPart = Buffer.from(`${tokenEndPart}`, 'base64url').toString('utf-8')

  const expireDate = parseInt(Buffer.from(`${tokenSecondPart}`, 'base64url').toString('utf-8'))


  const isValid = bcrypt.compareSync(`${tokenFirstPart}.${tokenSecondPart}.${env.SERVICE_SIGNATURE}`, tokenEndPart) && expireDate > (Math.round(Date.now() / 1000)) - 10

  if(!isValid) return false
  return true
} 

export {ServicesOptions} from "./definitions"