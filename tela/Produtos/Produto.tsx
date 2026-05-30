import { Image, Text, View } from 'react-native';

import { Card } from "react-native-paper";

import styles from './estiloProd';

import Texto from '../../componentes/Texto';

export default function Produto({

  produto: {
    id,
    nome,
    imagem,
    descricao,
    preco,
    destaque
  }

}: any) {

  return (

    <Card
      mode='elevated'
      style={styles.card}
    >

      {/* IMAGEM */}
      <Card.Cover
        source={imagem}
        style={styles.imagem}
      />

      {/* CONTEÚDO */}
      <Card.Content>

        {/* TÍTULO */}
        <Texto estiloEspecifico={styles.titulo}>
          {nome}
        </Texto>

        {/* DESCRIÇÃO */}
        <Texto estiloEspecifico={styles.descricao}>
          {descricao}
        </Texto>

        {/* PREÇO E BADGE */}
        <View style={styles.infoContainer}>

          <Text style={styles.preco}>
            {preco}
          </Text>

          <View style={styles.badge}>

            <Text style={styles.badgeTexto}>
              {destaque}
            </Text>

          </View>

        </View>

      </Card.Content>

    </Card>
  );
}