import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';

const App = () => {
  return (
    <View>
      <Link href="./pag1/">Sobre mim</Link>
    </View>
  );
};

export default App;
