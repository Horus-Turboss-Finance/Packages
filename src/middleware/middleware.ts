import { decodeUserToken } from "../utils/utils";
import { inAppServiceName } from "../params/params";
import { ResponseException } from "../responseHandler/responseException";

/**
 * Fonction qui permet de résoudre des erreurs dans les fonctions async
 * @param errorFunction - Les parametres envoyé par express (req, res, next)
 * @returns 
 */
export const catchSync = (errorFunction : any) => async (req : any, res : any, next : any) => {
  Promise.resolve(errorFunction(req, res, next)).catch(next);
}

/**
 * Middleware qui permet de filtrer si la requête est d'un service légitique (api gat, mail, user, etc) ou proviens d'un service externe. Au quel cas il sera expulsé vers l'api gateway
 * @param req - La request express
 * @param res - La réponse express
 * @param next - La nextfunction express
 * @returns 
 */
export const controleOrigine = catchSync(async (req : any, res : any, next : any) => {
  let env = req.app.get("envLoad")
  let LogSys = req.app.get("logSys")
  if(!env || !LogSys) throw new Error("N'oubliez pas de charger les variables `logSys` et `envLoad` avec app.set")

  let ipWhiteList = env.IP_SERVICE_WHITELIST.split(';');
  let NodeProd = env.NODE_ENV
  

  if(NodeProd !== "PRODUCTION") return next()
  let socketAddr = req.socket ? req.socket.remoteAddress : req.ip
  let proxyAddrs = req.headers['host']

  let addr = [socketAddr].concat(proxyAddrs)

  let { trust } =  req.body;
  if(! trust) trust = req.headers.trust

  if(!addr.some(item => ipWhiteList.includes(item ?? "")) && (trust !== env.PASSWORD_SERVICE)) {
    LogSys.ServiceInfo(inAppServiceName.app, `User : "${addr[0] ?? "NOT FOUND"} try to use service without api gateway`)
    throw new ResponseException("Vous n'êtes pas abilité à utiliser cette ressource.").Forbidden()
  }
  next()
})


/**
 * Fonction qui check si le token de l'utilisateur est légitime et qu'il est valide
 */
export const isAuth = catchSync(async (req : any, res : any, next : any) => {
  let { token } = req.body

  if(!token) token = req.headers.token

  decodeUserToken(req, token);
  // if(`${req.baseUrl}`.includes("password")){
  //   user = await User.findById(data.id).select("+password");
  // }else{
  //   user = await User.findById(data.id);
  // }

  next();
})

export const ResponseProtocole = (err : Error & any, req : any, res : any, next : any) => {
  const logErr = err
  if(!('status' in err)){
      err = new ResponseException().UnknownError()
  }
  
  if(err.status >= 500){
    let logSys = req.app.get("logSys")
    if(!logSys) throw new Error("Veuillez charger les `logSys` avec app.set")

    logSys.UnknowRequestError(req, logErr)
  }

  return res.status(err.status).json(err)
  next()
}

/**
 * 
 * @param req - La requête express
 * @param res - La réponse express
 * @param next - La nextFunction express
 */
export const LogRequest = (req : any, res : any, next : any) => {
  next()

  const text = `${req.method} : ${req.originalUrl} | body : ${JSON.stringify(req.body)} ; header : ${JSON.stringify(req.headers)} | query : ${JSON.stringify(req.query)}`;
  if(!req.app.get("logSys")) throw new Error("Il faut configurer les logs sur la plage \"logSys\"");

  let logSys = req.app.get("logSys")
  if(!logSys) throw new Error("Veuillez charger le logSys dans `app.set(\"logSys\", logSys)`")
  logSys.ServiceInfo(inAppServiceName.app, text)
}