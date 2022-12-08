import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, 
  Text, 
  StyleSheet,
  Button,
  ImageBackground,
  Dimensions,
  Image, 
  TouchableOpacity} from 'react-native';
  import { MaterialIcons } from '@expo/vector-icons'; 


function Home ({navigation}) {
   return (
      <View>
      <StatusBar style='dark'/>
      <ImageBackground
         style={styles.backgroundImage}  
         resizeMode="stretch"
        source= {require('../../assets/images/HomeScreen.png')}>
      <Image style={styles.PokeDexHeader}
             source= {require('../../assets/images/pokedex.png')}/>
      <Text style={styles.TextHeader}>Welcome to The Pokédex</Text>
      <TouchableOpacity
      onPress={()=>navigation.navigate('GenerationsMenu')}>
      <View style={{...styles.MenuButton, borderColor: 'black'}}>
      <View style={{flexDirection:'row'}}>
      <Image 
       style={styles.MenuIcon}
       source={require('../../assets/images/Pokeball.png')} />
        <Text style={styles.MenuText}>List of Generations</Text>
      </View>
      </View>
      </TouchableOpacity>
       </ImageBackground>
        </View>
          );
   }

export default Home;
const styles = StyleSheet.create({
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  TextHeader:{
    padding: 1,
    alignSelf:'center',
    paddingBottom: 20,
    fontSize: 20,
    fontWeight: '600'
  },
  PokeDexHeader: {
    marginTop: 40,
    marginLeft: -200,
    height: 180
  },
  MenuButton: {
   marginBottom: 10,
   borderRadius: 55,
   borderWidth: 2,
   alignSelf: 'center',
   padding: 5
   
  },
  MenuText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
    paddingLeft: 5
  },
  MenuIcon: {
    width: 30,
    height: 30,
    alignItems: 'center'
  }
});


