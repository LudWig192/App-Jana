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
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    (player) => {
      player.loop = true;
    }
  );

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.titulo}>Sobre Nós</Text>

        <Text style={styles.subtitulo}>
          Beleza, autoestima e cuidado em cada detalhe.
        </Text>
      </View>

      {/* Card principal */}
      <View style={styles.card}>
        <Texto estiloEspecifico={styles.texto}>
          Somos um salão de beleza feminino dedicado a valorizar o
          que cada mulher tem de mais único. Aqui, combinamos
          cuidado, profissionalismo e um ambiente acolhedor para
          que você se sinta especial em cada visita.
          {'\n'}
          {'\n'}
          Nossa missão é realçar sua beleza e elevar sua autoestima
          com carinho e atenção em cada detalhe.
          {'\n'}
          {'\n'}
          Nosso objetivo é proporcionar momentos de autocuidado sem
          que você precise sair da rotina.
          {'\n'}
          {'\n'}
          Trabalhamos com dedicação para garantir unhas impecáveis,
          atendimento acolhedor e uma experiência confortável para
          cada cliente.
        </Texto>
      </View>

      {/* Imagem */}
      <View style={styles.imagemContainer}>
        <Image
          source={require('../assets/Banner.png')}
          style={styles.imagem}
          resizeMode="contain"
           
        />
      </View>

      {/* Vídeo */}
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

      {/* Rodapé */}
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
    backgroundColor: '#0D0D0D',
  },

  header: {
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  logo: {
    width: 180,
    height: 180,
    marginBottom: 10,
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  subtitulo: {
    color: '#B3B3B3',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },

  card: {
    backgroundColor: '#1A1A1A',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 24,
    marginBottom: 25,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    elevation: 6,
  },

  texto: {
    color: '#E5E5E5',
    fontSize: 16,
    lineHeight: 28,
    textAlign: 'justify',
  },

  imagemContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },

  imagem: {
    width: 260,
    height: 260,
    borderRadius: 24,
  },

  videoContainer: {
    marginHorizontal: 20,
    marginBottom: 40,
  },

  videoTitulo: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },

  video: {
    width: '100%',
    height: 220,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#1A1A1A',
  },

  footer: {
    alignItems: 'center',
    paddingBottom: 40,
    paddingHorizontal: 20,
  },

  footerTexto: {
    color: '#777',
    fontSize: 13,
    textAlign: 'center',
  },
});