import { EnvType, load } from 'ts-dotenv';
import { resolve } from "path"

export type Env = EnvType<typeof schema>;

export const schema = {
  SERVICE_SIGNATURE: String,
};

export let env: Env;

export function loadEnv(): void {
  console.log(resolve(__dirname, "./node_modules/signed-service/config/.env"))
  env = load(schema,{ 
    path : resolve(__dirname, "./node_modules/signed-service/config/.env")
  });
}