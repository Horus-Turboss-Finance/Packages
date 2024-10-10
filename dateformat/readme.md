<div align="center">
  <h1>Date formateur</h1>
  <h6>Fonction pour afficher la date en différent format.</h6>
</div>

### Table des matières
- [Packages](#packages)
- [Installation](#installation)
- [Documentation](#documentation)
    - [Timepiece](#timepiece)
      - [Paramètre d'entré :](#paramètre-dentré-)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation)


## Packages

- `checks` - repos voisin pour la vérification de type [^1].
- `constraint` - repos voisin pour des contraintes [^2].
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
    "dateformat": "file:YOUR/PATH/TO/dateformat"
    // Somes packages //
  },
```

## Documentation

#### Timepiece
Cette fonction a pour but d'afficher la date fournit en fonction du format choisit, la date et la langue

Retourne : `String`

##### Paramètre d'entré :

| Parameter | Type | Description | Défaut |
| :-------- | :--: | :---------- | :--: |
| `langue` | `string` | la langue souhaité | `fr` |
| `date` | `number` | La date en miliseconde | `NOW` |

##### *Exemple de d'utilisation*
```js
  let { Timepiece } = require('dateformat')
  // ou pour les es modules //
  // import { DateFormator, formatSelector  } from "dateformat" //

  // ...Code existant... //
  Transaction.add({
    Date : `${new Timepiece().shortTime()}` // 15:08
    //...//
  })
```

[^1]: [Url du dépot `checks`](../checks/readme.md)
[^2]: [Url du dépot `constraint`](../constraint/readme.md)
[^3]: [Url du dépot `typescript`](https://www.npmjs.com/package/typescript)