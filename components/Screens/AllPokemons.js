import React, {useState, useEffect} from 'react';
        import {
          View,
          Text,
          ScrollView,
          Image,
          TouchableOpacity,
          StyleSheet,
          TextInput,
        } from 'react-native';
        
        const AllPokemons = props => {
        const [pokemons, setPokemons] = useState([]);
        const [searchfeild, setSearchfeild] = useState('');
        
          useEffect(() => {
            fetchPokemons();
          }, []);
        
          const fetchPokemons = () => {
            fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000.jpg')
            //https://pokeapi.co/api/v2/pokemon/{id or name}
              .then(response => response.json())
              .then(pokemons => setPokemons(pokemons.results));
          };
        
          return (
            <View style={{backgroundColor: 'white'}}>
              <View style={styles.searchCont}>
                <TextInput
                  style={styles.searchfeild}
                  placeholder="Search Pokemons"
                  onChangeText={value => setSearchfeild(value)}
                  value={searchfeild}
                />
              </View>
              <ScrollView>
                <View style={styles.container}>
                  {pokemons
                    .filter(pokemon =>
                      pokemon.name.toLowerCase().includes(searchfeild.toLowerCase())
                    )
                    .map((pokemon, index) => {
                      return (
                        <TouchableOpacity
                          activeOpacity={0.5}
                          key={index}
                          style={styles.card}
                          onPress={() =>
                            props.navigation.navigate('Details', {
                              pokemon: pokemon.name,
                            })
                          }>
                        <View style={{flexDirection:'row'}}>
                          <Image
                            style={{width: 120, height: 120, resizeMode: 'contain' }}
                            source={{
                              uri: `http://img.pokemondb.net/artwork/${
                                pokemon.name
                              }.jpg`
                            }}
                          />
                        </View>
                          <Text style={styles.PokeNames}>{pokemon.name}</Text>
                        </TouchableOpacity>
                      );
                    })}
                </View>
              </ScrollView>
            </View>
          );
        };
        
        export default AllPokemons;
        
        const styles = StyleSheet.create({
          container: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: 50
          },
          PokeNames: {
            textTransform: 'capitalize',
            fontSize: 18,
            fontWeight: '500'
          },
          card: {
            display: 'flex',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            marginHorizontal: 20,
            marginVertical: 10,
          },
          searchCont: {
            position: 'absolute',
            marginBottom: 70,
            left: '20%',
            zIndex: 1,
            marginTop: 10,
          },
          searchfeild: {
            height: 40,
            borderWidth: 1,
            borderColor: '#000',
            backgroundColor: '#F2F2F2',
            textAlign: 'center',
            width: 250,
            borderRadius: 50,
          },
        });
