import React from 'react';
import { StyleSheet, 
        Text, 
        View, 
        Image,
        ImageBackground, 
        ScrollView,
        TouchableOpacity,
        } from 'react-native';
import {colors, backgroundColors} from '../../assets/colors';
import ExploreGen1 from './ExploreGen1';
import ExploreGen2 from './ExploreGen2';


const Generations = () => {
    return (
        <ScrollView>
        <View>
        <Image style={styles.HeaderImage} 
        source= {require('/Users/anhpham/Desktop/Expo/PokeDex/assets/images/Header.png')}/>
{/*GENERATION I*/}
        <Text style={styles.GenerationHeaders}>Generation I</Text>
        <TouchableOpacity
        onPress={() => alert('clicked')} >
        <View style={{...styles.Generation1, backgroundColor: backgroundColors['grass']}}>
        <ImageBackground
         style={styles.Pattern}  
        source= {require('/Users/anhpham/Desktop/Expo/PokeDex/assets/images/Pattern.png')}/>
{/*Bulbasaur*/}
        <Text style={styles.PokeNumbers}>#001</Text>
        <Text style={styles.PokeNames}>Bulbasaur</Text> 
{/*Badges*/}
        <View style={{flexDirection:'row'}}>
        <View 
        style={{...styles.PokeTypes, 
        backgroundColor: colors['grass']}}>
        <Image style = {styles.PokeTypesLogo}
        source={require('../../assets/images/PokeTypes/Grass.png')}/>
        <Text style={styles.PokeTypesText}>Grass</Text>
        </View>
        <View style={{...styles.PokeTypes,backgroundColor: colors['poison']}}>
        <Image style = {styles.PokeTypesLogo}
        source={require('../../assets/images/PokeTypes/Poison.png')}/>
        <Text style={styles.PokeTypesText}>Poison</Text>
        </View>
        </View>
        <Image 
        style={styles.Gen1Starter}
        source = {require('../../assets/images/Gen1/01.png')}/>
        </View>
        </TouchableOpacity>
{/*Charmander*/}
        <TouchableOpacity>
        <View style={{...styles.Generation1, backgroundColor: backgroundColors['fire']}}>  
        <ImageBackground
        style={styles.Pattern}  
        source= {require('/Users/anhpham/Desktop/Expo/PokeDex/assets/images/Pattern.png')}/>
        <Text style={styles.PokeNumbers}>#004</Text>
        <Text style={styles.PokeNames}>Charmander</Text>
{/*Badges*/}
    <View style={{...styles.PokeTypes, 
        backgroundColor: colors['fire']}}>
     <Image style = {styles.PokeTypesLogo}
        source={require('../../assets/images/PokeTypes/Fire.png')}/>
        <Text style={styles.PokeTypesText}>Fire</Text>
    </View>
        <Image
        style={styles.Gen1Starter}
        source = {require ('../../assets/images/Gen1/04.png')}/>
        </View>
        </TouchableOpacity>
{/*Squirtle*/}  
        <TouchableOpacity>
        <View style={{...styles.Generation1, backgroundColor: backgroundColors['water']}}> 
        <ImageBackground
        style={styles.Pattern}  
        source= {require('/Users/anhpham/Desktop/Expo/PokeDex/assets/images/Pattern.png')}/>
        <Text style={styles.PokeNumbers}>#007</Text>
        <Text style={styles.PokeNames}>Squirtle</Text>
{/*Badges*/}
        <View style={{...styles.PokeTypes, 
        backgroundColor: colors['water']}}>
         <Image style = {styles.PokeTypesLogo}
        source={require('../../assets/images/PokeTypes/Water.png')}/>
          <Text style={styles.PokeTypesText}>Water</Text>
        </View>
        <Image
        style={styles.Gen1Starter}
        source = {require ('../../assets/images/Gen1/07.png')}/>
        </View>
        </TouchableOpacity>
{/*The rest of the Generation 1 Pokemons*/}
        <ExploreGen1/>
{/*GENERATION II*/}
        <Text style={styles.GenerationHeaders}>Generation II</Text>
        <TouchableOpacity>
        <View style={{...styles.Generation1, backgroundColor: backgroundColors['grass']}}>
        <ImageBackground
         style={styles.Pattern}  
        source= {require('/Users/anhpham/Desktop/Expo/PokeDex/assets/images/Pattern.png')}/>
{/*Chikorita*/}
        <Text style={styles.PokeNumbers}>#152</Text>
        <Text style={styles.PokeNames}>Chikorita</Text> 
{/*Badges*/}
        <View style={{flexDirection:'row'}}>
        <View 
        style={{...styles.PokeTypes, 
        backgroundColor: colors['grass']}}>
        <Image style = {styles.PokeTypesLogo}
        source={require('../../assets/images/PokeTypes/Grass.png')}/>
        <Text style={styles.PokeTypesText}>Grass</Text>
        </View>
        </View>
        <Image 
        style={styles.Gen1Starter}
        source = {require('../../assets/images/Gen2/152.png')}/>
        </View>
        </TouchableOpacity>
{/*Cyndaquil*/}
        <TouchableOpacity>
        <View style={{...styles.Generation1, backgroundColor: backgroundColors['fire']}}>  
        <ImageBackground
        style={styles.Pattern}  
        source= {require('/Users/anhpham/Desktop/Expo/PokeDex/assets/images/Pattern.png')}/>
        <Text style={styles.PokeNumbers}>#155</Text>
        <Text style={styles.PokeNames}>Cyndaquil</Text>
{/*Badges*/}
    <View style={{...styles.PokeTypes, 
        backgroundColor: colors['fire']}}>
     <Image style = {styles.PokeTypesLogo}
        source={require('../../assets/images/PokeTypes/Fire.png')}/>
        <Text style={styles.PokeTypesText}>Fire</Text>
    </View>
        <Image
        style={styles.Gen1Starter}
        source = {require ('../../assets/images/Gen2/155.png')}/>
        </View>
        </TouchableOpacity>
{/*Totodile*/}
        <TouchableOpacity>
        <View style={{...styles.Generation1, backgroundColor: backgroundColors['water']}}> 
        <ImageBackground
        style={styles.Pattern}  
        source= {require('/Users/anhpham/Desktop/Expo/PokeDex/assets/images/Pattern.png')}/>
        <Text style={styles.PokeNumbers}>#158</Text>
        <Text style={styles.PokeNames}>Totodile</Text>
{/*Badges*/}
        <View style={{...styles.PokeTypes, 
        backgroundColor: colors['water']}}>
         <Image style = {styles.PokeTypesLogo}
        source={require('../../assets/images/PokeTypes/Water.png')}/>
          <Text style={styles.PokeTypesText}>Water</Text>
        </View>
        <Image
        style={styles.Gen1Starter}
        source = {require ('../../assets/images/Gen2/158.png')}/>
        </View>
{/*The rest of Gen 2 pokemons*/}
        <ExploreGen2/>
        </TouchableOpacity>
        </View>
        </ScrollView>
    );
};





