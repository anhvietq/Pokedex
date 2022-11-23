import React from 'react';
import { ImageBackground, 
        StyleSheet, 
        Text, 
        View, 
        Image,
        TextInput,
        ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Generations from './Generations';

const HomeScreen = () => {
    return (
        <ScrollView>
        <View>
        <ImageBackground style={styles.HeaderImage} 
        source= {require('/Users/anhpham/Desktop/Expo/PokeDex/assets/images/Header.png')}>
        <Text style={styles.TextHeader}>Pokédex</Text>
        <Image
        style ={styles.PokeballLogo}
        source = {require('/Users/anhpham/Desktop/Expo/PokeDex/assets/images/PokeBall1.png')}/>
        <Text style = {styles.SearchText}>Search for Pokémon by name or by type</Text>
       <View style={styles.SearchSection}> 
       <FontAwesome style={styles.SearchIcon} name="search" size={20} color="#747476"/>
       <TextInput
        style={styles.input}
        placeholder="What Pokémon are you looking for?"/>
        </View>
        </ImageBackground>
        <Generations style={styles.Generationsboxes}/>
        </View>
        </ScrollView>
        );
};

export default HomeScreen;

const styles = StyleSheet.create({
HeaderImage: {
    width: '100%',
},
TextHeader: {
    marginTop: 50,
    fontWeight: '700',
    fontSize: 32,
    marginLeft: 75,
},
PokeballLogo: {
    width: 30,
    height: 30,
    flexDirection: 'row',
    marginTop: -32.5,
    marginLeft: 40,
},

SearchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderColor: '#dddcdce4',
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    marginBottom: 15,
},
SearchIcon: {
    padding: 10,
    paddingBottom: 10
},
input: {
    flex: 1,
    paddingRight: 10,
    color: '#424242',
    fontSize: 16
},
SearchText: {
    marginTop: 10,
    marginLeft: 40,
    fontSize: 16
},

    
  });