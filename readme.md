<div align="center">
  <h1>Packages</h1>
  <h6>Fonctions utiles sur plusieurs modules de cash eyes.</h6>
</div>

### Table des matières
- [Packages](#packages)
- [Instalation](#instalation)
- [Documentation](#documentation)
  - [params](#params)
    - [LoadEnv](#loadenv)
    - [Liste des variables dans "env"](#liste-des-variables-dans-env)
    - [serviceName](#servicename)
  - [Log](#log)
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
  - [ResponseException](#responseexception)
      - [Paramètre d'entré :](#paramètre-dentré--3)
      - [Liste des format possible :](#liste-des-format-possible-)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-3)
  - [Utils](#utils)
    - [stringContraint](#stringcontraint)
      - [Paramètre d'entré :](#paramètre-dentré--4)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-4)
    - [intContraint](#intcontraint)
      - [Paramètre d'entré :](#paramètre-dentré--5)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-5)
    - [noNegativeNumberContraint](#nonegativenumbercontraint)
      - [Paramètre d'entré :](#paramètre-dentré--6)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-6)
    - [noFutureDateContraint](#nofuturedatecontraint)
      - [Paramètre d'entré :](#paramètre-dentré--7)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-7)
    - [minWidthIntegerContraint](#minwidthintegercontraint)
      - [Paramètre d'entré :](#paramètre-dentré--8)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-8)
    - [escapeHtmlContraint](#escapehtmlcontraint)
      - [Paramètre d'entré :](#paramètre-dentré--9)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-9)
    - [intCheck](#intcheck)
      - [Paramètre d'entré :](#paramètre-dentré--10)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-10)
    - [dateCheck](#datecheck)
      - [Paramètre d'entré :](#paramètre-dentré--11)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-11)
    - [stringCheck](#stringcheck)
      - [Paramètre d'entré :](#paramètre-dentré--12)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-12)
    - [emailCheck](#emailcheck)
      - [Paramètre d'entré :](#paramètre-dentré--13)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-13)

## Packages
- `ts-dotenv` - Pour gérer les fichiers dotenv [^1].
- `typescript` - langage pour javascript à l'échelle de l'application (ajoutant des typages) [^2].
- `axios` - Pour envoyer des requêtes. [^3].
- `email-validator` - Un merveilleux outil pour valider les adresses e-mail [^4].
- `tcp-used-port` - Un simple module qui vérifie si le port TCP est actuellement utilisé [^5].

## Instalation

```shell
npm i https://github.com/Horus-Turboss-Finance/Packages
```

## Documentation
### params
#### LoadEnv
Cette fonction a pour but de charger les variables d'environnement dans la variable de packet "env"

#### Liste des variables dans "env"
| Titre                     | Type     |
|:--------------------------|:--------:|
| WEBHOOK_ERROR_FOR_DISCORD | `String` |
| IP_SERVICE_WHITELIST      | `String` |
| PORT_ADRESSMANAGER        | `Number` |
| IP_ADRESSMANAGER          | `String` |
| PASSWORD_SERVICE          | `String` |
| TOKEN_EXPIRATION          | `Number` |
| IP_USER_SERVICE           | `String` |
| PORT_APIGATEWAY           | `Number` |
| IP_APIGATEWAY             | `String` |
| NODE_ENV                  | `String` |
| URLDB                     | `String` |

#### serviceName
A array for actuals services
or
A object for actuals services

### Log

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

> [!NOTE] 
> IP_SERVICE_WHITELIST est une suite d'ip délimité par un ";", pour récupérer un tableau éxécutable, il faut donc faire un `env.IP_SERVICE_WHITELIST.split(';')`

You need to start "loadenv" if you want have the env var up


### ResponseException
Cette class est le lien qui crée la réponse (réponse en format json)

##### Paramètre d'entré :

| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `reason` | `string` | La data/raison de l'erreur/la requête |

##### Liste des format possible :
| Name | Value | 
| :-------- | :--: |
| `UnknownError` | 500 |
| `MethodNotAllowed` | 405 |
| `PaymentRequired` | 402 |
| `ToManyRequest` | 429 |
| `Unauthorized` | 401 |
| `BadRequest` | 400 |
| `IMATeapot` | 418 |
| `Forbidden` | 403 |
| `NotFound` | 404 |
| `OK` | 201 |
| `Success` | 200 |

##### *Exemple de d'utilisation*
```js
  let { ResponseException } = require('error-handler')
  // ou pour les es modules //
  // import { CreateSignature, ServicesOptions  } from "signed-service" //

  // ...Code existant... //
  if(!noUser) throw new ResponseException('Utilisateur introuvable').BadRequest()
  
  // ...Code existant... //
  res.send(new ResponseException().UnknownError().send())

```

> [!TIP] à noter que send permet d'envoyer directement au format json tandis que les autre fonctions permettent de modifier les drapeaux de la réponse


### Utils
#### stringContraint
Cette fonction a pour but de vérifier si la variable donné est une chaine de caractère compris entre le minimum fournit et le maximum fournit.

Retourne : `Boolean`

##### Paramètre d'entré :

| Parameter | Type | Description | Défaut |
| :-------- | :--: | :---------- | :--: |
| `entityToCheck` | `any` | L'entité ou variable à vérifier | &#9744; |
| `minimumExclude` | `number` | La taille de la chaine minimum | `0` |
| `maximumExclude` | `number` | La taille de la chaine maximum | `∞` |

##### *Exemple de d'utilisation*
```js
  let { stringContraint } = require('constraint')
  // ou pour les es modules //
  // import { stringContraint } from "constraint" //

  // ...Code existant... //
  let pseudo = input()
  if(!stringContraint(pseudo, 3, 20)) alerte('Votre pseudo doit contenir entre 3 et 20 caractère')
  else // ... //
```

<h1></h1>

#### intContraint
Cette fonction a pour but de vérifier si la variable donné est un nombre compris entre le minimum inclu et le maximum inclu. (/!\ ne vérifie pas si le nombre est un décimal)

Retourne : `Boolean`

##### Paramètre d'entré :

|     Parameter     |   Type   |           Description           | Défaut  |
| :---------------- | :------: | :------------------------------ |  :---:  |
|  `entityToCheck`  |  `any`   | L'entité ou variable à vérifier | &#9744; |
|  `minimumExclude` | `number` | La taille de la chaine minimum  |   `0`   |
|  `maximumExclude` | `number` | La taille de la chaine maximum  |   `∞`   |

##### *Exemple de d'utilisation*
```js
  let { intContraint } = require('constraint')
  // ou pour les es modules //
  // import { intContraint } from "constraint" //

  // ...Code existant... //
  let age = input()

  if(!intContraint(age, 18)) alerte('Vous devez avoir au moins 18 ans pour acceder à ce site')
  else // ... //
```

<h1></h1>

#### noNegativeNumberContraint
Cette fonction a pour but de vérifier si la variable donné est un nombre positif
/!\ Ne vérifie pas si c'est un nombre décimal

Retourne : `Boolean`

##### Paramètre d'entré :

|    Parameter    | Type  |           Description           |
| :-------------- | :---: | :------------------------------ | 
| `entityToCheck` | `any` | L'entité ou variable à vérifier |

##### *Exemple de d'utilisation*
```js
  let { noNegativeNumberContraint } = require('constraint')
  // ou pour les es modules //
  // import { noNegativeNumberContraint } from "constraint" //

  // ...Code existant... //
  let bankAccount = input()
  if(!noNegativeNumberContraint(bankAccount)) alerte('Désolé, vous êtes en faillite')
  else // ... //
```

<h1></h1>

#### noFutureDateContraint
Cette fonction a pour but de vérifier si la variable donné est un nombre positif

Retourne : `Boolean`

##### Paramètre d'entré :

|    Parameter    | Type  |           Description           |
| :-------------- | :---: | :------------------------------ | 
| `entityToCheck` | `any` | L'entité ou variable à vérifier |

##### *Exemple de d'utilisation*
```js
  let { noFutureDateContraint } = require('constraint')
  // ou pour les es modules //
  // import { noFutureDateContraint } from "constraint" //

  // ...Code existant... //
  let factureDate = input()

  // est vrai si le paramètre est une valeur int, ou format date (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) pour plus d'information
  if(!noFutureDateContraint(factureDate)) alerte('Désolé, vous ne pouvez pas entré une facture qui n\'est pas encore passé')
  else // ... //
```

<h1></h1>

#### minWidthIntegerContraint
Cette fonction a pour but d'ajouter des 0 pour avoir un nombre normalisé

Retourne : `String`

##### Paramètre d'entré :

| Parameter | Type | Description | Défaut |
| :-------- | :--: | :---------- | :--: |
| `value` | `any` | L'entité ou variable à vérifier | &#9744; |
| `minLength` | `number` | La taille de la chaine finale | `0` |

##### *Exemple de d'utilisation*
```js
  let { minWidthIntegerContraint } = require('constraint')
  // ou pour les es modules //
  // import { minWidthIntegerContraint } from "constraint" //

  // ...Code existant... //
  let minute = new Date().getMinutes()
  // x si x >= 10, "0" + x si x < 10
  // 9 -> 09
  // 49 -> 49
  minute = minWidthIntegerContraint(minute, 2) 
```

<h1></h1>

#### escapeHtmlContraint
Cette fonction a pour but de vérifier si la variable donné est un nombre positif

Retourne : `String`

##### Paramètre d'entré :

| Parameter |   Type   |           Description           |
| :-------- | :------: | :------------------------------ | 
|   `text`  | `string` | L'entité ou variable à vérifier |

##### *Exemple de d'utilisation*
```js
  let { escapeHtmlContraint } = require('constraint')
  // ou pour les es modules //
  // import { escapeHtmlContraint } from "constraint" //

  // ...Code existant... //
  let message = input()

  // si le message contient des caractères html compilable ils sont échangé.
  // <h1>lol</h1> -> &lt;h1&gt;lol&lt;/h1&gt;
  alert(message)
```
#### intCheck
Cette fonction a pour but de vérifier si la variable donné est un nombre.

Retourne : `Boolean`

##### Paramètre d'entré :

| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `entityToCheck` | `any` | L'entité ou variable à vérifier |

##### *Exemple de d'utilisation*
```js
  let { intCheck } = require('checks')
  // ou pour les es modules //
  // import { intCheck } from "checks" //

  // ...Code existant... //
  let age = input()
  if(!intCheck(age)) alerte('entrez un nombre')
  else // ... //
```

<h1></h1>

#### dateCheck
Cette fonction a pour but de vérifier si la variable donné est une date valide.

Retourne : `Boolean`

##### Paramètre d'entré :

| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `entityToCheck` | `any` | L'entité ou variable à vérifier |

##### *Exemple de d'utilisation*
```js
  let { dateCheck } = require('checks')
  // ou pour les es modules //
  // import { dateCheck } from "checks" //

  // ...Code existant... //
  let date = new Date(input())
  date = date.getTime()

  // est vrai si le paramètre est une valeur int, ou format date (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) pour plus d'information
  if(!dateCheck(date)) alerte('entrez une date valide')
  else // ... //
```

<h1></h1>

#### stringCheck
Cette fonction a pour but de vérifier si la variable donné est une chaine de caractère.

Retourne : `Boolean`

##### Paramètre d'entré :

| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `entityToCheck` | `any` | L'entité ou variable à vérifier |

##### *Exemple de d'utilisation*
```js
  let { stringCheck } = require('checks')
  // ou pour les es modules //
  // import { stringCheck } from "checks" //

  // ...Code existant... //
  let favoriteFood = input()
  if(!stringCheck(favoriteFood)) alerte('entrez un mot')
  else // ... //
```

<h1></h1>

#### emailCheck
Cette fonction a pour but de vérifier si la variable donné est un email et que ce dernier est un email correctement construit.

Retourne : `Boolean`

##### Paramètre d'entré :

| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `entityToCheck` | `any` | L'entité ou variable à vérifier |

##### *Exemple de d'utilisation*
```js
  let { emailCheck } = require('checks')
  // ou pour les es modules //
  // import { emailCheck } from "checks" //

  // ...Code existant... //
  let mail = input()
  if(!emailCheck(mail)) alerte('entrez un email valide')
  else // ... //
```





[^1]: [Url du dépot `ts-dotenv`](https://www.npmjs.com/package/ts-dotenv)
[^2]: [Url du dépot `typescript`](https://www.npmjs.com/package/typescript)
[^3]: [Url du dépot `axios`](https://www.npmjs.com/package/axios)
[^4]: [Url du dépot `email-validator`](https://www.npmjs.com/package/email-validator)
[^5]: [Url du dépot `tcp-used-port`](https://www.npmjs.com/package/tcp-port-used)
