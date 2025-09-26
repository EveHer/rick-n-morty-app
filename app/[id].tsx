import { CharacterDetailView } from '@/components/CharacterDetailView/CharacterDetailView';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useCharacterDetail } from '../hooks/useCharacterDetail';
import { styles } from './[id].styles';

export default function CharacterDetailScreen() {
  const { character, loading, error } = useCharacterDetail();

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (error || !character) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error || 'Character not found.'}</Text>
      </View>
    );
  }

  return <CharacterDetailView character={character} />;
}

