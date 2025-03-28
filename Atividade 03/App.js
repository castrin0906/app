import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHouse: null,
      modalVisible: false
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
      habitantes: "Cerca de 120.000 habitantes"
    };

    const casas = [
      {
        id: 1,
        imagem: 'https://imgs.kenlo.io/VWRCUkQ2Tnp3d1BJRDBJVe1szkhnWr9UfpZS9bJDwnbk9Kawbnev1nxMNm9yHFhIP-MQkSx9WYNv+GNL2YlU-wkXlPQSZbuglzWw+qTF++6m90iI4auGrYveiubvWPbZ6Lg6-ZTSFWmBg7dUG-otHUkof-ZeXSu2Xp3cLXIPhB6lrUvGRpQeal1V0xAVqiwV5UGgQ5eA7F4R3wjwFKqA8HLJTP+4URYYX-lYCt407ENDsQK-XFB8p0pK9JGl+XaFOuW-M4DugSALG1In8oevXbnpmdnCJ5YnGrlrPXoH40EZTKZew-iTSP984RIB5L+QVkHH3lWR0LsmIsyrVosbn6NXxQjETbRMuxzpkteUjKX5bEyELgViqvzKuu-tY6mtBfukc23ikJcEtNGaP8VIZ9DkA2MHHjR4MHBJvUDp.jpg',
        valor: 'R$ 3.200/mês',
        quartos: 3,
        endereco: 'SQN 312 Bloco A',
        descricao: 'Esta encantadora residência na SQN 312 oferece conforto e praticidade em um dos melhores endereços da Asa Sul. Com três quartos espaçosos, sendo uma suíte, esta casa é perfeita para famílias que buscam qualidade de vida. A cozinha é ampla e equipada, a sala de estar é arejada e iluminada, e a área de serviço é funcional. O condomínio possui piscina, academia e área de lazer, além de segurança 24 horas. Localização privilegiada próxima a escolas, mercados e comércio em geral.'
      },
      {
        id: 2,
        imagem: 'https://resizedimgs.zapimoveis.com.br/crop/614x297/vr.images.sp/7728cac8f2cef2f7ab6be901aa2ea796.webp',
        valor: 'R$ 2.500/mês',
        quartos: 2,
        endereco: 'SQS 412 Bloco B',
        descricao: 'Apartamento aconchegante na SQS 412, ideal para casais ou pequenas famílias. Com dois quartos amplos, sala conjugada, cozinha planejada e banheiro social. O edifício conta com portaria 24h e está localizado em uma quadra tranquila, próxima ao Parque da Cidade e ao Metrô. A região oferece fácil acesso às principais vias da cidade e uma variedade de opções de lazer, gastronomia e serviços. Excelente oportunidade para quem busca praticidade e conforto em um bairro consolidado.'
      },
      {
        id: 3,
        imagem: 'https://imgbr.imovelwebcdn.com/avisos/2/29/81/68/83/86/720x532/3874221684.jpg?isFirstImage=true',
        valor: 'R$ 4.000/mês',
        quartos: 4,
        endereco: 'CLS 212 Bloco C',
        descricao: 'Espaçosa casa com quatro quartos na CLS 212, sendo duas suítes, perfeita para famílias grandes. A propriedade possui ampla área social com sala de estar e jantar, cozinha gourmet equipada, área de serviço completa e quintal arborizado. Localizada em uma das quadras mais valorizadas da Asa Sul, próxima às melhores escolas, shoppings e restaurantes da cidade. O imóvel foi recentemente reformado e conta com acabamentos de alta qualidade, piso porcelanato em toda a área social e ar-condicionado nos quartos.'
      },
      {
        id: 4,
        imagem: 'https://resizedimgs.vivareal.com/crop/286x200/named.images.sp/89c01ca4fe3e0d320d11f9ef434862a9/foto-1-de-casa-com-4-quartos-a-venda-198m-em-asa-sul-brasilia.webp',
        valor: 'R$ 3.800/mês',
        quartos: 3,
        endereco: 'SHS Quadra 5',
        descricao: 'Sobrado moderno na SHS Quadra 5 com três quartos (sendo uma suíte master), distribuídos em dois pavimentos. No térreo encontra-se a ampla sala de estar com lareira, sala de jantar, cozinha integrada e um lavabo. No andar superior estão os dormitórios, todos com armários embutidos. A casa possui garagem para dois carros, jardim frontal e área de churrasco. A localização é privilegiada, a poucos metros do Setor Hospitalar e do Setor Comercial Sul, com fácil acesso ao Eixo Monumental e ao Plano Piloto.'
      },
      {
        id: 5,
        imagem: 'https://img.dfimoveis.com.br/fotos/973670/f1a782e467d38ff45113527e84e67db8.jpg?format=webp',
        valor: 'R$ 2.900/mês',
        quartos: 2,
        endereco: 'SQN 109 Bloco D',
        descricao: 'Charmoso apartamento no SQN 109, com dois quartos (sendo uma suíte), sala ampla, cozinha funcional e área de serviço. O edifício possui elevador, portaria 24 horas e área comum bem cuidada. A localização é excelente, próxima à Universidade de Brasília e ao Parque Olhos D\'Água, oferecendo tranquilidade e conveniência. Ideal para estudantes ou profissionais que trabalham na região. O apartamento recebe luz natural durante todo o dia e conta com ventilação cruzada, garantindo conforto térmico.'
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
              onPress={() => this.setState({ selectedHouse: casa, modalVisible: true })}
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

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({ modalVisible: false });
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {this.state.selectedHouse && (
                <>
                  <Image
                    source={{ uri: this.state.selectedHouse.imagem }}
                    style={styles.modalImage}
                    resizeMode="cover"
                  />
                  <Text style={styles.modalTitle}>{this.state.selectedHouse.endereco}</Text>
                  <Text style={styles.modalPrice}>{this.state.selectedHouse.valor}</Text>
                  <Text style={styles.modalRooms}>{this.state.selectedHouse.quartos} quartos</Text>
                  <ScrollView style={styles.modalDescriptionContainer}>
                    <Text style={styles.modalDescription}>
                      {this.state.selectedHouse.descricao}
                    </Text>
                  </ScrollView>
                  <Button
                    title="Fechar"
                    onPress={() => this.setState({ modalVisible: false })}
                    color="#d3a971"
                  />
                </>
              )}
            </View>
          </View>
        </Modal>
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
    flexDirection: 'row',
    justifyContent: 'space-between', 
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
    flex: 1, 
    paddingHorizontal: 5, 
  },
  valorEstatistica: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
    textAlign: 'center', 
  },
  rotuloEstatistica: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center', 
    marginTop: 5, 
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    maxHeight: '80%',
  },
  modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  modalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 5,
  },
  modalRooms: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  modalDescricaoContainer: {
    marginBottom: 15,
  },
  modalDescription: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
});

export default App;