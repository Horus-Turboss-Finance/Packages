import axios from "axios";
import { serviceName } from "../params/params";
import { ResponseException } from "../responseHandler/responseException"; 

/**
 * Function qui récupère les urls des services demandé
 * @param service - Le service voulu parmit les options de serviceName (params)
 * @param env - Les paramètres env pour récupérer `IP_ADRESSMANAGER` et `PORT_ADRESSMANAGER`
 * @returns {string}
 */
export const AddressManagerAsk = async (service : string, env : any, ip : any) : Promise<string> => {
  if(!serviceName.array.includes(service)) throw new ResponseException("Le service demandé n'existe pas").BadRequest();

  let urlData = await axios({
    url: '/service',
    baseURL: `http://${env.IP_ADRESSMANAGER}:${env.PORT_ADRESSMANAGER}`,
    method: 'get',
    data: {
      service,
      ip
    }
  })

  let data : any = JSON.parse(urlData.data.data)

  if(!data) throw new ResponseException().UnknownError()
  return `http://${data.adressIP}:${data.port}`
}  

/**
 * Function qui envoie que le service est up sur x adresse
 * @param {Object} param0 
 * @param {string} param0.adressIP - L'adress ip de la machine qui tourne l'adress manager
 * @param {number} param0.port - Le port d'écoute sur la machine de l'adress manager
 * @param {string} param0.service - Le service qui vient de s'allumer parmi les options dans serviceName (params)
 * @param env 
 */
export let SignalAdressManager = async ({adressIP, port, service} : {adressIP : string, port : number, service : string}, env : any) => {
  if(!serviceName.array.includes(service)) throw new ResponseException("Le service demandé n'existe pas").BadRequest();

  await axios({
    url: '/service',
    method: 'post',
    baseURL: `http://${env.IP_ADRESSMANAGER}:${env.PORT_ADRESSMANAGER}`,
    data: {
      adressIP, 
      service,
      port
    }
  })
}