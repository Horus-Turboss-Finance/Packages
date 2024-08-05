<div align="center">
  <h1>Checks</h1>
  <h6>Fonctions de vérifications.</h6>
</div>

### Table des matières
- [Packages](#packages)
- [Installation](#installation)
- [Documentation](#documentation)
    - [intCheck](#intcheck)
      - [Paramètre d'entré :](#paramètre-dentré-)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation)
    - [dateCheck](#datecheck)
      - [Paramètre d'entré :](#paramètre-dentré--1)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-1)
    - [stringCheck](#stringcheck)
      - [Paramètre d'entré :](#paramètre-dentré--2)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-2)
    - [emailCheck](#emailcheck)
      - [Paramètre d'entré :](#paramètre-dentré--3)
      - [*Exemple de d'utilisation*](#exemple-de-dutilisation-3)


## Packages

- `email-validator` - Un merveilleux outil pour valider les adresses e-mail [^1].
- `typescript` - langage pour javascript à l'échelle de l'application (ajoutant des typages) [^2].

> [!TIP]
> Les deux packets sont intéressant et je vous invite à aller les voir

## Installation

```shell
npm install PATH/TO/THIS/REPO
```

Or go to `package.json` file and add this :
```json
"dependencies": {
    // Somes packages //
    "checks": "file:YOUR/PATH/TO/checks"
    // Somes packages //
  },
```

## Documentation

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


[^1]: [Url du dépot `email-validator`](https://www.npmjs.com/package/email-validator)
[^2]: [Url du dépot `typescript`](https://www.npmjs.com/package/typescript)