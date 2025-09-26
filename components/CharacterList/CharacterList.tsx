import { Character } from "@/types/api";
import { FlatList, View } from "react-native";
import { CharacterListItem } from "../CharacterListItem/CharacterListItem";

type CharacterListProps = {
    characters: Character[];
};

export const CharacterList = ({ characters }: CharacterListProps) => {
    return (
        <View>
            <FlatList
                data={characters}
                renderItem={({ item }) => <CharacterListItem character={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};