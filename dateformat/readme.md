<div align="center">
  <h1>Date formateur</h1>
  <h6>Fonction pour afficher la date en différent format.</h6>
</div>

### Table des matières
- [Packages](#packages)
- [Installation](#installation)
- [Documentation](#documentation)
    - [DateFormator](#dateformator)
      - [Paramètre d'entré :](#paramètre-dentré-)
      - [Liste des format possible :](#liste-des-format-possible-)
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

#### DateFormator
Cette fonction a pour but d'afficher la date fournit en fonction du format choisit

Retourne : `String`

##### Paramètre d'entré :

| Parameter | Type | Description | Défaut |
| :-------- | :--: | :---------- | :--: |
| `format` | `formatSelector` | Le format de sortie | &#9744; |
| `DateSelector` | `number` | La date en miliseconde | `NOW` |

##### Liste des format possible :
| Name | Value | 
| :-------- | :--: |
| `relative` | `RELATIVE` |
| `shortTime` | `SHORT_TIME` |
| `longTime` | `LONG_TIME` |
| `shortDate` | `SHORT_DATE` |
| `longDate` | `LONG_DATE` |
| `dateWithTime` | `DATE_WITH_TIME` |
| `dateWithTimeAndDay` | `DATE_WITH_TIME_AND_DAY` |

##### *Exemple de d'utilisation*
```js
  let { DateFormator, formatSelector } = require('dateformat')
  // ou pour les es modules //
  // import { DateFormator, formatSelector  } from "dateformat" //

  // ...Code existant... //
  Transaction.add({
    Date : `${DateFormator(formatSelector.shortTime)}` // 15:08
    //...//
  })
```

[^1]: [Url du dépot `checks`](../checks/readme.md)
[^2]: [Url du dépot `constraint`](../constraint/readme.md)
[^3]: [Url du dépot `typescript`](https://www.npmjs.com/package/typescript)