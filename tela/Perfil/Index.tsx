import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

import * as ImagePicker from 'expo-image-picker';

export default function Auth() {

  // Alterna entre login e cadastro
  const [cadastro, setCadastro] = useState(false);

  // Campos
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Foto
  const [foto, setFoto] = useState<string | null>(null);

  // Abrir câmera
  async function abrirCamera() {

    // Permissão
    const permissao =
      await ImagePicker.requestCameraPermissionsAsync();

    if (!permissao.granted) {

      Alert.alert(
        'Permissão negada',
        'É necessário permitir acesso à câmera.'
      );

      return;
    }

    // Abrir câmera
    const resultado = await ImagePicker.launchCameraAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    // Verifica foto
    if (!resultado.canceled) {
      setFoto(resultado.assets[0].uri);
    }
  }

  // Enviar
  function enviar() {

    // Verifica campos
    if (
      email === '' ||
      senha === '' ||
      (cadastro && nome === '')
    ) {

      Alert.alert(
        'Erro',
        'Preencha todos os campos'
      );

      return;
    }

    // Mensagem
    if (cadastro) {

      Alert.alert(
        'Sucesso',
        'Cadastro realizado!'
      );

    } else {

      Alert.alert(
        'Sucesso',
        'Login realizado!'
      );
    }

    // Limpa campos
    setNome('');
    setEmail('');
    setSenha('');
    setFoto(null);
  }

  return (

    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* HEADER */}
      <View style={styles.header}>

        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.headerTitulo}>
          {cadastro ? 'Criar Conta' : 'Bem-vinda'}
        </Text>

        <Text style={styles.headerSubtitulo}>
          {cadastro
            ? 'Cadastre-se para continuar'
            : 'Faça login para acessar sua conta'}
        </Text>

      </View>

      {/* FORMULÁRIO */}
      <View style={styles.formContainer}>

        <Text style={styles.titulo}>
          {cadastro ? 'Cadastro' : 'Login'}
        </Text>

        {/* FOTO */}
        {cadastro && (

          <View style={styles.fotoContainer}>

            <TouchableOpacity
              style={styles.botaoFoto}
              onPress={abrirCamera}
            >

              {foto ? (

                <Image
                  source={{ uri: foto }}
                  style={styles.foto}
                />

              ) : (

                <Text style={styles.textoFoto}>
                  Tirar Foto
                </Text>

              )}

            </TouchableOpacity>

          </View>

        )}

        {/* Nome */}
        {cadastro && (

          <TextInput
            placeholder="Digite seu nome"
            placeholderTextColor="#999"
            style={styles.input}
            value={nome}
            onChangeText={setNome}
          />

        )}

        {/* Email */}
        <TextInput
          placeholder="Digite seu email"
          placeholderTextColor="#999"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        {/* Senha */}
        <TextInput
          placeholder="Digite sua senha"
          placeholderTextColor="#999"
          style={styles.input}
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        {/* BOTÃO */}
        <TouchableOpacity
          style={styles.botao}
          onPress={enviar}
        >

          <Text style={styles.botaoTexto}>
            {cadastro ? 'Cadastrar' : 'Entrar'}
          </Text>

        </TouchableOpacity>

        {/* TROCAR TELA */}
        <TouchableOpacity
          onPress={() => setCadastro(!cadastro)}
        >

          <Text style={styles.link}>
            {cadastro
              ? 'Já possui conta? Fazer Login'
              : 'Não possui conta? Cadastre-se'}
          </Text>

        </TouchableOpacity>

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
    paddingBottom: 35,
    paddingHorizontal: 20,
    backgroundColor: '#b82366',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 30,
  },

  logo: {
    width: 220,
    height: 220,
    marginBottom: -20,
  },

  headerTitulo: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  headerSubtitulo: {
    color: '#ffe3f0',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },

  // FORM
  formContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 28,
    padding: 25,
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

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f70071',
    textAlign: 'center',
    marginBottom: 30,
  },

  // FOTO
  fotoContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },

  botaoFoto: {
    width: 130,
    height: 130,
    borderRadius: 100,
    backgroundColor: '#fff5fa',
    borderWidth: 3,
    borderColor: '#ff96c5',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  textoFoto: {
    color: '#f70071',
    fontSize: 16,
    fontWeight: 'bold',
  },

  foto: {
    width: '100%',
    height: '100%',
  },

  // INPUT
  input: {
    backgroundColor: '#fff5fa',
    borderWidth: 2,
    borderColor: '#ffd0e4',
    borderRadius: 18,
    padding: 16,
    marginBottom: 18,
    fontSize: 16,
    color: '#5a5a5a',
  },

  // BOTÃO
  botao: {
    backgroundColor: '#f70071',
    padding: 18,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,

    shadowColor: '#f70071',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    elevation: 5,
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // LINK
  link: {
    textAlign: 'center',
    color: '#f70071',
    fontSize: 16,
    fontWeight: '600',
  },

  // FOOTER
  footer: {
    alignItems: 'center',
    paddingBottom: 40,
    paddingHorizontal: 20,
  },

  footerTexto: {
    color: '#f70071',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '600',
  },

});