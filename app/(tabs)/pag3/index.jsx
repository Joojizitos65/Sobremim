import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';

const SobreMim = () => {
  const navigation = useNavigation();

  const tratarVoltar = () => {
    navigation.goBack();
  };

  return (
    <View style={estilos.container}>
      <Header title="Sobre Mim" onBackPress={tratarVoltar} />
      <View style={estilos.conteudo}>
        <Image 
          source={{ uri: 'https://th.bing.com/th/id/OIP.wZuW_HMkyAy6VZsuu33jBgAAAA?rs=1&pid=ImgDetMain' }} 
          style={estilos.imagem} 
        />
        <Text style={estilos.titulo}>Olá, eu me chamo João Vitor!</Text>
        <Text style={estilos.descricao}>
        Nascido e criado em Santa Catarina Palhoça em 2006, desde meu primeiro contato com programação no geral, eu fiquei muito fascinado, porém nunca soube por onde começar, eu sempre pegava "migalhas" e ia criando uma base disso, com o tempo fui aprendendo a pesquisar mais e oque pesquisar, então no meu ensino médio fui para o Senai, ali pude aprender mais sobre programação e desenvolvimento de sistema em um geral, e melhorar meu conhecimento, pude fazer bastante amizades que se interessam pelo mesmo assunto que eu, com o tempo fui me aprofundando mais por fora do que me foi ensinado no Senai, e pude aprender outras coisas que descobrir ter um forte vinculo, sendo elas Segurança da Informação, Automações, IA's, Pentesting entre outros.
        </Text>
        <Text style={estilos.descricao}>
        Foi uma mistura muito grande de vontade e coincidência, porque pude encontrar pessoas que realmente se interessam pelo mesmo assunto que eu, mesmo humor, gostos, e assim não só criar uma relação escolar muito boa, como uma relação de amizade muito forte, quando era somente eu que pesquisava eu mal tinha interesse para ir atrás de novos assuntos, mas sinto que desde o Senai pude ir aprendendo a pegar gosto e ir atrás por vontade própria, como uma ambição, e por influência (influência boa) de amigos.
        </Text>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  conteudo: {
    alignItems: 'center',
    marginTop: 50,
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    width:'50%'
  },
});

export default SobreMim;
