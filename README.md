# PokeReact

PokeReact es un proyecto personal que clona las mecánicas de combate de la franquicia "Pokémon" utilizando el framework React.js y TailWind CSS.
Puede ver el deploy del proyecto en [PokeReact](https://poke-react-jb.netlify.app/)

## ¿Cómo funciona?

Se seleccionan 2 criaturas del listado de pokémons traidos de la API pública [PokeApi](https://pokeapi.co/) para ser usados en combate.
Ya en la pelea se efectuan ataques (por el momento solo se usan ataques de daño, aún no está implementado un sistema de modificación de estados de un pokémon) y hacen distinto daño dependiendo el tipo, daño, defensa y nivel del pokémon y el ataque.
Puede ver esta fórmula más a detalle [aquí](https://www.pokexperto.net/index2.php?seccion=mecanica/formula_ataque_rze).
El primer pokémon que queda en 0 de vida pierde y se vuelve al apartado de selección de pokémon para realizar otro combate si así se desea.

## Instalación:

### `npm i`

Para instalar los paquetes necesarios de Node.js

### `npm install -D tailwindcss`

Instala TailWind CSS en nuestro proyecto.

### `npm install react-router-dom@6`

React dom para hacer el enrutamiento hacia las distintas páginas.

## Créditos y licencias

- © 2022 Pokémon. © 1995–2022 Nintendo/Creatures Inc./GAME FREAK inc. Pokémon, el nombre de los personajes de Pokémon, Nintendo Switch, Nintendo 3DS, Nintendo DS, Wii, Wii U, y WiiWare son marcas registradas de [Nintendo](https://www.pokemon.com/el/informacion-legal/).

- [PokeApi](https://pokeapi.co/): La base de datos pública utilizada en el proyecto

- [Pokexperto](https://www.pokexperto.net/index2.php?seccion=mecanica/formula_ataque_rze): para el análisis de la formula de ataque.
