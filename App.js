import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPokemons from './components/Screens/AllPokemons';
import Generation1 from './components/Screens/Generation1';
import Generation2 from './components/Screens/Generation2';
import Generation3 from './components/Screens/Generation3';
import Generation4 from './components/Screens/Generation4';
import Generation5 from './components/Screens/Generation5';
import Generation6 from './components/Screens/Generation6';
import Home from './components/Screens/Home';
import Details from './components/Screens/Details';
import GenerationsMenu from './components/Screens/GenerationsMenu';


const Screens = {
  Home: {
      screen: Home
  },
  GenerationsMenu: {
      screen: GenerationsMenu
  },
  Generation1: {
      screen: Generation1
  },
  Generation2: {
    screen: Generation2
  },
  Generation3: {
    screen: Generation3
  },
  Generation4: {
    screen: Generation4
  },
  Generation5: {
    screen: Generation5
  },
  Details: {
    screen: Details
  }
  }


  
    
  const Stack = createNativeStackNavigator();
    
    function App() {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
          name="Home" 
          component={Home}
          options= {{headerShown: false}} />
          <Stack.Screen 
              name="GenerationsMenu" 
              component={GenerationsMenu}
              options ={{title: "List of Generations", 
                        headerBackTitle: 'Home' }}/>
          <Stack.Screen
              name ="AllPokemons" 
              component ={AllPokemons}
              options = {{title: 'All Pokemons',
                          headerStyle: {
                            backgroundColor: 'white'
                          },
                          headerBackTitle: 'List'}}/>
          <Stack.Screen
              name ="Generation1" 
              component ={Generation1}
              options = {{title: 'Generation One',
                          headerStyle: {
                            backgroundColor: 'white'
                          },
                          headerBackTitle: 'List'}}/>
          <Stack.Screen 
              name ="Generation2"  
              component ={Generation2}
              options = {{title: 'Generation Two',
                          headerStyle: {
                            backgroundColor: 'white'
                          },
                          headerBackTitle: 'List'
                          }}/>
          <Stack.Screen 
              name ="Generation3"  
              component ={Generation3}
              options = {{title: 'Generation Three',
                          headerStyle: {
                            backgroundColor: 'white'
                          },
                          headerBackTitle: 'List'}}/>
          <Stack.Screen 
              name ="Generation4"
              component = {Generation4}
              options = {{title: 'Generation Four',
                          headerStyle: {
                            backgroundColor:'white'
                          },
                        headerBackTiltle: 'List'}}/>
          <Stack.Screen 
              name ="Generation5"
              component = {Generation5}
              options = {{title: 'Generation Five',
                          headerStyle: {
                            backgroundColor:'white'
                          },
                        headerBackTiltle: 'List'}}/>
          <Stack.Screen 
              name ="Generation6"
              component = {Generation6}
              options = {{title: 'Generation Six',
                          headerStyle: {
                            backgroundColor:'white'
                          },
                        headerBackTiltle: 'List'}}/>
          <Stack.Screen
              name= "Details"
              component={Details}
              options={{title: 'Details'}}/>
          </Stack.Navigator>
          
        </NavigationContainer>
      );
    }
    
    export default App;
  
                                                                            

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 55,
    height: 55,
  }
});

