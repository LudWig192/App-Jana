import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  // CONTAINER
  container: {
    flex: 1,
    backgroundColor: '#ffc0dc',
  },

  // HEADER
  header: {
    alignItems: 'center',

    paddingTop: 25,
    paddingBottom: 40,
    paddingHorizontal: 20,

    backgroundColor: '#b82366',

    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,

    shadowColor: '#b82366',
    shadowOffset: {
      width: 0,
      height: 6,
    },

    shadowOpacity: 0.35,
    shadowRadius: 8,

    elevation: 10,
  },

  // LOGO
  logo: {
    width: 220,
    height: 220,
    marginBottom: -20,
  },

  // TÍTULO HEADER
  headerTitulo: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: 'bold',

    marginBottom: 8,

    textAlign: 'center',
  },

  // SUBTÍTULO HEADER
  headerSubtitulo: {
    color: '#ffe3f0',

    fontSize: 16,

    textAlign: 'center',

    lineHeight: 24,
  },

  // LISTA
  lista: {
    padding: 20,
    paddingBottom: 120,
  },

  // CARD
  card: {
    backgroundColor: '#FFFFFF',

    marginBottom: 30,

    borderRadius: 35,

    overflow: 'hidden',

    borderWidth: 1.5,
    borderColor: '#ffd0e4',

    shadowColor: '#f15aa4',
    shadowOffset: {
      width: 0,
      height: 8,
    },

    shadowOpacity: 0.25,
    shadowRadius: 10,

    elevation: 10,

    width: '100%',
  },

  // IMAGEM
  imagem: {
    height: 320,

    backgroundColor: '#fff5fa',

    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  // TÍTULO CARD
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',

    color: '#f70071',

    textAlign: 'center',

    marginTop: 15,
    marginBottom: 12,
  },

  // DESCRIÇÃO
  descricao: {
    fontSize: 16,

    color: '#666',

    textAlign: 'center',

    lineHeight: 26,

    marginBottom: 20,
  },

  // PREÇO E BADGE
  infoContainer: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 10,
  },

  // PREÇO
  preco: {
    fontSize: 28,
    fontWeight: 'bold',

    color: '#f70071',
  },

  // BADGE
  badge: {
    backgroundColor: '#f70071',

    paddingHorizontal: 16,
    paddingVertical: 10,

    borderRadius: 50,

    shadowColor: '#f70071',
    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.3,
    shadowRadius: 4,

    elevation: 5,
  },

  // TEXTO BADGE
  badgeTexto: {
    color: '#FFFFFF',

    fontSize: 13,
    fontWeight: 'bold',

    textTransform: 'uppercase',
  },

  // MODAL
  modalContainer: {
    flex: 1,

    backgroundColor: 'rgba(0,0,0,0.94)',

    justifyContent: 'center',
    alignItems: 'center',

    padding: 20,
  },

  // IMAGEM MODAL
  modalImagem: {
    width: '100%',
    height: 450,

    borderRadius: 30,

    backgroundColor: '#FFFFFF',
  },

  // BOTÃO FECHAR MODAL
  modalFechar: {
    position: 'absolute',

    top: 60,
    right: 25,

    zIndex: 10,

    backgroundColor: '#f70071',

    paddingHorizontal: 22,
    paddingVertical: 12,

    borderRadius: 20,

    shadowColor: '#f70071',
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.35,
    shadowRadius: 5,

    elevation: 6,
  },

  // TEXTO MODAL
  modalTexto: {
    color: '#FFFFFF',

    fontSize: 16,
    fontWeight: 'bold',
  },

  // FOOTER
  footer: {
    alignItems: 'center',
    justifyContent: 'center',

    paddingVertical: 25,
    paddingHorizontal: 20,

    backgroundColor: '#ffc0dc',
  },

  // TEXTO FOOTER
  footerTexto: {
    color: '#f70071',

    fontSize: 15,

    textAlign: 'center',

    fontWeight: '600',
  },

});

export default styles;