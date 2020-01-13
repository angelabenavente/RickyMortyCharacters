const CHARACTERSLIST = './data/data.json';

const fetchCharacters = () => fetch(CHARACTERSLIST).then(response => response.json());

export {fetchCharacters};
