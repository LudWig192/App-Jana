import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
} from 'react-native';

import { VideoView, useVideoPlayer } from 'expo-video';

// Componente de Texto
import Texto from '../componentes/Texto';

export default function Sobre() {

  // Vídeo em loop
  const player = useVideoPlayer(
    require('../assets/video_novo.mp4'),
    (player) => {
      player.loop = true;
    }
  );

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* HEADER */}
      <View style={styles.header}>

        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.titulo}>
          Sobre Nós
        </Text>

        <Text style={styles.subtitulo}>
          Beleza, autoestima e cuidado em cada detalhe.
        </Text>

      </View>

      {/* SOBRE */}
      <View style={styles.card}>

        <Texto estiloEspecifico={styles.texto}>
          Somos um salão de beleza feminino dedicado a valorizar o
          que cada mulher tem de mais único. Aqui, combinamos
          cuidado, profissionalismo e um ambiente acolhedor para
          que você se sinta especial em cada visita.
          {'\n'}{'\n'}

          Nossa missão é realçar sua beleza e elevar sua autoestima
          com carinho e atenção em cada detalhe.
          {'\n'}{'\n'}

          Nosso objetivo é proporcionar momentos de autocuidado sem
          que você precise sair da rotina.
          {'\n'}{'\n'}

          Trabalhamos com dedicação para garantir unhas impecáveis,
          atendimento acolhedor e uma experiência confortável para
          cada cliente.
        </Texto>

      </View>

      {/* FUNDADORA */}
      <View style={styles.fundadoraSection}>

        <Text style={styles.fundadoraTitulo}>
          Nossa Fundadora
        </Text>

        <Text style={styles.fundadoraSubtitulo}>
          "Eu apenas quero que minha familia esteja linda como sempre"
        </Text>

        <View style={styles.fundadoraCard}>

          <Image
            source={require('../assets/Fundadora.jpg')}
            style={styles.fundadora}
            resizeMode="cover"
          />

          <View style={styles.fundadoraInfo}>

            <Text style={styles.nomeFundadora}>
              Janaynna Shirlainy Tinin 
            </Text>

            <Text style={styles.cargoFundadora}>
              Fundadora & Especialista em Beleza
            </Text>

            <Texto estiloEspecifico={styles.textoFundadora}>
              Nascida em Pernambuco no ano de 1983, Janayna
              sempre acreditou que a beleza vai além da aparência:
              ela fortalece a autoestima e transforma vidas.
              {'\n'}{'\n'}

              Com anos de experiência e dedicação, criou um espaço
              acolhedor pensado especialmente para mulheres que
              desejam se sentir mais confiantes, belas e cuidadas.
              {'\n'}{'\n'}

              Seu trabalho é guiado pelo carinho, profissionalismo
              e atenção aos mínimos detalhes, oferecendo uma
              experiência única para cada cliente.
            </Texto>

          </View>

        </View>

      </View>

      {/* VÍDEO */}
      <View style={styles.videoContainer}>

        <Text style={styles.videoTitulo}>
          Conheça Nosso Espaço
        </Text>

        <VideoView
          player={player}
          style={styles.video}
          allowsPictureInPicture
        />

      </View>

      {/* FOOTER */}
      <View style={styles.footer}>

        <Text style={styles.footerTexto}>
          © 2026 Salão Feminino • Todos os direitos reservados
        </Text>

      </View>

      <StatusBar style="light" animated />

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffc0dc',
  },

  // HEADER
  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 30,
    backgroundColor: '#b82366',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
  },

  logo: {
    width: 250,
    height: 300,
    marginBottom: -40,
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  subtitulo: {
    color: '#ffe3f0',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },

  // CARD SOBRE
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 24,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#ff96c5',

    shadowColor: '#f15aa4',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,

    elevation: 6,
  },

  texto: {
    color: '#5a5a5a',
    fontSize: 16,
    lineHeight: 28,
    textAlign: 'justify',
  },

  // FUNDADORA
  fundadoraSection: {
    marginBottom: 35,
    paddingHorizontal: 20,
  },

  fundadoraTitulo: {
    color: '#f70071',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },

  fundadoraSubtitulo: {
    color: '#b82366',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 24,
  },

  fundadoraCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 20,
    borderWidth: 2,
    borderColor: '#ff96c5',

    shadowColor: '#f15aa4',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,

    elevation: 6,
  },

  fundadora: {
    width: 350,
    height: 340,
    borderRadius: 22,
    marginBottom: 20,
  },

  fundadoraInfo: {
    alignItems: 'center',
  },

  nomeFundadora: {
    color: '#f70071',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  cargoFundadora: {
    color: '#b82366',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 18,
  },

  textoFundadora: {
    color: '#5a5a5a',
    fontSize: 16,
    lineHeight: 28,
    textAlign: 'justify',
  },

  // VÍDEO
  videoContainer: {
    marginHorizontal: 20,
    marginBottom: 40,
  },

  videoTitulo: {
    color: '#f70071',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
  },

  video: {
    width: '100%',
    height: 220,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#f15aa4',
  },

  // FOOTER
  footer: {
    alignItems: 'center',
    paddingBottom: 40,
    paddingHorizontal: 20,
  },

  footerTexto: {
    color: '#f70071',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },

});