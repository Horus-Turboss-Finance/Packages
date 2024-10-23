<div align="center">
  <h1>Params</h1>
  <h6>Toutes les variables ou fonction pour paramétrer un service.</h6>
</div>

### Table des matières
- [Packages](#packages)
- [Installation](#installation)
- [Documentation](#documentation)
    - [LoadEnv](#loadenv)
    - [Liste des variables dans "env"](#liste-des-variables-dans-env)


## Packages

- `ts-dotenv` - Pour gérer les fichiers dotenv [^1].
- `typescript` - langage pour javascript à l'échelle de l'application (ajoutant des typages) [^2].

## Installation

```shell
npm install PATH/TO/THIS/REPO
```

Or go to `package.json` file and add this :

```json
"dependencies": {
    // Somes packages //
    "params": "file:YOUR/PATH/TO/params"
    // Somes packages //
  },
```

## Documentation

#### LoadEnv
Cette fonction a pour but de charger les variables d'environnement dans la variable de packet "env"

#### Liste des variables dans "env"
| Titre                     | Type     |
|:--------------------------|:--------:|
| WEBHOOK_ERROR_FOR_DISCORD | `String` |
| IP_SERVICE_WHITELIST      | `String` |
| PORT_ADRESSMANAGER        | `Number` |
| IP_ADRESSMANAGER          | `String` |
| URLDB                     | `String` |

> [!NOTE] 
> IP_SERVICE_WHITELIST est une suite d'ip délimité par un ";", pour récupérer un tableau éxécutable, il faut donc faire un `env.IP_SERVICE_WHITELIST.split(';')`

[^1]: [Url du dépot `ts-dotenv`](https://www.npmjs.com/package/ts-dotenv)
[^2]: [Url du dépot `typescript`](https://www.npmjs.com/package/typescript)