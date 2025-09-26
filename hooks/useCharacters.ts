import { fetchCharacters } from "@/api_service/rickAndMortyApi";
import { Character } from "@/types/api";
import { useEffect, useState } from "react";

export const useCharacters = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadCharacters = async () => {
            try {
                setLoading(true);
                const fetchedCharacters = await fetchCharacters();
                setCharacters(fetchedCharacters);
            } catch (err) {
                setError("Failed to fetch characters.");
            } finally {
                setLoading(false);
            }
        };

        loadCharacters();
    }, []);

    return { 
        characters, 
        loading, 
        error 
    };
};