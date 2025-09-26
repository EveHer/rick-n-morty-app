import { Character } from "@/types/api";
import React from "react";
import { Text, View } from "react-native";

type CharacterListItemProps = {
    character: Character;
};

export const CharacterListItem = React.memo(({ character }: CharacterListItemProps) => {
    return (
        <View>
            <Text> 
                '{character.name}' - {character.species}
            </Text>
        </View>
    );        
});