import { fetchCharacterById } from "@/api_service/rickAndMortyApi";
import { Character } from "@/types/api";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export const useCharacterDetail = () => {
    const {id} = useLocalSearchParams();
    const [character, setCharacter] = useState<Character | null> (null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id && typeof id === 'string') {
            const loadCharacter = async () => {
                try {
                    setLoading(true);
                    const characterId = parseInt(id, 10);
                    const fetchedCharacter = await fetchCharacterById(characterId);
                    setCharacter(fetchedCharacter);
                } catch (err) {
                    setError("Failed to fetch character details.");
                } finally {
                    setLoading(false);
                }

            };
            loadCharacter();
        } else {
            setError("Invalid character ID.");
            setLoading(false);
        }
    }, [id]);

    return { character, loading, error };
};