import { StyleSheet } from "react-native";

export default StyleSheet.create({

  // CARD
  card: {
    backgroundColor: '#FFFFFF',
    marginBottom: 25,
    borderRadius: 25,
    overflow: 'hidden',

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

  // IMAGEM
  imagem: {
    height: 220,
    backgroundColor: '#ffc0dc',
  },

  // TÍTULO
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f70071',
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'center',
  },

  // DESCRIÇÃO
  descricao: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    lineHeight: 24,
    paddingBottom: 15,
  },

});