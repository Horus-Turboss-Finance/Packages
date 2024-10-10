<div align="center">
  <h1>Error Handler</h1>
  <h6>Class pour répondre de manière normalisé peu importe le service.</h6>
</div>

### Table des matières
- [Installation](#installation)
- [Documentation](#documentation)
    - [ResponseException](#responseexception)
      - [Paramètre d'entré :](#paramètre-dentré-)
      - [Liste des format possible :](#liste-des-format-possible-)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation)


## Installation

```shell
npm install PATH/TO/THIS/REPO
```

Or go to `package.json` file and add this :

```json
"dependencies": {
    // Somes packages //
    "signed-service": "file:YOUR/PATH/TO/error-handler"
    // Somes packages //
  },
```

## Documentation

#### ResponseException
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