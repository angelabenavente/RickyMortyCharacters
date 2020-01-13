const CHARACTERSLIST = './data/data.json';

const SINGLECHARACTER = `./data/data.json`

const fetchCharacters = () => fetch(CHARACTERSLIST).then(response => response.json());

const fetchCharacterId = id => fetch(SINGLECHARACTER+id).then(response => response.json());


export {fetchCharacters, fetchCharacterId};
