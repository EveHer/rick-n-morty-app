import { Character, CharacterApiResponse } from "../types/api";
const API_URL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async (): Promise<Character[]> => {
    try {
        const response = await fetch(`${API_URL}/character`);
        const data: CharacterApiResponse = await response.json();
        
        return data.results;
    } catch (error) {
        
        throw error;
    }
};  

