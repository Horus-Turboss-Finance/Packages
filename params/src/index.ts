import { EnvType, load } from 'ts-dotenv';
import { resolve } from "path"

export type Env = EnvType<typeof schema>;

const schema = {
  WEBHOOK_ERROR_FOR_DISCORD : String,
  URLDB: String,
  PORT_ADRESSMANAGER: Number,
  IP_ADRESSMANAGER: String
};

export let env: Env;

export function loadEnv(): void {
  env = load(schema,{ 
    path : resolve(__dirname, "../.env")
  });
}