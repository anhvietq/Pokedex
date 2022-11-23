import React from 'react';
import { View, 
  Text, 
  StyleSheet,
  Button,
  Image } from 'react-native';
import { colors, backgroundColors } from '../../assets/colors';
import { useNavigation } from '@react-navigation/native';

function ExploreGen1 () {
  const navigation = useNavigation(); 
  return(
  <Button
          onPress={() => navigation.navigate('GenerationOne')}
          title="Explore More"
        />
  );
  }



export default ExploreGen1;
const styles = StyleSheet.create({

});