import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native';
import * as Font from 'expo-font';

const imoveis = [
  {
    id: 1,
    nome: 'Casa com 3 quartos',
    localizacao: 'Asa Sul',
    preco: 'R$ 1.500/mês',
    imagem: 'https://meusiteimobiliario.com.br/painel/subdominios/710/fotos/114/400_IMG20200717082903224HDR.jpg'
  },
  {
    id: 2,
    nome: 'Apartamento com 2 quartos',
    localizacao: 'Asa Norte',
    preco: 'R$ 2.000/mês',
    imagem: 'https://img.dfimoveis.com.br/fotos/1117679/381f38c1502f74f0caffd53cf90e2a67.jpg?format=webp'
  },
  {
    id: 3,
    nome: 'Casa com 4 quartos',
    localizacao: 'Lago Sul',
    preco: 'R$ 3.500/mês',
    imagem: 'https://imgs.kenlo.io/VWRCUkQ2Tnp3d1BJRDBJVe1szkhnWr9UfpZS9ftWwjXgr7v5Znen3XVcMHllDVRJJeIbi3YwVYEtu1degc1T9E8Xqds6fojmnHLC5rKo+tC1lGaIx4LKveve6c7ETPfZ8poc6qzEFXy176tLHdIfCht2XrhhYRC6ZL+gF0N-nCGumXzKb4x5TkRT5CgQtzxTyniXVJGC3mYK6y64N+vIhzOPQa7GCgVQDrMNAdsz6EIJ9xa9SUxy8h8d55m-oS7TO7S-K5+hxzlXFx5k9oa+Squ619jCLJU4Vr0lNm4L5VMZWe0S2-TJT-8+5wEDqv3JFhXchgzWgPAoc9j0Qd9ImKQGiAfGSrRO60-vwIaVgqOqO0qBN1pu9O6Yrqe2OajyEa2jOUSjh5YQs8+IapgDd8-0VChVXHE1bHAD5AO24LnHpQClIDWKtghTSkw=.jpg'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      'NotoSans-Black': require('./assets/fonts/NotoSans-Black.ttf'),
      'NotoSans-Bold': require('./assets/fonts/NotoSans-Bold.ttf')
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Alumov</Text>
        <FlatList
          data={imoveis}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image
                source={{ uri: item.imagem }}
                style={styles.imagem}
                resizeMode="cover"
              />
              <Text style={styles.nomeImovel}>{item.nome}</Text>
              <Text style={styles.localizacao}>{item.localizacao}</Text>
              <Text style={styles.preco}>{item.preco}</Text>
            </View>
          )}
          contentContainerStyle={styles.lista}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    fontFamily: 'NotoSans-Black',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: Dimensions.get('window').width * 0.9, 
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  imagem: {
    width: '100%',
    height: Dimensions.get('window').width * 0.6, 
    borderRadius: 10,
    marginBottom: 10,
  },
  nomeImovel: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'NotoSans-Bold',
  },
  localizacao: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    fontFamily: 'NotoSans-Bold',
    textAlign: 'center',
  },
  preco: {
    fontSize: 20,
    color: '#007AFF',
    fontFamily: 'NotoSans-Bold',
  },
  lista: {
    alignItems: 'center',
    paddingBottom: 20,
  },
});

export default App;
