const CHARACTERSLIST = 'https://rickandmortyapi.com/api/character/?page=19';

const SINGLECHARACTER = 'https://rickandmortyapi.com/api/character/'

const fetchCharacters = () => fetch(CHARACTERSLIST).then(response => response.json());

const fetchCharacterId = id => fetch(SINGLECHARACTER+id).then(response => response.json());



export {fetchCharacters, fetchCharacterId};

