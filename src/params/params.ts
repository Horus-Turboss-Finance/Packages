import { EnvType, load } from 'ts-dotenv';

type Env = EnvType<typeof schema>;

const schema = {
  WEBHOOK_ERROR_FOR_DISCORD : String,
  URLDB: String,

  PORT_APIGATEWAY : Number,
  PORT_ADRESSMANAGER: Number,

  PASSWORD_SERVICE : String,
  TOKEN_EXPIRATION : Number,

  IP_FINANCIAL : String,
  IP_APIGATEWAY : String,
  IP_USER_SERVICE : String,
  IP_ADRESSMANAGER : String,
  IP_SERVICE_WHITELIST : String,

  NODE_ENV : String
};

export let env: Env;

export function loadEnv(path:string): Env {
  env = load(schema,{ 
    path:path
  });

  return env
}

export let serviceName = {
  array : ["API", "MAIL", "UTILISATEUR", "ADRESSADMIN", "FINANCIALSFLUX"],
  object : {
    api : "API",
    mail : "MAIL",
    adress : "ADRESSADMIN",
    utilisateur : "UTILISATEUR",
    financialsFlux : "FINANCIALSFLUX"
  }
}

export let inAppServiceName = {
  mongoose : "MONGOOSE",
  index : "INDEX",
  app : "APP",
}