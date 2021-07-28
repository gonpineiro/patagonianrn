<b>[StyleSheet.create](https://reactnative.dev/docs/stylesheet)</b> : Calcula una sola vez las medidas en pixeles y lo deja estático

```javascript
const styles = StyleSheet.create({});
```

<hr>

<b>defaultProps</b> : Define propiedades por defecto </br>

```javascript
DefaultButton.defaultProps = {
  additionalStyle: {},
  msg: 'Press me',
};
```

<hr>

<b>[ViewStyle](https://reactnative.dev/docs/view-style-props)</b> : Propieades del estilos de las views </br>

```typescript
interface Props {
  additionalStyle?: ViewStyle;
}
```

<hr>

#### [Husky](https://typicode.github.io/husky/#/)

1. Install

```console
  npm install husky@3.0.9 
  npm install lint-staged --save-dev
```

2. Agregar el siguente comandos

```console
"check-ts": "tsc --watch --noEmit --skipLibCheck"
```

3. Agregamos el siguente objeto dentro del package.json

```json
"husky": {
    "hooks": {
      "pre-commit": "tsc --noEmit --skipLibCheck && lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx,json}": [
      "prettier \"src/**/*.{js,jsx,json,tsx,ts}\" --write",
      "eslint '*/**/*.{js,ts,tsx}' --quiet --fix"
    ]
  },
```

<hr>

#### Buenas practicas

<b>Booleanos:</b>

- Adjetivo
- Verbo + adjetivo
- Verbo + condición cumplida

```javascript
const disabled = true; // Good
const dog = true; // Bad
const isDog = true; // Good

// BAD:
const hasMoreThanNineteen = p.length > 19;
const loadNotPermitted = p.length > 80;
const canFly = hasMoreThanNineteen && !loadNotPermitted && !controlTowerHasNotAuthorized;

// GOOD
const hasMinimumPassagers = passenger.length >= 20;
const exceedsMaximumPassengers = passenger.length > 80;
const isReadyToFly = hasMinimumPassagers && !exceedsMaximumPassengers && isAuthorized;
```

<b>DRYing the Code:</b>

```javascript
const hasMinimumPassagers = passenger.length >= 20;
const exceedsMaximumPassengers = passenger.length > 80;
const isReadyToFly = hasMinimumPassagers && !exceedsMaximumPassengers && isAuthorized;

/* DRYing */

const passengerCount = passenger.length;
const hasMinimumPassagers = passengerCount >= 20;
const exceedsMaximumPassengers = passengerCount > 80;
const isReadyToFly = hasMinimumPassagers && !exceedsMaximumPassengers && isAuthorized;
```

<b>Arrays:</b> Siempre usar nombres en plural y sustantivos

```javascript
const passenger = [];
const crew = []; // BAD
const crewMembers = []; // GOOD

const crew = {
  id: '23',
  flight: 'AA123',
  members: crewMembers,
};

const passengers = 20; // BAD
const passengers = passenger.length; // BAD
const passengersCount = passenger.length; // GOOD

const passengers = ['jonh', 'jim', 'kelly', 'jennifer']; // BAD
const passengersNames = ['jonh', 'jim', 'kelly', 'jennifer']; // GOOD
```

<b>Objetos:</b> Siempre usar nombres en singular y sustantivos

```javascript
const flight = {
  id: 'ABC1234',
  origin: 'CLO',
  destination: 'GNR',
};

const plane = {
  id: 'ABC1234',
  manufacturer: 'airbus',
  capacity: 200, // BAD
  passengetCapacity: 200,
};
```

<b>Funciones:</b> Debe tener un unico objetivo, <i>Single Responsibility</i>

- Siempre iniciar con un verbose
- Verbo solo (ej: si es una propiedad de una clase / Objeto / prototio)
- Verbo + Sustantivo (Regla General)

```javascript
passengers.find((passenger) => {});
passengers.splice(3, 1);

const add = (data) => {
  passengers.push(data);
}; // BAD
const addNewPassenger = (passenger) => {
  passengers.push(passenger);
}; // GOOD

const getPassengersData = () => {};
const gerCrewData = () => {};
const makePlaneFly = () => {};
const makePlaneCrash = () => {};
```

<b>Componentes de React:</b>

- Siempre deben empezar con mayúsculas y deben ser sustantivos
- Lo mismo aplica para el nombre del archivo.
- También aplica para el nombre de la carpeta que lo contiene
- Idealmente el nombre del componente debe ser el mismo del archivo y el mismo de la carpeta

<b>Otras recomendaciones:</b>

- En lo posible el código debe leer de arriba hacia abajo
- Asignaion consistente de variables

```javascript
const foo = isValid ? 'Hello' : 123;
```

- En lo posible, no anidar expresiones ternarias

```javascript
const foo = conditionA = 'x' : conditionB ? 'y' : 'z';
```

- Configurar ESLint, TSLint, Prettier, editorconfig, Husky y demas extensiones para estandarizar el código en los proyectos
