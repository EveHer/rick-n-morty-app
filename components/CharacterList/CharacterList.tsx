import { Character } from "@/types/api";
import { FlatList, View } from "react-native";
import { CharacterListItem } from "../CharacterListItem/CharacterListItem";
import { styles } from "./CharacterList.styles";

type CharacterListProps = {
    characters: Character[];
};

export const CharacterList = ({ characters }: CharacterListProps) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={characters}
                renderItem={({ item }) => <CharacterListItem character={item} />}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContentContainer}
            />
        </View>
    );
};