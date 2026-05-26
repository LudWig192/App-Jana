// Tela/Auth.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';

export default function Auth() {

  //Alterna entre login e cadastro
  const [cadastro, setCadastro] = useState(false);

  //Campos
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function enviar() {

    //Verifica campos
    if(email === '' || senha === '' || (cadastro && nome === '')){
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    //Mensagem
    if(cadastro){
      Alert.alert('Sucesso', 'Cadastro realizado!');
    }else{
      Alert.alert('Sucesso', 'Login realizado!');
    }

    //Limpa campos
    setNome('');
    setEmail('');
    setSenha('');
  }

  return (
    <View style={styles.container}>

      {/* Título */}
      <Text style={styles.titulo}>
        {cadastro ? 'Cadastro' : 'Login'}
      </Text>

      {/* Nome */}
      {cadastro && (
        <TextInput
          placeholder="Digite seu nome"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />
      )}

      {/* Email */}
      <TextInput
        placeholder="Digite seu email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      {/* Senha */}
      <TextInput
        placeholder="Digite sua senha"
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      {/* Botão */}
      <TouchableOpacity
        style={styles.botao}
        onPress={enviar}
      >
        <Text style={styles.botaoTexto}>
          {cadastro ? 'Cadastrar' : 'Entrar'}
        </Text>
      </TouchableOpacity>

      {/* Trocar tela */}
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
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#fff'
  },

  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#f70071',
    textAlign: 'center',
    marginBottom: 40
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    fontSize: 16
  },

  botao: {
    backgroundColor: '#f70071',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20
  },

  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },

  link: {
    textAlign: 'center',
    color: '#f70071',
    fontSize: 16,
    fontWeight: '600'
  }

});