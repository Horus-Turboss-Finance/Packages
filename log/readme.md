<div align="center">
  <h1>Error Handler</h1>
  <h6>Class pour répondre de manière normalisé peu importe le service.</h6>
</div>

### Table des matières
- [Packages](#packages)
- [Installation](#installation)
- [Documentation](#documentation)
    - [Base params :](#base-params-)
    - [UnknowAppError](#unknowapperror)
      - [Paramètre d'entré :](#paramètre-dentré-)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation)
    - [UnknowRequestError](#unknowrequesterror)
      - [Paramètre d'entré :](#paramètre-dentré--1)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-1)
    - [ServiceInfo](#serviceinfo)
      - [Paramètre d'entré :](#paramètre-dentré--2)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-2)

## Packages

- `dateformat` - Pour gérer le format de date [^1].
- `axios` - Pour envoyer des requêtes. [^2].

## Installation

```shell
npm install PATH/TO/THIS/REPO
```

Or go to `package.json` file and add this :

```json
"dependencies": {
    // Somes packages //
    "log": "file:YOUR/PATH/TO/log"
    // Somes packages //
  },
```

## Documentation
#### Base params :

| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `id` | `string` | Token du service |
| `CE_Service` | `string` | Nom du service utilisé |
| `pathLog` | `string` | Chemin du dossier de log |

#### UnknowAppError
Les erreurs des services qui ne sont pas directement le routeur, les middleware, etc.

##### Paramètre d'entré :

| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `service` | `string` | Nom du service in app utilisé |
| `err` | `Error` | L'erreur en question |

##### *Exemple de d'utilisation*
```js
  let { log } = require('log')
  // ou pour les es modules //
  // import { CreateSignature, ServicesOptions  } from "signed-service" //

  try{
    // ...Code existant... //
  }catch(e){
    new log(TokenService, "ADRESSMANAGER", path.resolve("src", "log")).UnknowAppError("mongodb", e)
  }
```


#### UnknowRequestError
Les erreurs des services qui sont directement le routeur, les middleware, etc.

##### Paramètre d'entré :

| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `method` | `string` | La méthode utilisé (post, get, put) |
| `protocol` | `string` | http ou http**s** |
| `originalUrl` | `string` | Chemin original de l'adress |
| `params` | `string` | Params dans l'url |
| `body` | `string` | Corp de requête |
| `cookies` | `string` | Cookie dans la requête |
| `headers` | `string` | L'entête de requête |
| `err` | `Error` | L'erreur en question |

##### *Exemple de d'utilisation*
```js
  let { log } = require('log')
  // ou pour les es modules //
  // import { CreateSignature, ServicesOptions  } from "signed-service" //

  try{
    // ...Code existant... //
  }catch(e){
    new log(TokenService, "ADRESSMANAGER", path.resolve("src", "log")).UnknowRequestError(req.method, req.protocol, req.originalUrl, JSON.stringify(req.params), JSON.stringify(req.body), JSON.stringify(req.cookies), JSON.stringify(req.headers), e)
  }
```


#### ServiceInfo
Les information de services

##### Paramètre d'entré :

| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `service` | `string` | Le service in app en question |
| `info` | `string` | http ou http**s** |

##### *Exemple de d'utilisation*
```js
  let { log } = require('log')
  // ou pour les es modules //
  // import { CreateSignature, ServicesOptions  } from "signed-service" //

  try{
    // ...Code existant... //
    connect().then(() => {
      new log(TokenService, "ADRESSMANAGER", path.resolve("src", "log")).ServiceInfo("mongodb", "connected")
    })
  }catch(e){
    // ...Code existant... //
  }
```

[^1]: [Url du dépot `dateformat`](../dateformat/readme.md)
[^2]: [Url du dépot `axios`](https://www.npmjs.com/package/axios)