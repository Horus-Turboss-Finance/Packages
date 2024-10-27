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
export let serviceName = ["MAIL", "UTILISATEUR", "ADRESSADMIN"]
export let serviceObj = {
  mail : "MAIL",
  adress : "ADRESSADMIN",
  utilisateur : "UTILISATEUR",
}

export function loadEnv(): void {
  env = load(schema,{ 
    path : resolve(__dirname, "../.env")
  });
}