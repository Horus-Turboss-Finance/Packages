import { EnvType, load } from 'ts-dotenv';
import { resolve } from "path"

type Env = EnvType<typeof schema>;

const schema = {
  WEBHOOK_ERROR_FOR_DISCORD : String,
  URLDB: String,
  PORT_ADRESSMANAGER: Number,
  IP_ADRESSMANAGER: String,
  IP_SERVICE_WHITELIST : String
};

export let env: Env;
export let serviceName = {
  array : ["API", "MAIL", "UTILISATEUR", "ADRESSADMIN"],
  object : {
    api : "API",
    mail : "MAIL",
    adress : "ADRESSADMIN",
    utilisateur : "UTILISATEUR",
  }
}

export let inAppServiceName = {
  mongoose : "MONGOOSE",
  app : "APP",
  index : "INDEX",
}

export function loadEnv(path:string): void {
  env = load(schema,{ 
    path:path
  });
}