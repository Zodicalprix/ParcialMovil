import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const urlBase = 'https://rickandmortyapi.com/api';  


  const getCharacters = () => {
    fetch(`${urlBase}/character`)  
      .then(response => response.json())
      .then(dataApi => setData(dataApi.results))  
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getCharacters();
  }, []);


  const renderItem = ({ item }) => (
    <View style={styles.containerCharacter}>
      <Image source={{ uri: item.image }} style={styles.characterImage} />
      <Text style={styles.characterName}>{item.name}</Text>
      <TouchableOpacity
        style={styles.viewButton}
        onPress={() => navigation.navigate('Detalles', { id: item.id })}
      >
        <Text style={styles.viewButtonText}>Ver</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}  
        columnWrapperStyle={styles.row}  
        style={styles.containerDataApi}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',  
    padding: 10,
  },
  containerDataApi: {
    marginTop: 10,
  },
  row: {
    justifyContent: 'space-between',  
  },
  containerCharacter: {
    backgroundColor: '#333',  
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
    flex: 1,  
    marginHorizontal: 5, 
    justifyContent: 'space-between',
  },
  characterImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,  
    borderColor: '#444',  
  },
  characterName: {
    fontSize: 18,
    color: '#E5E5E5',  
    marginTop: 10,
    textAlign: 'center',  
  },
  viewButton: {
    backgroundColor: '#555',  
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
    alignSelf: 'stretch',  
    alignItems: 'center',
    borderColor: '#777',  
    borderWidth: 1,
  },
  viewButtonText: {
    color: '#E5E5E5',  
    fontSize: 14,
  },
});
