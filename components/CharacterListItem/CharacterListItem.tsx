import { Character } from "@/types/api";
import { Link } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./CharacterListItem.styles";

type CharacterListItemProps = {
    character: Character;
};

export const CharacterListItem = React.memo(({ character }: CharacterListItemProps) => {
    return (
        // <Link href={`/character/${character.id}`} asChild>
        <Link href={`/${character.id}`} asChild>
            <Pressable
                style={ styles.itemContainer }
            >
                <Image source={{ uri: character.image }} style={ styles.itemImage} />
                <View style={ styles.itemTextContainer }>
                    <Text style={ styles.itemName }>{character.name}</Text>
                    <Text style={ styles.itemSpecies }>{character.species}</Text>
                </View>
            </Pressable>
        </Link>
    );        
});