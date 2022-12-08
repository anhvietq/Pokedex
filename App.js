import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GenerationOne from './components/Screens/GenerationOne';
import GenerationTwo from './components/Screens/GenerationTwo';
import GenerationThree from './components/Screens/GenerationThree';
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
  GenerationOne: {
      screen: GenerationOne
  },
  GenerationTwo: {
    screen: GenerationTwo
  },
  GenerationThree: {
    screen: GenerationThree
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
                        headerTransparent: true,
                        headerBackTitle: 'Home' }}/>
          <Stack.Screen
              name ="GenerationOne" 
              component ={GenerationOne}
              options = {{title: 'Generation One',
                          headerStyle: {
                            backgroundColor: 'white'
                          },
                          headerBackTitle: 'List'}}/>
          <Stack.Screen 
              name ="GenerationTwo"  
              component ={GenerationTwo}
              options = {{title: 'Generation Two',
                          headerStyle: {
                            backgroundColor: 'white'
                          },
                          headerBackTitle: 'List'
                          }}/>
          <Stack.Screen 
              name ="GenerationThree"  
              component ={GenerationThree}
              options = {{title: 'Generation Three',
                          headerStyle: {
                            backgroundColor: 'white'
                          },
                          headerBackTitle: 'List'}}/>
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

