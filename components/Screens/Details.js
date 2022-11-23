import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';

const Details = ({route, navigation}) => {
  const [details, setDetails] = useState([]);
  const [type, setType] = useState(null);

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  const fetchPokemonDetails = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.pokemon}`)
      .then(res => res.json())
      .then(details => {
        setDetails(details);
        return details;
      })
      .then(details => setType(details.types[0].type.name));
  };
    return details.name ? (
      <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
        <Image
          style={styles.image}
          source={{
            uri: `https://img.pokemondb.net/artwork/large/${details.name}.jpg`,
          }}
        />
  
        <Text style={styles.text}>Name: {details.name}</Text>
        <Text style={styles.text}>Height: {details.height}</Text>
        <Text style={styles.text}>Weight: {details.weight}</Text>
        <Text style={styles.text}>
          Ability: {details.abilities[0].ability.name}
        </Text>
        <Text style={styles.text}>Type: {details.types[0].type.name}</Text>
      </View>
    ) : (
      <View style={styles.indicator}>
        <ActivityIndicator size="large" color="#E63F34" />
      </View>
    );
  };
  
export default Details;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: 10
  },
  text: {
    textTransform: 'capitalize',
    fontSize: 22,
    marginBottom: 15,
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
