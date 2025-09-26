
import { Character } from "@/types/api";
import { Stack } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./CharacterViewDetails.styles";

const InfoSection = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.infoBlock}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

type CharacterDetailViewProps = {
  character: Character;
};

export const CharacterDetailView = ({ character }: CharacterDetailViewProps) => {

    const statusColor = character.status === 'Alive' ? '#10B981' : character.status === 'Dead' ? '#EF4444' : '#6B7280';

    return (
    <ScrollView contentContainerStyle={styles.container}>
        <Stack.Screen options={{ title: character.name, headerBackTitle: 'Back' }} />

        <Image source={{ uri: character.image }} style={styles.image} />
        <View style={styles.detailsContainer}>
        <Text style={styles.name}>{character.name}</Text>

        <View style={styles.infoRow}>
            <View style={[styles.statusIndicator, { backgroundColor: statusColor }]} />
            <Text style={styles.statusText}>
            {character.status} - {character.species}
            </Text>
        </View>

        <InfoSection label="Gender" value={character.gender} />
        <InfoSection label="Origin" value={character.origin.name} />
        <InfoSection label="Last Known Location" value={character.location.name} />

        <Text style={styles.sectionTitle}>
            Appeared in {character.episode.length} episodes
        </Text>
        </View>
    </ScrollView>
    );
};