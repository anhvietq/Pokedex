import React from 'react';
import { View, 
  Text, 
  StyleSheet,
  Button,
  Image } from 'react-native';
import { colors, backgroundColors } from '../../assets/colors';
import { useNavigation } from '@react-navigation/native';

function ExploreGen2 () {
  const navigation = useNavigation(); 
  return(
  <Button
          onPress={() => navigation.navigate('GenerationTwo')}
          title="Explore More"
        />
  );
  }



export default ExploreGen2;
const styles = StyleSheet.create({

});