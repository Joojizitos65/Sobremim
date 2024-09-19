import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';

const Pag1 = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      <Header title="Index" onBackPress={handleBackPress} />
      <Image 
        source={{ uri: 'https://th.bing.com/th/id/OIP.wZuW_HMkyAy6VZsuu33jBgAAAA?rs=1&pid=ImgDetMain' }}
        style={styles.image} 
      />
      <View style={styles.containerb}>
        <View style={styles.buttonContainer}>
          <Link href="./pag2">
            <Button title="Atividades" />
          </Link>
        </View>
        <View style={styles.buttonContainer}>
          <Link href="./pag3">
            <Button title="Sobre Mim" />
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    paddingTop: 50,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#fff',
    marginTop: 20,
  },
  containerb: {
    marginTop: 20, 
    alignItems: 'center', 
  },
  buttonContainer: {
    marginVertical: 10, 
  }
});

export default Pag1;
