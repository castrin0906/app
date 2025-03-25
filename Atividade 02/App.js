import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHouse: null
    };
  }

  render() {
    const infoAsaSul = {
      descricao: "A Asa Sul é um dos bairros mais tradicionais e valorizados de Brasília, conhecido por sua arquitetura modernista e qualidade de vida.",
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Vista_aérea_da_Asa_Sul_em_direção_ao_Centro.jpg',
      vantagens: [
        "Ótima localização próxima ao centro",
        "Infraestrutura completa com comércios e serviços",
        "Áreas verdes e parques bem cuidados",
        "Transporte público eficiente"
      ],
      valorMedio: "R$ 2.800/mês",
      habitantes: "Aproximadamente 120.000 habitantes"
    };

    const casas = [
      {
        id: 1,
        imagem: 'https://imgs.kenlo.io/VWRCUkQ2Tnp3d1BJRDBJVe1szkhnWr9UfpZS9bJDwnbk9Kawbnev1nxMNm9yHFhIP-MQkSx9WYNv+GNL2YlU-wkXlPQSZbuglzWw+qTF++6m90iI4auGrYveiubvWPbZ6Lg6-ZTSFWmBg7dUG-otHUkof-ZeXSu2Xp3cLXIPhB6lrUvGRpQeal1V0xAVqiwV5UGgQ5eA7F4R3wjwFKqA8HLJTP+4URYYX-lYCt407ENDsQK-XFB8p0pK9JGl+XaFOuW-M4DugSALG1In8oevXbnpmdnCJ5YnGrlrPXoH40EZTKZew-iTSP984RIB5L+QVkHH3lWR0LsmIsyrVosbn6NXxQjETbRMuxzpkteUjKX5bEyELgViqvzKuu-tY6mtBfukc23ikJcEtNGaP8VIZ9DkA2MHHjR4MHBJvUDp.jpg',
        valor: 'R$ 3.200/mês',
        quartos: 3,
        endereco: 'SQN 312 Bloco A'
      },
      {
        id: 2,
        imagem: 'https://resizedimgs.zapimoveis.com.br/crop/614x297/vr.images.sp/7728cac8f2cef2f7ab6be901aa2ea796.webp',
        valor: 'R$ 2.500/mês',
        quartos: 2,
        endereco: 'SQS 412 Bloco B'
      },
      {
        id: 3,
        imagem: 'https://imgbr.imovelwebcdn.com/avisos/2/29/81/68/83/86/720x532/3874221684.jpg?isFirstImage=true',
        valor: 'R$ 4.000/mês',
        quartos: 4,
        endereco: 'CLS 212 Bloco C'
      },
      {
        id: 4,
        imagem: 'https://resizedimgs.vivareal.com/crop/286x200/named.images.sp/89c01ca4fe3e0d320d11f9ef434862a9/foto-1-de-casa-com-4-quartos-a-venda-198m-em-asa-sul-brasilia.webp',
        valor: 'R$ 3.800/mês',
        quartos: 3,
        endereco: 'SHS Quadra 5'
      },
      {
        id: 5,
        imagem: 'https://img.dfimoveis.com.br/fotos/973670/f1a782e467d38ff45113527e84e67db8.jpg?format=webp',
        valor: 'R$ 2.900/mês',
        quartos: 2,
        endereco: 'SQN 109 Bloco D'
      },
      {
        id: 6,
        imagem: 'https://imgbr.imovelwebcdn.com/avisos/2/30/02/09/27/56/360x266/4614536270.jpg?isFirstImage=true',
        valor: 'R$ 3.500/mês',
        quartos: 3,
        endereco: 'SQS 308 Bloco E'
      }
    ];

    return (
      <ScrollView style={styles.container}>
        <View style={styles.cabecalho}>
          <Text style={styles.titulo}>Asa Sul - Brasília</Text>
        </View>

        <View style={styles.secaoInformacoes}>
          <Text style={styles.tituloSecao}>Sobre a Asa Sul</Text>
          <Text style={styles.descricao}>{infoAsaSul.descricao}</Text>
          
          <Text style={styles.subtitulo}>Vantagens:</Text>
          {infoAsaSul.vantagens.map((vantagem, index) => (
            <Text key={index} style={styles.itemLista}>• {vantagem}</Text>
          ))}
          <Image
            source={{ uri: infoAsaSul.imagem }}
            style={styles.imagemAsaSul}
            resizeMode="cover"
          />
        </View>

        <View style={styles.cardEstatisticas}>
          <View style={styles.itemEstatistica}>
            <Text style={styles.valorEstatistica}>{infoAsaSul.valorMedio}</Text>
            <Text style={styles.rotuloEstatistica}>Valor médio</Text>
          </View>
          <View style={styles.itemEstatistica}>
            <Text style={styles.valorEstatistica}>{infoAsaSul.habitantes}</Text>
            <Text style={styles.rotuloEstatistica}>Habitantes</Text>
          </View>
        </View>

        <View style={styles.secaoCasas}>
          <Text style={styles.tituloSecao}>Imóveis Disponíveis</Text>
          
          {casas.map((casa) => (
            <TouchableOpacity 
              key={casa.id} 
              style={styles.cardCasa}
              onPress={() => this.setState({ selectedHouse: casa })}
            >
              <Image
                source={{ uri: casa.imagem }}
                style={styles.imagemCasa}
                resizeMode="cover"
              />
              <View style={styles.infoCasa}>
                <Text style={styles.endereco}>{casa.endereco}</Text>
                <View style={styles.detalhesCasa}>
                  <Text style={styles.preco}>{casa.valor}</Text>
                  <Text style={styles.quartos}>{casa.quartos} quartos</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  cabecalho: {
    backgroundColor: '#d3a971',
    padding: 20,
    paddingTop: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  secaoInformacoes: {
    padding: 20,
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  tituloSecao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 15,
  },
  imagemAsaSul: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 20
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 15,
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    color: '#000000',
    lineHeight: 24,
  },
  itemLista: {
    fontSize: 16,
    color: '#000000',
    marginLeft: 10,
    marginBottom: 5,
  },
  cardEstatisticas: {
    padding: 20,
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemEstatistica: {
    alignItems: 'center',
    marginBottom: 15,
  },
  valorEstatistica: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  rotuloEstatistica: {
    fontSize: 14,
    color: '#000000',
  },
  secaoCasas: {
    padding: 15,
  },
  cardCasa: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  imagemCasa: {
    width: '100%',
    height: 200,
  },
  infoCasa: {
    padding: 15,
  },
  endereco: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  detalhesCasa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  preco: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  quartos: {
    fontSize: 16,
    color: '#666',
  },
});

export default App;
