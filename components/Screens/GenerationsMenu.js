import React from 'react';
import { View, 
  Text, 
  StyleSheet,
  Button,
  ImageBackground,
  Dimensions,
  Image, 
  ScrollView,
  TouchableOpacity,
  Modal} from 'react-native';


function GenerationsMenu ({navigation}) {
   return (
      <View>
      <ImageBackground
        style ={styles.GenerationsMenuBackGround}
        source = {require('../../assets/images/GenerationsMenu.png')}>
      <ScrollView  contentContainerStyle={{paddingBottom: 100}}>
{/*Generation One*/}
      <View style={{...styles.GenerationsContainer, flex: '1'}}>
       <TouchableOpacity
        onPress={() => navigation.navigate('Generation1')} >
        <View style={{...styles.GenerationsBox, backgroundColor:'#d9d9d9'}}>
        <Text style={styles.GenerationHeader}>Generation One</Text>
        <View style={{flexDirection:'row'}}>
        <Image 
        style={styles.Gen1Starter}
        source = {require('../../assets/images/Gen1/01.png')}/>
        <Image
        style={styles.Gen1Starter}
        source = {require ('../../assets/images/Gen1/04.png')}/>
        <Image
        style={styles.Gen1Starter}
        source = {require ('../../assets/images/Gen1/07.png')}/>
        </View>
        </View>
        </TouchableOpacity>
{/*Generation Two*/}
        <TouchableOpacity
        onPress={() => navigation.navigate('Generation2')} >
        <View style={{...styles.GenerationsBox, backgroundColor:'#d9d9d9'}}>
        <Text style={styles.GenerationHeader}>Generation Two</Text>
        <View style={{flexDirection:'row'}}>
        <Image 
        style={styles.Gen1Starter}
        source = {require('../../assets/images/Gen2/152.png')}/>
         <Image
        style={styles.Gen1Starter}
        source = {require ('../../assets/images/Gen2/155.png')}/>
        <Image
        style={styles.Gen1Starter}
        source = {require ('../../assets/images/Gen2/158.png')}/>
        </View>
        </View>
        </TouchableOpacity>
{/*Generation Three*/}
        <TouchableOpacity
        onPress={() => navigation.navigate('Generation3')} >
        <View style={{...styles.GenerationsBox, backgroundColor:'#d9d9d9'}}>
        <Text style={styles.GenerationHeader}>Generation Three</Text>
        <View style={{flexDirection:'row'}}>
        <Image 
        style={styles.Gen1Starter}
        source = {require ('../../assets/images/Gen3/252.png')}/>
         <Image 
        style={styles.Gen1Starter}
        source = {require ('../../assets/images/Gen3/255.png')}/>
         <Image 
        style={styles.Gen1Starter}
        source = {require ('../../assets/images/Gen3/258.png')}/>
        </View>
        </View>
        </TouchableOpacity>
{/*Generation Four*/}
<TouchableOpacity
        onPress={() => navigation.navigate('Generation4')} >
        <View style={{...styles.GenerationsBox, backgroundColor:'#d9d9d9'}}>
        <Text style={styles.GenerationHeader}>Generation Four</Text>
        <View style={{flexDirection:'row'}}>
        <Image 
        style={styles.Gen1Starter}
        source = {require ('../../assets/images/Gen4/387.png')}/>
         <Image 
        style={styles.Gen1Starter}
        source = {require ('../../assets/images/Gen4/390.png')}/>
         <Image 
        style={styles.Gen1Starter}
        source = {require ('../../assets/images/Gen4/393.png')}/>
        </View>
        </View>
        </TouchableOpacity>
{/*Generation Five*/}
<TouchableOpacity
        onPress={() => navigation.navigate('Generation5')} >
        <View style={{...styles.GenerationsBox, backgroundColor:'#d9d9d9'}}>
        <Text style={styles.GenerationHeader}>Generation Five</Text>
        <View style={{flexDirection:'row'}}>
        <Image 
        style={styles.Gen1Starter}
        source = {require ('../../assets/images/Gen5/495.png')}/>
         <Image 
        style={styles.Gen1Starter}
        source = {require ('../../assets/images/Gen5/498.png')}/>
         <Image 
        style={styles.Gen1Starter}
        source = {require ('../../assets/images/Gen5/501.png')}/>
        </View>
        </View>
        </TouchableOpacity>
{/*Generation Six*/}
<TouchableOpacity
        onPress={() => navigation.navigate('Generation6')} >
        <View style={{...styles.GenerationsBox, backgroundColor:'#d9d9d9'}}>
        <Text style={styles.GenerationHeader}>Generation Six</Text>
        <View style={{flexDirection:'row'}}>
        <Image 
        style={styles.Gen1Starter}
        source = {require ('../../assets/images/Gen6/650.png')}/>
         <Image 
        style={styles.Gen1Starter}
        source = {require ('../../assets/images/Gen6/653.png')}/>
         <Image 
        style={styles.Gen1Starter}
        source = {require ('../../assets/images/Gen6/656.png')}/>
        </View>
        </View>
        </TouchableOpacity>
{/*All Pokemons*/}
        <TouchableOpacity
        onPress={() => navigation.navigate('AllPokemons')} >
        <View style={{...styles.GenerationsBox, backgroundColor:'#d9d9d9'}}>
        <Text style={styles.GenerationHeader}>Explore all Pokemons</Text>
        </View>
        </TouchableOpacity>
        </View>
        </ScrollView>
        </ImageBackground>
        </View>
       
          );
   }

export default GenerationsMenu;
const styles = StyleSheet.create({
  GenerationsMenuBackGround: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  GenerationsContainer: {
    paddingTop:10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  TextHeader:{
    padding: 1,
    marginLeft: 135,
    paddingBottom: 20,
  },
  PokeDexHeader: {
    marginTop: 20,
    marginLeft: -200,
  },
  GenerationsBox:{
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: 'flex-start'
  },
  GenerationHeader: {
    padding: 5,
    fontWeight: '600',
    fontSize: 16
  },
  Gen1Starter: {
    width: 90,
    height: 90,
    marginStart: 10
 },
  
});


