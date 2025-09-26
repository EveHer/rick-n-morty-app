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
}
