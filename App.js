import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView, 
  Dimensions, 
  TouchableOpacity, 
  Modal, 
  TextInput, 
  Switch, 
  Button,
  Alert,
  Linking
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [tipoImovel, setTipoImovel] = useState('Apartamento');
  const [faixaPreco, setFaixaPreco] = useState('2000-3000');
  const [quartos, setQuartos] = useState(2);
  const [area, setArea] = useState(70);
  const [receberNewsletter, setReceberNewsletter] = useState(false);
  const [contatoWhatsapp, setContatoWhatsapp] = useState(true);

  const infoAsaSul = {
    descricao: "A Asa Sul é um dos bairros mais tradicionais e valorizados de Brasília, conhecido por sua arquitetura modernista e qualidade de vida.",
    vantagens: [
      { icon: 'location-on', text: "Ótima localização próxima ao centro" },
      { icon: 'shopping-cart', text: "Infraestrutura completa com comércios e serviços" },
      { icon: 'park', text: "Áreas verdes e parques bem cuidados" },
      { icon: 'directions-bus', text: "Transporte público eficiente" },
      { icon: 'security', text: "Áreas seguras e monitoradas" }
    ],
    valorMedio: "R$ 2.800/mês",
    habitantes: "120.000 hab",
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Vista_aérea_da_Asa_Sul_em_direção_ao_Centro.jpg'
  };

  const imoveis = [
    {
      id: 1,
      imagem: 'https://imgs.kenlo.io/VWRCUkQ2Tnp3d1BJRDBJVe1szkhnWr9UfpZS9bJDwnbk9Kawbnev1nxMNm9yHFhIP-MQkSx9WYNv+GNL2YlU-wkXlPQSZbuglzWw+qTF++6m90iI4auGrYveiubvWPbZ6Lg6-ZTSFWmBg7dUG-otHUkof-ZeXSu2Xp3cLXIPhB6lrUvGRpQeal1V0xAVqiwV5UGgQ5eA7F4R3wjwFKqA8HLJTP+4URYYX-lYCt407ENDsQK-XFB8p0pK9JGl+XaFOuW-M4DugSALG1In8oevXbnpmdnCJ5YnGrlrPXoH40EZTKZew-iTSP984RIB5L+QVkHH3lWR0LsmIsyrVosbn6NXxQjETbRMuxzpkteUjKX5bEyELgViqvzKuu-tY6mtBfukc23ikJcEtNGaP8VIZ9DkA2MHHjR4MHBJvUDp.jpg',
      nome: 'Apartamento SQN 312',
      descricaoDetalhada: 'Esta encantadora residência na SQN 312 oferece conforto e praticidade em um dos melhores endereços da Asa Sul. Com três quartos espaçosos, sendo uma suíte, esta casa é perfeita para famílias que buscam qualidade de vida. A cozinha é ampla e equipada, a sala de estar é arejada e iluminada, e a área de serviço é funcional. O condomínio possui piscina, academia e área de lazer, além de segurança 24 horas. Localização privilegiada próxima a escolas, mercados e comércio em geral.',
      descricao: 'Apartamento moderno com 3 quartos na SQN 312',
      preco: 'R$ 3.200/mês',
      quartos: 3,
      features: ['Piscina', 'Academia', 'Portaria 24h', 'Varanda gourmet']
    },
    {
      id: 2,
      imagem: 'https://resizedimgs.zapimoveis.com.br/crop/614x297/vr.images.sp/7728cac8f2cef2f7ab6be901aa2ea796.webp',
      nome: 'Casa SQS 412',
      descricaoDetalhada: 'Casa aconchegante na SQS 412, ideal para famílias. Com dois quartos amplos, sala conjugada, cozinha planejada e banheiro social. O edifício conta com portaria 24h e está localizado em uma quadra tranquila, próxima ao Parque da Cidade e ao Metrô. A região oferece fácil acesso às principais vias da cidade e uma variedade de opções de lazer, gastronomia e serviços. Excelente oportunidade para quem busca praticidade e conforto em um bairro consolidado.',
      descricao: 'Casa com 2 quartos na SQS 412',
      preco: 'R$ 2.500/mês',
      quartos: 2,
      features: ['Quintal arborizado', 'Garagem para 2 carros', 'Área de serviço']
    }
  ];

  const imagensDiversas = [
    'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/11/29/08/41/apple-1868496_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/08/26/16/06/room-1623257_960_720.jpg'
  ];

  const openDetails = (imovel) => {
    setSelectedHouse(imovel);
    setModalVisible(true);
  };

  const closeDetails = () => {
    setModalVisible(false);
  };

  const handleEnviar = () => {
    Alert.alert(
      'Formulário Enviado',
      `Obrigado pelo interesse, ${nome}! Entraremos em contato em breve.`
    );
  };

  const handleLimpar = () => {
    setNome('');
    setEmail('');
    setTelefone('');
    setMensagem('');
    setTipoImovel('Apartamento');
    setFaixaPreco('2000-3000');
    setQuartos(2);
    setArea(70);
    setReceberNewsletter(false);
    setContatoWhatsapp(true);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.cabecalho}>
        <View style={styles.headerContent}>
          <Text style={styles.titulo}>Alumov</Text>
          <Text style={styles.subtituloHeader}>Os melhores imóveis no coração de Brasília</Text>
        </View>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerText}>Encontre seu lar perfeito na capital federal</Text>
      </View>

      <View style={styles.secao}>
        <Text style={styles.tituloSecao}>INTERESSE EM IMÓVEL</Text>
        
        <Text style={styles.label}>Nome Completo</Text>
        <TextInput 
          style={styles.input} 
          value={nome} 
          onChangeText={setNome} 
          placeholder="Digite seu nome" 
        />

        <Text style={styles.label}>E-mail</Text>
        <TextInput 
          style={styles.input} 
          value={email} 
          onChangeText={setEmail} 
          placeholder="Digite seu e-mail" 
          keyboardType="email-address"
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInput 
          style={styles.input} 
          value={telefone} 
          onChangeText={setTelefone} 
          placeholder="Digite seu telefone" 
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Mensagem</Text>
        <TextInput 
          style={[styles.input, styles.multilineInput]} 
          value={mensagem} 
          onChangeText={setMensagem} 
          placeholder="Alguma observação?" 
          multiline
        />

        <Text style={styles.label}>Tipo de Imóvel</Text>
        <Picker
          selectedValue={tipoImovel}
          style={styles.picker}
          onValueChange={(itemValue) => setTipoImovel(itemValue)}
        >
          <Picker.Item label="Apartamento" value="Apartamento" />
          <Picker.Item label="Casa" value="Casa" />
          <Picker.Item label="Sobrado" value="Sobrado" />
          <Picker.Item label="Kitnet" value="Kitnet" />
        </Picker>

        <Text style={styles.label}>Faixa de Preço</Text>
        <Picker
          selectedValue={faixaPreco}
          style={styles.picker}
          onValueChange={(itemValue) => setFaixaPreco(itemValue)}
        >
          <Picker.Item label="Até R$ 2.000" value="ate-2000" />
          <Picker.Item label="R$ 2.000 - R$ 3.000" value="2000-3000" />
          <Picker.Item label="R$ 3.000 - R$ 4.000" value="3000-4000" />
          <Picker.Item label="Acima de R$ 4.000" value="acima-4000" />
        </Picker>

        <Text style={styles.label}>Quartos desejados: {quartos}</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={5}
          step={1}
          value={quartos}
          onValueChange={setQuartos}
          minimumTrackTintColor="#d3a971"
          maximumTrackTintColor="#000000"
          thumbTintColor="#d3a971"
        />

        <Text style={styles.label}>Área mínima (m²): {area}</Text>
        <Slider
          style={styles.slider}
          minimumValue={30}
          maximumValue={200}
          step={10}
          value={area}
          onValueChange={setArea}
          minimumTrackTintColor="#d3a971"
          maximumTrackTintColor="#000000"
          thumbTintColor="#d3a971"
        />

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Receber newsletter</Text>
          <Switch
            value={receberNewsletter}
            onValueChange={setReceberNewsletter}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={receberNewsletter ? "#f5dd4b" : "#f4f3f4"}
          />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Contato por WhatsApp</Text>
          <Switch
            value={contatoWhatsapp}
            onValueChange={setContatoWhatsapp}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={contatoWhatsapp ? "#f5dd4b" : "#f4f3f4"}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Enviar" onPress={handleEnviar} color="#d3a971" />
          <View style={{ marginTop: 10 }} />
          <Button title="Limpar" onPress={handleLimpar} color="#f44336" />
        </View>
      </View>

      <View style={styles.secao}>
        <Text style={styles.tituloSecao}>CONHEÇA A ASA SUL</Text>
        <View style={styles.imagensRow}>
          <Image
            source={{ uri: imagensDiversas[0] }}
            style={styles.galeriaImagem}
            resizeMode="cover"
          />
          <Image
            source={{ uri: imagensDiversas[1] }}
            style={styles.galeriaImagem}
            resizeMode="cover"
          />
        </View>
        <View style={styles.imagensRow}>
          <Image
            source={{ uri: imagensDiversas[2] }}
            style={styles.galeriaImagem}
            resizeMode="cover"
          />
          <Image
            source={{ uri: imagensDiversas[3] }}
            style={styles.galeriaImagem}
            resizeMode="cover"
          />
        </View>
        <Image
          source={{ uri: imagensDiversas[4] }}
          style={styles.galeriaImagemGrande}
          resizeMode="cover"
        />
      </View>

      <View style={styles.secao}>
        <Text style={styles.tituloSecao}>SOBRE A ASA SUL</Text>
        <Text style={styles.descricao}>{infoAsaSul.descricao}</Text>
        
        <View style={styles.vantagensContainer}>
          {infoAsaSul.vantagens.map((item, index) => (
            <View key={index} style={styles.vantagemItem}>
              <MaterialIcons name={item.icon} size={24} color="#d3a971" />
              <Text style={styles.vantagemText}>{item.text}</Text>
            </View>
          ))}
        </View>
        
        <Image
          source={{ uri: infoAsaSul.imagem }}
          style={styles.imagemAsaSul}
          resizeMode="cover"
        />
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <MaterialIcons name="attach-money" size={32} color="#d3a971" />
          <Text style={styles.statNumber}>{infoAsaSul.valorMedio}</Text>
          <Text style={styles.statLabel}>Valor médio</Text>
        </View>
        <View style={styles.statCard}>
          <MaterialIcons name="people" size={32} color="#d3a971" />
          <Text style={styles.statNumber}>{infoAsaSul.habitantes}</Text>
          <Text style={styles.statLabel}>Habitantes</Text>
        </View>
        <View style={styles.statCard}>
          <MaterialIcons name="star" size={32} color="#d3a971" />
          <Text style={styles.statNumber}>9.5/10</Text>
          <Text style={styles.statLabel}>Avaliação</Text>
        </View>
      </View>

      <View style={styles.secao}>
        <Text style={styles.tituloSecao}>IMÓVEIS DISPONÍVEIS</Text>
        <Text style={styles.subtituloSecao}>Confira nossas opções</Text>
        
        {imoveis.map((imovel) => (
          <TouchableOpacity 
            key={imovel.id} 
            style={styles.card}
            onPress={() => openDetails(imovel)}
          >
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: imovel.imagem }}
                style={styles.imagem}
                resizeMode="cover"
              />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>DESTAQUE</Text>
              </View>
            </View>
            
            <View style={styles.infoContainer}>
              <Text style={styles.nomeImovel}>{imovel.nome}</Text>
              <Text style={styles.descricaoCard}>{imovel.descricao}</Text>
              
              <View style={styles.featuresContainer}>
                {imovel.features.map((feature, index) => (
                  <View key={index} style={styles.featurePill}>
                    <Text style={styles.featureText}>{feature}</Text>
                  </View>
                ))}
              </View>
              
              <View style={styles.precoContainer}>
                <Text style={styles.preco}>{imovel.preco}</Text>
                <View style={styles.specs}>
                  <Text style={styles.specText}>
                    <MaterialIcons name="hotel" size={16} /> {imovel.quartos} quartos
                  </Text>
                </View>
              </View>
              
              <TouchableOpacity 
                style={styles.botao}
                onPress={() => openDetails(imovel)}
              >
                <Text style={styles.botaoText}>VER DETALHES</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeDetails}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedHouse && (
              <>
                <Image
                  source={{ uri: selectedHouse.imagem }}
                  style={styles.modalImage}
                  resizeMode="cover"
                />
                <Text style={styles.modalTitle}>{selectedHouse.nome}</Text>
                <ScrollView style={styles.modalScroll}>
                  <Text style={styles.modalDescription}>
                    {selectedHouse.descricaoDetalhada}
                  </Text>
                  <View style={styles.modalSpecs}>
                    <Text style={styles.modalSpecItem}>
                      <MaterialIcons name="attach-money" size={16} /> Preço: {selectedHouse.preco}
                    </Text>
                    <Text style={styles.modalSpecItem}>
                      <MaterialIcons name="hotel" size={16} /> Quartos: {selectedHouse.quartos}
                    </Text>
                    {selectedHouse.features.map((feature, index) => (
                      <Text key={index} style={styles.modalSpecItem}>
                        <MaterialIcons name="check" size={16} /> {feature}
                      </Text>
                    ))}
                  </View>
                </ScrollView>
                <TouchableOpacity 
                  style={styles.modalCloseButton}
                  onPress={closeDetails}
                >
                  <Text style={styles.modalCloseButtonText}>FECHAR</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Aluguel Asa Sul © 2025</Text>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:contato@aluguelasasul.com')}>
          <Text style={styles.footerContact}>contato@aluguelasasul.com</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  cabecalho: {
    backgroundColor: '#2C3E50',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  headerContent: {
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ECF0F1',
    letterSpacing: 2,
  },
  subtituloHeader: {
    fontSize: 14,
    color: '#BDC3C7',
    marginTop: 5,
    letterSpacing: 1,
  },
  banner: {
    backgroundColor: '#d3a971',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    elevation: 3,
  },
  bannerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secao: {
    padding: 20,
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 10,
    elevation: 3,
  },
  tituloSecao: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 5,
    letterSpacing: 1,
  },
  subtituloSecao: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 20,
  },
  descricao: {
    fontSize: 15,
    color: '#34495E',
    lineHeight: 22,
    marginBottom: 20,
  },
  vantagensContainer: {
    marginTop: 10,
  },
  vantagemItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  vantagemText: {
    fontSize: 15,
    color: '#34495E',
    marginLeft: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    width: '30%',
    alignItems: 'center',
    elevation: 3,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginVertical: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#7F8C8D',
    textAlign: 'center',
  },
  label: {
    marginTop: 15,
    fontWeight: '600',
    color: '#2C3E50',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: 'white',
    fontSize: 16,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 10,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  imagensRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  galeriaImagem: {
    width: '48%',
    height: 120,
    borderRadius: 5,
  },
  galeriaImagemGrande: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  imagemAsaSul: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 25,
    elevation: 5,
  },
  imageContainer: {
    position: 'relative',
  },
  imagem: {
    width: '100%',
    height: Dimensions.get('window').width * 0.6,
  },
  badge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#E74C3C',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoContainer: {
    padding: 20,
  },
  nomeImovel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 8,
  },
  descricaoCard: {
    fontSize: 15,
    color: '#7F8C8D',
    marginBottom: 15,
    lineHeight: 20,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  featurePill: {
    backgroundColor: '#EAEDED',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginRight: 8,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 12,
    color: '#2C3E50',
  },
  precoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEDED',
    paddingBottom: 15,
  },
  preco: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d3a971',
  },
  specs: {
    flexDirection: 'row',
  },
  specText: {
    fontSize: 14,
    color: '#7F8C8D',
    marginLeft: 15,
  },
  botao: {
    backgroundColor: '#d3a971',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  botaoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#2C3E50',
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#BDC3C7',
    fontSize: 14,
  },
  footerContact: {
    color: '#d3a971',
    fontSize: 14,
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
    elevation: 5,
  },
  modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalScroll: {
    maxHeight: 200,
    marginBottom: 15,
  },
  modalDescription: {
    fontSize: 16,
    color: '#34495E',
    lineHeight: 24,
    marginBottom: 15,
  },
  modalSpecs: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#EAEDED',
    paddingTop: 10,
  },
  modalSpecItem: {
    fontSize: 16,
    color: '#2C3E50',
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalCloseButton: {
    backgroundColor: '#E74C3C',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  modalCloseButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});