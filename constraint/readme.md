<div align="center">
  <h1>Constraint</h1>
  <h6>Fonctions de contrainte.</h6>
</div>

### Table des matières
- [Packages](#packages)
- [Installation](#installation)
- [Documentation](#documentation)
    - [stringContraint](#stringcontraint)
      - [Paramètre d'entré :](#paramètre-dentré-)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation)
    - [intContraint](#intcontraint)
      - [Paramètre d'entré :](#paramètre-dentré--1)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-1)
    - [noNegativeNumberContraint](#nonegativenumbercontraint)
      - [Paramètre d'entré :](#paramètre-dentré--2)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-2)
    - [noFutureDateContraint](#nofuturedatecontraint)
      - [Paramètre d'entré :](#paramètre-dentré--3)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-3)
    - [minWidthIntegerContraint](#minwidthintegercontraint)
      - [Paramètre d'entré :](#paramètre-dentré--4)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-4)
    - [escapeHtmlContraint](#escapehtmlcontraint)
      - [Paramètre d'entré :](#paramètre-dentré--5)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-5)


## Packages

- `checks` - repos voisin pour la vérification de type [^1].
- `typescript` - langage pour javascript à l'échelle de l'application (ajoutant des typages) [^2].

> [!TIP]
> Le deuxième packet est intéressant et je vous invite à aller le voir

## Installation

```shell
npm install PATH/TO/THIS/REPO
```

Or go to `package.json` file and add this :

```json
"dependencies": {
    // Somes packages //
    "constraint": "file:YOUR/PATH/TO/constraint"
    // Somes packages //
  },
```

## Documentation

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


[^1]: [Url du dépot `checks`](../checks/readme.md)
[^2]: [Url du dépot `typescript`](https://www.npmjs.com/package/typescript)