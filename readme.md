<div align="center">
  <h1>Packages</h1>
  <h6>Fonctions utiles sur plusieurs modules de cash sight.</h6>
</div>

### Table des matières
- [Packages](#packages)
  - [DevDependencies](#devdependencies)
  - [Dependencies](#dependencies)
- [Instalation](#instalation)
- [Documentation](#documentation)
  - [ServicesConnxion](#servicesconnxion)
    - [AdressManagerAsk](#adressmanagerask)
      - [Paramètre d'entré :](#paramètre-dentré-)
      - [Retourne](#retourne)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation)
    - [SignalAdressManager](#signaladressmanager)
      - [Paramètre d'entré :](#paramètre-dentré--1)
      - [Retourne](#retourne-1)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-1)
  - [Timepiece](#timepiece)
    - [Constructor :](#constructor-)
    - [property](#property)
      - [Relative](#relative)
        - [Return :](#return-)
      - [shortTime](#shorttime)
        - [Return](#return)
      - [longTime](#longtime)
        - [Return](#return-1)
      - [shortDate](#shortdate)
        - [Return](#return-2)
      - [longDate](#longdate)
        - [Return](#return-3)
      - [shortDateTime](#shortdatetime)
        - [Return](#return-4)
      - [longDateTime](#longdatetime)
        - [Return](#return-5)
      - [classified](#classified)
        - [Return](#return-6)
      - [monthOnly](#monthonly)
        - [Return](#return-7)
  - [log](#log)
    - [Constructor](#constructor)
    - [UnknowAppError](#unknowapperror)
      - [Paramètre d'entré :](#paramètre-dentré--2)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-2)
    - [UnknowRequestError](#unknowrequesterror)
      - [Paramètre d'entré :](#paramètre-dentré--3)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-3)
    - [ServiceInfo](#serviceinfo)
      - [Paramètre d'entré :](#paramètre-dentré--4)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-4)
  - [middleware](#middleware)
    - [catchSync](#catchsync)
      - [params](#params)
  - [controleOrigine](#controleorigine)
  - [isAuth](#isauth)
  - [ResponseProtocole](#responseprotocole)
    - [Params](#params-1)
  - [LogRequest](#logrequest)
  - [params](#params-2)
    - [LoadEnv](#loadenv)
    - [Liste des variables dans "env"](#liste-des-variables-dans-env)
    - [serviceName](#servicename)
      - [List of services](#list-of-services)
    - [inAppServiceName](#inappservicename)
  - [ResponseException](#responseexception)
      - [Paramètre d'entré :](#paramètre-dentré--5)
      - [Liste des format possible :](#liste-des-format-possible-)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-5)
  - [Utils](#utils)
    - [intCheck](#intcheck)
      - [Paramètre d'entré :](#paramètre-dentré--6)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-6)
    - [dateCheck](#datecheck)
      - [Paramètre d'entré :](#paramètre-dentré--7)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-7)
    - [stringCheck](#stringcheck)
      - [Paramètre d'entré :](#paramètre-dentré--8)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-8)
    - [emailCheck](#emailcheck)
      - [Paramètre d'entré :](#paramètre-dentré--9)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-9)
    - [FreePort](#freeport)
      - [Paramètre d'entré :](#paramètre-dentré--10)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-10)
    - [isValidIP](#isvalidip)
      - [Paramètre d'entré :](#paramètre-dentré--11)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-11)
    - [isValidMongooseId](#isvalidmongooseid)
      - [Paramètre d'entré :](#paramètre-dentré--12)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-12)
    - [isValidJSON](#isvalidjson)
      - [Paramètre d'entré :](#paramètre-dentré--13)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-13)
    - [stringContraint](#stringcontraint)
      - [Paramètre d'entré :](#paramètre-dentré--14)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-14)
    - [intContraint](#intcontraint)
      - [Paramètre d'entré :](#paramètre-dentré--15)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-15)
    - [noNegativeNumberContraint](#nonegativenumbercontraint)
      - [Paramètre d'entré :](#paramètre-dentré--16)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-16)
    - [noFutureDateContraint](#nofuturedatecontraint)
      - [Paramètre d'entré :](#paramètre-dentré--17)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-17)
    - [noPastDateContraint](#nopastdatecontraint)
      - [Paramètre d'entré :](#paramètre-dentré--18)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-18)
    - [minWidthIntegerContraint](#minwidthintegercontraint)
      - [Paramètre d'entré :](#paramètre-dentré--19)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-19)
    - [escapeHtmlContraint](#escapehtmlcontraint)
      - [Paramètre d'entré :](#paramètre-dentré--20)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-20)

## Packages
### DevDependencies
- `@commitlint/cli` - Pour la gestion des commit [^4].
- `@commitlint/config-conventional` - Pour utiliser les conventions les plus adopté de commit [^5].
- `husky` - Husky enhances your commits and more [^6].
### Dependencies
- `ts-dotenv` - Pour gérer les fichiers dotenv [^1].
- `axios` - Pour envoyer des requêtes. [^2].
- `email-validator` - Un merveilleux outil pour valider les adresses e-mail [^3].

## Instalation

```shell
npm i https://github.com/Horus-Turboss-Finance/Packages
```

## Documentation
### ServicesConnxion
#### AdressManagerAsk 
Cette fonction a pour but de demander à l'adress manager (selon l'ip et le port saisir dans les .env) quel est l'adress d'un service

##### Paramètre d'entré :

| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `service` | `string` | Le service in app en question |
| `env` | `string` | http ou http**s** |

##### Retourne
```js
`http://${ip}:${port}/`
```

##### *Exemple de d'utilisation*
```js
  let { ServiceConnexion } = require('package')
  // ou pour les es modules //
  // import { ServiceConnexion  } from "package" //
  let axios = require("axios")

  axios.request({
        url: ServiceConnexion.AddressManagerAsk(serviceName.object.mail, process.env),
        /* [...] */
  }).then(/* [...] */)

```

#### SignalAdressManager 
Cette fonction a pour but de signaler à l'adress manager que X service est en ligne à tel ip et tel port

##### Paramètre d'entré :

| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `adressIP` | `string` | L'ip du service actuel |
| `port` | `number` | Le port du service actuel |
| `service` | `string` | Le service actuel |

##### Retourne
```js
null
```

##### *Exemple de d'utilisation*
```js
  let { ServiceConnexion } = require('package')
  // ou pour les es modules //
  // import { ServiceConnexion  } from "package" //

  app.listen(ip, port, () => {
        ServiceConnexion.SignalAdressManager({adressIP : ip, port, service : serviceName.object.mail}),
        /* [...] */
  })

```

### Timepiece
Classe qui permet de gérer des formats temporels

#### Constructor :
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `date` | `number` | la date que vous voulez formater au format milisecond (défaut : now) |
| `lang` | `string` | La langue souhaité (default : fr) |

#### property 
##### Relative
Renvoie la date relative à maintenant (il y a un an, il y a 50 ans, il y a 50 minutes, dans 6 heures, etc)
###### Return :
```js
"Il y a 50 ans",
"Il y a 1 an",
"Il y a 1 mois",
"Il y a 20 jours",
"Il y a 1 jour",
"Il y a 20 heures",
"Il y a 1 heure",
"Il y a 20 minutes",
"Il y a 1 minute",
"Il y a quelques instants",
"Dans quelques instants",
"Dans 1 minute",
"Dans 10 minutes",
// [...]
```

##### shortTime
Permet d'avoir le temps (heure et minutes) uniquement
###### Return 
```js
"18:31"
```

##### longTime
Permet en plus du short time de récupérer les secondes
###### Return 
```js
"18:31:21"
```

##### shortDate
Permet de récupérer la date en format jour/mois/année
###### Return 
```js
"31/12/2024"
```

##### longDate
Permet de récupérer la date en format jour mois année
###### Return 
```js
"31 décembre 2024"
```

##### shortDateTime
Permet de récupérer la date en format jour mois année heures:minutes
###### Return 
```js
"31 décembre 2024 18:24"
```

##### longDateTime
Permet de récupérer la date en format jour de semaine jour mois année heures:minutes
###### Return 
```js
"mardi 31 décembre 2024 18:24"
```

##### classified
Permet de récupérer la date en format année mois jour
###### Return 
```js
"2024/12/31"
```

##### monthOnly
Permet de récupérer la date en format mois/année
###### Return 
```js
"12/2024"
```

### log
> [!WARNING]
> Les fonctions logs font bientôt être migré vers un service à par entière. Il est donc conseiller de ne plus se baser entièrement sur cette fonction pour loguer ses services.
#### Constructor
| Parameter | Type | Description |
| :-------- | :--: | :---------- |
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
  let { log } = require('package')
  // ou pour les es modules //
  // import { CreateSignature, ServicesOptions  } from "signed-service" //
  let logs = new log(TokenService, "ADRESSMANAGER", path.resolve("src", "log")).UnknowAppError("mongodb", e)
```


#### UnknowRequestError
Les erreurs des services qui sont directement le routeur, les middleware, etc.

##### Paramètre d'entré :

| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `req` | `any` | La requête |
| `err` | `Error` | L'erreur en question |

##### *Exemple de d'utilisation*
```js
  let { log } = require('package')
  // ou pour les es modules //
  // import { CreateSignature, ServicesOptions  } from "signed-service" //

  try{
    // ...Code existant... //
  }catch(e){
    new log("ADRESSMANAGER", path.resolve("src", "log")).UnknowRequestError(req, e)
  }
```


#### ServiceInfo
Les information de services

##### Paramètre d'entré :

| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `service` | `string` | Le service in app en question |
| `info` | `string` | L'info|

##### *Exemple de d'utilisation*
```js
  let { log } = require('package')
  // ou pour les es modules //
  // import { CreateSignature, ServicesOptions  } from "signed-service" //

  try{
    // ...Code existant... //
    connect().then(() => {
      new log("ADRESSMANAGER", path.resolve("src", "log")).ServiceInfo("mongodb", "connected")
    })
  }catch(e){
    // ...Code existant... //
  }
```

### middleware
Plusieurs fonctions utilisé dans plusieurs services et utiles

#### catchSync
Catch asynchrome d'erreur

##### params 
Your express func (req, res, next)

### controleOrigine
Middleware qui permet de dire si le message fait parti d'un service ou de personne x

Si c'est personne x et que le NODE_ENV = Production alors l'utilisateur reçoit un 403.

Params à envoyer pour valider le middleware : trust dans le body ou le header.

### isAuth
Middleware qui vérifie si l'utilisateur est authentifié via son token (dans l'en-tête ou le body)

modifie les params `req.userID` et `req.isValidToken`

### ResponseProtocole
Middleware pour les erreurs à mettre dans un app.use à la fin de l'application

#### Params 
"logSys" dans les app params

### LogRequest
Fonction qui log les requêtes.

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
| IP_FINANCIAL              | `String` |
| NODE_ENV                  | `String` |
| URLDB                     | `String` |

#### serviceName
A array for actuals services
or
A object for actuals services

##### List of services 
| Titre               | Valeur           |
|:--------------------|:----------------:|
| financialsFlux      | `FINANCIALSFLUX` |
| utilisateur         | `UTILISATEUR`    |
| adress              | `ADRESSADMIN`    |
| mail                | `MAIL`           |
| api                 | `API`            |

#### inAppServiceName
| Titre    | Valeur     |
|:---------|:----------:|
| mongoose | `MONGOOSE` |
| index    | `INDEX`    |
| app      | `APP`      |

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
| `InvalidToken` | 498 |
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
  res.send(new ResponseException().UnknownError())
```

### Utils
#### intCheck
Cette fonction a pour but de vérifier si la variable donné est un nombre.

Retourne : `Boolean`

##### Paramètre d'entré :

| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `entityToCheck` | `any` | L'entité ou variable à vérifier |

##### *Exemple de d'utilisation*
```js
  let { Utils } = require('packages')
  // ou pour les es modules //
  // import { Utils } from "packages" //

  const { intCheck } = Utils

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
  let { Utils } = require('packages')
  // ou pour les es modules //
  // import { Utils } from "packages" //

  const { dateCheck } = Utils

  // ...Code existant... //
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
  let { Utils } = require('packages')
  // ou pour les es modules //
  // import { Utils } from "packages" //

  const { stringCheck } = Utils

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
  let { Utils } = require('packages')
  // ou pour les es modules //
  // import { Utils } from "packages" //

  const { emailCheck } = Utils

  // ...Code existant... //
  let mail = input()
  if(!emailCheck(mail)) alerte('entrez un email valide')
  else // ... //
```

<h1></h1>

#### FreePort
Vérifie le premier port libre

Retourne : `Number`

##### Paramètre d'entré :

| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `entityToCheck` | `any` | L'entité ou variable à vérifier |

##### *Exemple de d'utilisation*
```js
  let { Utils } = require('packages')
  // ou pour les es modules //
  // import { Utils } from "packages" //

  const { FreePort } = Utils

  // ...Code existant... //
  app.listen(await FreePort())
  else // ... //
```

<h1></h1>

#### isValidIP
Vérifie si l'ip est valide

Retourne : `Boolean`

##### Paramètre d'entré :

| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `ip` | `any` | L'entité ou variable à vérifier |

##### *Exemple de d'utilisation*
```js
  let { Utils } = require('packages')
  // ou pour les es modules //
  // import { Utils } from "packages" //

  const { isValidIP } = Utils

  // ...Code existant... //
  let ip = input()
  if(!isValidIP(ip)) alerte('entrez un ip valide')
  else // ... //
```

<h1></h1>

#### isValidMongooseId
Vérifie si l'id mongoose est valide

Retourne : `Boolean`

##### Paramètre d'entré :

| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `id` | `any` | L'entité ou variable à vérifier |

##### *Exemple de d'utilisation*
```js
  let { Utils } = require('packages')
  // ou pour les es modules //
  // import { Utils } from "packages" //

  const { isValidMongooseId } = Utils

  // ...Code existant... //
  let id = input()
  if(!isValidMongooseId(id)) alerte('entrez un id mongoose valide')
  else // ... //
```

<h1></h1>

#### isValidJSON
Vérifie si le json envoyé est valide

Retourne : `Boolean`

##### Paramètre d'entré :

| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `text` | `any` | L'entité ou variable à vérifier |

##### *Exemple de d'utilisation*
```js
  let { Utils } = require('packages')
  // ou pour les es modules //
  // import { Utils } from "packages" //

  const { isValidJSON } = Utils

  // ...Code existant... //
  let json = input()
  if(!isValidMongooseId(json)) alerte('entrez un json valide')
  else // ... //
```

<h1></h1>

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
  let { Utils } = require('packages')
  // ou pour les es modules //
  // import { Utils } from "packages" //

  const { stringContraint } = Utils

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
  let { Utils } = require('packages')
  // ou pour les es modules //
  // import { Utils } from "packages" //

  const { intContraint } = Utils

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
  let { Utils } = require('packages')
  // ou pour les es modules //
  // import { Utils } from "packages" //

  const { noNegativeNumberContraint } = Utils
  // ...Code existant... //
  let bankAccount = input()
  if(!noNegativeNumberContraint(bankAccount)) alerte('Désolé, vous êtes en faillite')
  else // ... //
```

<h1></h1>

#### noFutureDateContraint
Cette fonction a pour but de vérifier si la variable donné est une date passé ou présent

Retourne : `Boolean`

##### Paramètre d'entré :

|    Parameter    | Type  |           Description           |
| :-------------- | :---: | :------------------------------ | 
| `entityToCheck` | `any` | L'entité ou variable à vérifier |

##### *Exemple de d'utilisation*
```js
  let { Utils } = require('packages')
  // ou pour les es modules //
  // import { Utils } from "packages" //

  const { noFutureDateContraint } = Utils

  // ...Code existant... //
  let factureDate = input()

  // est vrai si le paramètre est une valeur int, ou format date (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) pour plus d'information
  if(!noFutureDateContraint(factureDate)) alerte('Désolé, vous ne pouvez pas entré une facture qui n\'est pas encore passé')
  else // ... //
```

<h1></h1>

#### noPastDateContraint
Cette fonction a pour but de vérifier si la variable donné est une date future ou présent

Retourne : `Boolean`

##### Paramètre d'entré :

|    Parameter    | Type  |           Description           |
| :-------------- | :---: | :------------------------------ | 
| `entityToCheck` | `any` | L'entité ou variable à vérifier |

##### *Exemple de d'utilisation*
```js
  let { Utils } = require('packages')
  // ou pour les es modules //
  // import { Utils } from "packages" //

  const { noPastDateContraint } = Utils

  // ...Code existant... //
  let factureDate = input()

  // est vrai si le paramètre est une valeur int, ou format date (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) pour plus d'information
  if(!noPastDateContraint(factureDate)) alerte('Désolé, vous ne pouvez pas entré une facture qui n\'est pas encore passé')
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
  let { Utils } = require('packages')
  // ou pour les es modules //
  // import { Utils } from "packages" //

  const { minWidthIntegerContraint } = Utils

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

[^1]: [Url du dépot `ts-dotenv`](https://www.npmjs.com/package/ts-dotenv)
[^2]: [Url du dépot `axios`](https://www.npmjs.com/package/axios)
[^3]: [Url du dépot `email-validator`](https://www.npmjs.com/package/email-validator)
[^4]: [Url du dépot `@commitlint/cli`](https://www.npmjs.com/package/@commitlint/cli)
[^5]: [Url du dépot `@commitlint/config-conventional`](https://www.npmjs.com/package/@commitlint/config-conventional)
[^6]: [Url du dépot `husky`](https://www.npmjs.com/package/husky)
