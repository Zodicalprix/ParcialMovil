import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Detalles() {
  const route = useRoute();
  const { id } = route.params;  
  const [character, setCharacter] = useState(null);  

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((json) => setCharacter(json))  
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <View style={styles.container}>
      {character ? (
        <>
          <Image source={{ uri: character.image }} style={styles.characterImage} />
          <Text style={styles.characterName}>{character.name}</Text>
          <Text style={styles.characterDetails}>Estado: {character.status}</Text>
          <Text style={styles.characterDetails}>Especie: {character.species}</Text>
          <Text style={styles.characterDetails}>Género: {character.gender}</Text>
          <Text style={styles.characterDetails}>Origen: {character.origin.name}</Text>
          <Text style={styles.characterDetails}>Ubicacion: {character.location.name}</Text>
        </>
      ) : (
        <Text style={styles.loadingText}>Cargando detalles...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1C1C1C',  
    alignItems: 'center',
    justifyContent: 'center',
  },
  characterImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#444',  
  },
  characterName: {
    fontSize: 28,  
    color: '#E5E5E5', 
    marginBottom: 10,
  },
  characterDetails: {
    fontSize: 18,
    color: '#C0C0C0',  
    marginBottom: 5,
    textAlign: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#E5E5E5',  
  },
});
