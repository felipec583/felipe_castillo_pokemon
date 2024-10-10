const tablaTipos = {
  Insecto: {
    superEfectivo: ["Planta", "Psíquico", "Oscuro"],
    noMuyEfectivo: [
      "Fuego",
      "Pelea",
      "Veneno",
      "Volador",
      "Fantasma",
      "Acero",
      "Hada",
    ],
    debilContra: ["Fuego", "Volador", "Roca"],
  },
  Oscuro: {
    superEfectivo: ["Fantasma", "Psíquico"],
    noMuyEfectivo: ["Oscuro", "Hada", "Pelea"],
    debilContra: ["Pelea", "Insecto", "Hada"],
  },
  Dragón: {
    superEfectivo: ["Dragón"],
    noMuyEfectivo: ["Acero", "Hada (nulo)"],
    debilContra: ["Hielo", "Dragón", "Hada"],
  },
  Eléctrico: {
    superEfectivo: ["Volador", "Agua"],
    noMuyEfectivo: ["Dragón", "Eléctrico", "Planta", "Tierra (nulo)"],
    debilContra: ["Tierra"],
  },
  Hada: {
    superEfectivo: ["Oscuro", "Dragón", "Pelea"],
    noMuyEfectivo: ["Fuego", "Veneno", "Acero"],
    debilContra: ["Veneno", "Acero"],
  },
  Pelea: {
    superEfectivo: ["Oscuro", "Hielo", "Acero", "Normal", "Roca"],
    noMuyEfectivo: [
      "Insecto",
      "Hada",
      "Veneno",
      "Psíquico",
      "Volador",
      "Fantasma (nulo)",
    ],
    debilContra: ["Volador", "Psíquico", "Hada"],
  },
  Fuego: {
    superEfectivo: ["Insecto", "Planta", "Acero", "Hielo"],
    noMuyEfectivo: ["Dragón", "Fuego", "Agua", "Roca"],
    debilContra: ["Agua", "Tierra", "Roca"],
  },
  Volador: {
    superEfectivo: ["Insecto", "Planta", "Pelea"],
    noMuyEfectivo: ["Eléctrico", "Roca", "Acero"],
    debilContra: ["Eléctrico", "Hielo", "Roca"],
  },
  Fantasma: {
    superEfectivo: ["Fantasma", "Psíquico"],
    noMuyEfectivo: ["Oscuro", "Normal (nulo)"],
    debilContra: ["Fantasma", "Oscuro"],
  },
  Planta: {
    superEfectivo: ["Tierra", "Roca", "Agua"],
    noMuyEfectivo: [
      "Volador",
      "Veneno",
      "Insecto",
      "Acero",
      "Fuego",
      "Planta",
      "Dragón",
    ],
    debilContra: ["Volador", "Veneno", "Insecto", "Fuego", "Hielo"],
  },
  Tierra: {
    superEfectivo: ["Eléctrico", "Fuego", "Roca", "Acero", "Veneno"],
    noMuyEfectivo: ["Insecto", "Planta", "Volador (nulo)"],
    debilContra: ["Planta", "Hielo", "Agua"],
  },
  Hielo: {
    superEfectivo: ["Dragón", "Planta", "Tierra", "Volador"],
    noMuyEfectivo: ["Fuego", "Hielo", "Acero", "Agua"],
    debilContra: ["Fuego", "Pelea", "Roca", "Acero"],
  },
  Normal: {
    superEfectivo: [],
    noMuyEfectivo: ["Acero", "Roca", "Fantasma (nulo)"],
    debilContra: ["Pelea"],
  },
  Veneno: {
    superEfectivo: ["Planta", "Hada"],
    noMuyEfectivo: ["Veneno", "Tierra", "Roca", "Fantasma", "Acero (nulo)"],
    debilContra: ["Tierra", "Psíquico"],
  },
  Psíquico: {
    superEfectivo: ["Pelea", "Veneno"],
    noMuyEfectivo: ["Psíquico", "Acero", "Oscuro (nulo)"],
    debilContra: ["Insecto", "Oscuro", "Fantasma"],
  },
  Roca: {
    superEfectivo: ["Insecto", "Fuego", "Hielo", "Volador"],
    noMuyEfectivo: ["Tierra", "Pelea", "Acero"],
    debilContra: ["Pelea", "Tierra", "Acero", "Agua", "Planta"],
  },
  Acero: {
    superEfectivo: ["Hada", "Hielo", "Roca"],
    noMuyEfectivo: ["Eléctrico", "Fuego", "Acero", "Agua"],
    debilContra: ["Fuego", "Pelea", "Tierra"],
  },
  Agua: {
    superEfectivo: ["Fuego", "Roca", "Tierra"],
    noMuyEfectivo: ["Dragón", "Planta", "Agua"],
    debilContra: ["Eléctrico", "Planta"],
  },
};

