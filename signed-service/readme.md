<div align="center">
  <h1>Signed Service</h1>
  <h6>Fonction pour Authentifier un service.</h6>
</div>

### Table des matières
- [Packages](#packages)
- [Installation](#installation)
- [Documentation](#documentation)
    - [CreateSignature](#createsignature)
      - [Paramètre d'entré :](#paramètre-dentré-)
      - [Liste des format possible :](#liste-des-format-possible-)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation)
    - [CompareSignature](#comparesignature)
      - [Paramètre d'entré :](#paramètre-dentré--1)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-1)


## Packages

- `ts-dotenv` - Pour gérer les fichiers dotenv [^1].
- `bcryptjs` - Pour hasher correctement un mdp avec un sel [^2].
- `typescript` - langage pour javascript à l'échelle de l'application (ajoutant des typages) [^3].

> [!TIP]
> Le troisième packet est intéressant et je vous invite à aller le voir

## Installation

```shell
npm install PATH/TO/THIS/REPO
```

Or go to `package.json` file and add this :

```json
"dependencies": {
    // Somes packages //
    "signed-service": "file:YOUR/PATH/TO/signed-service"
    // Somes packages //
  },
```

## Documentation

#### CreateSignature
Cette fonction a pour but de signer un service et de lui donner un token d'utilisation (expiration au bout de 10s)

Retourne : `String`

##### Paramètre d'entré :

| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `service` | `ServicesOptions` | Le service à authentifier |

##### Liste des format possible :
| Name | Value | 
| :-------- | :--: |
| `AdressManager` | `ADRESSADMIN` |
| `User` | `UTILISATEUR` |
| `Mail` | `MAIL` |

##### *Exemple de d'utilisation*
```js
  let { CreateSignature, ServicesOptions } = require('signed-service')
  // ou pour les es modules //
  // import { CreateSignature, ServicesOptions  } from "signed-service" //

  // ...Code existant... //
  Transaction.send({
    token : `${CreateSignature(ServicesOptions.User)}` // 15:08
    //...//
  })
```

#### CompareSignature
Cette fonction a pour but de signer un service et de lui donner un token d'utilisation (expiration au bout de 10s)

Retourne : `String`

##### Paramètre d'entré :

| Parameter | Type | Description |
| :-------- | :--: | :---------- |
| `token` | `String` | Le token qui identifie un service |

##### *Exemple de d'utilisation*
```js
  let { CompareSignature } = require('signed-service')
  // ou pour les es modules //
  // import { CompareSignature  } from "signed-service" //

  // ...Code existant... //
  if(CompareSignature(req.body.token)) throw new ErrorResponse(403, "vous n'avez pas accès à cette route")
```

[^1]: [Url du dépot `ts-dotenv`](https://www.npmjs.com/package/ts-dotenv)
[^2]: [Url du dépot `bcryptjs`](https://www.npmjs.com/package/bcryptjs)
[^3]: [Url du dépot `typescript`](https://www.npmjs.com/package/typescript)