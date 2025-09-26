import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        marginVertical: 6,
        marginHorizontal: 12,
    },
    listContentContainer: {
        paddingBottom: 20,
    },
    itemImage: {
        width: 100,
        height: 100,
        borderRadius: 16,
    },
    itemTextContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemSpecies: {
        fontSize: 14,
        color: '#666',
    },
}); 