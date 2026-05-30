import React, { useState } from 'react';

import {
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

import CadaProduto from './Produto';
import Style from './estiloProd';

export default function Index({ itens }: any) {

  // Modal
  const [modalVisivel, setModalVisivel] = useState(false);

  // Imagem selecionada
  const [imagemSelecionada, setImagemSelecionada] = useState('');

  // Abrir modal
  function abrirModal(imagem: any) {
    setImagemSelecionada(imagem);
    setModalVisivel(true);
  }

  return (

    <View style={Style.container}>

      {/* HEADER */}
      <View style={Style.header}>

        <Image
          source={require('../../assets/logo.png')}
          style={Style.logo}
          resizeMode="contain"
        />

        <Text style={Style.headerTitulo}>
          Nossos Produtos
        </Text>

        <Text style={Style.headerSubtitulo}>
          Beleza, autoestima e cuidado em cada detalhe.
        </Text>

      </View>

      {/* LISTA */}
      <FlatList
        data={itens.lista}

        showsVerticalScrollIndicator={false}

        contentContainerStyle={Style.lista}

        renderItem={({ item }) => (

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => abrirModal(item.imagem)}
          >

            <CadaProduto produto={item} />

          </TouchableOpacity>

        )}

        keyExtractor={(item) =>
          item.id.toString()
        }
      />

      {/* MODAL */}
      <Modal
        visible={modalVisivel}
        transparent
        animationType="fade"
      >

        <View style={Style.modalContainer}>

          <Pressable
            style={Style.modalFechar}
            onPress={() => setModalVisivel(false)}
          >
            <Text style={Style.modalTexto}>
              Fechar
            </Text>
          </Pressable>

          <Image
            source={imagemSelecionada}
            style={Style.modalImagem}
            resizeMode="contain"
          />

        </View>

      </Modal>

      {/* FOOTER */}
      <View style={Style.footer}>

        <Text style={Style.footerTexto}>
          © 2026 Salão Feminino • Todos os direitos reservados
        </Text>

      </View>

      <StatusBar style="light" animated />

    </View>
  );
}