const entrenadores = [
  {
    nombre: "Entrenador 1",
    equipo: [
      { nombre: "Charizard", nivel: 25, tipo: "Fuego" },
      { nombre: "Blastoise", nivel: 22, tipo: "Agua" },
      { nombre: "Venusaur", nivel: 28, tipo: "Planta" },
      { nombre: "Pikachu", nivel: 30, tipo: "Eléctrico" },
      { nombre: "Machamp", nivel: 27, tipo: "Pelea" },
      { nombre: "Gengar", nivel: 26, tipo: "Fantasma" },
    ],
  },
  {
    nombre: "Entrenador 2",
    equipo: [
      { nombre: "Typhlosion", nivel: 29, tipo: "Fuego" },
      { nombre: "Feraligatr", nivel: 32, tipo: "Agua" },
      { nombre: "Meganium", nivel: 33, tipo: "Planta" },
      { nombre: "Raichu", nivel: 34, tipo: "Eléctrico" },
      { nombre: "Lucario", nivel: 31, tipo: "Pelea" },
      { nombre: "Mimikyu", nivel: 35, tipo: "Fantasma" },
    ],
  },
  {
    nombre: "Entrenador 3",
    equipo: [
      { nombre: "Arcanine", nivel: 36, tipo: "Fuego" },
      { nombre: "Swampert", nivel: 37, tipo: "Agua" },
      { nombre: "Sceptile", nivel: 38, tipo: "Planta" },
      { nombre: "Electivire", nivel: 39, tipo: "Eléctrico" },
      { nombre: "Gallade", nivel: 40, tipo: "Pelea" },
      { nombre: "Banette", nivel: 41, tipo: "Fantasma" },
    ],
  },
  {
    nombre: "Entrenador 4",
    equipo: [
      { nombre: "Infernape", nivel: 42, tipo: "Fuego" },
      { nombre: "Empoleon", nivel: 43, tipo: "Agua" },
      { nombre: "Torterra", nivel: 44, tipo: "Planta" },
      { nombre: "Luxray", nivel: 45, tipo: "Eléctrico" },
      { nombre: "Conkeldurr", nivel: 46, tipo: "Pelea" },
      { nombre: "Cofagrigus", nivel: 47, tipo: "Fantasma" },
    ],
  },
  {
    nombre: "Entrenador 5",
    equipo: [
      { nombre: "Blaziken", nivel: 48, tipo: "Fuego" },
      { nombre: "Samurott", nivel: 49, tipo: "Agua" },
      { nombre: "Serperior", nivel: 50, tipo: "Planta" },
      { nombre: "Zebstrika", nivel: 51, tipo: "Eléctrico" },
      { nombre: "Mienshao", nivel: 52, tipo: "Pelea" },
      { nombre: "Chandelure", nivel: 53, tipo: "Fantasma" },
    ],
  },
];

/* Se creó una función aparte para juntar todos los pokemones
  de cada entrenador en un solo array de objetos */
function flattenedPokemonArr(arr) {
  return arr.reduce((acc, { equipo }) => {
    acc.push(...equipo);
    return acc;
  }, []);
}
/* ******************************************************************************** */

// Primer desafío
function getLowestAndHighestPokemonLevel(data) {
  if (data.length < 1) return "Empty data";
  const pokemon = flattenedPokemonArr(data);
  const [firstPkmn, ...rest] = pokemon.sort((a, b) => a.nivel - b.nivel);
  const lastPkmn = rest.pop();
  return [firstPkmn, lastPkmn];
}
getLowestAndHighestPokemonLevel(entrenadores);
// Segundo desafío
function searchPokemon(pokemon) {
  const pkmn = flattenedPokemonArr(entrenadores);
  if (!pokemon) return "You must enter a string";
  return pkmn.filter((pkmn) => pkmn.nombre.toLowerCase().includes(pokemon));
}
const foundPokemon = searchPokemon("blast");
// Tercer desafío
function sortPokemonTypesByLevelDesc(arr) {
  const pokemonSortedByType = [...arr].reduce((acc, { nivel, tipo }) => {
    if (!acc[tipo]) acc[tipo] = 0;
    acc[tipo] += nivel;
    return acc;
  }, {});
  const getLevelAverage = Object.entries(pokemonSortedByType).map(
    ([tipo, value]) => [tipo, value / 5]
  );
  return getLevelAverage.sort(([c, a], [t, b]) => b - a);
}
const pokemonTypesSortedByLevel = sortPokemonTypesByLevelDesc(
  flattenedPokemonArr(entrenadores)
);
// Se menciona un cuarto desafío pero no se encuentra en el documento.