export default Generations;

const styles = StyleSheet.create({
    HeaderImage: {
        width: '100%',
    },
    GenerationHeaders: {
        marginBottom: 10,
        fontSize: 20,
        fontWeight: '200',
        marginLeft: 40
    },
    PokeballBackground: {
        width:100, 
        height:100, 
        justifyContent:'center'
    },
//Generation 1 section:
    Generation1: {
        flex: 1,
        width: 334,
        height: 130,
        marginRight: 40,
        marginLeft: 40,
        borderRadius: 10,
        padding: 5,
        marginBottom: 10,
    },
    PokeNumbers: {
        fontSize: 12,
        color: '#17171B',
        fontWeight: '500',
        marginLeft: 20,
        marginTop: 10
    },
    PokeNames: {
        fontSize: 26,
        fontWeight: '500',
        marginLeft: 20,
        color: 'white',
        fontWeight:'700',
    },
    PokeTypes: {
        marginLeft: 20,
        flexDirection: 'row', //the type logos and text are in a row
        marginHorizontal: -10, //space between the two pokemon types
        borderRadius: 4, //the roundness of the types box
        marginTop: 5,
        alignSelf: 'flex-start', //wrapping the content
        paddingRight: 2.5
    },
    PokeTypesLogo: {
        marginBottom: 7,
        marginLeft: 5,
        marginTop: 5,
    },
    PokeTypesText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 5,
        marginTop: 5,
        padding: 1,
    },
    Gen1Starter: {
       height: 130,
       width: 130,
       flex: 1,
       marginLeft: 190,
       position: 'absolute'
    },
    Pattern: {
        position: 'absolute',
        width: 80,
        height: 35,
        marginTop: 10,
        marginLeft: 120
    },
    button: {
        
    },
//Generation 2 box:
    Generation1: {
    width: 334,
    height: 130,
    marginRight: 40,
    marginLeft: 40,
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
},
});


