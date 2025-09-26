import { CharacterList } from "@/components/CharacterList/CharacterList";
import { useCharacters } from "@/hooks/useCharacters";
import React from "react";
import { Text, View } from "react-native";

export default function Index() {
  const { characters, loading, error } = useCharacters();

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return <CharacterList characters={characters} />;
}
