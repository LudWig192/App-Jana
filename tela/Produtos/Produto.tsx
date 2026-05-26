import { Card } from "react-native-paper";

import styles from './estiloProd'
import Texto from '../../componentes/Texto';

export default function Produto({
  produto: {
    id,
    nome,
    imagem,
    descricao
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

        <Texto estiloEspecifico={styles.titulo}>
          {nome}
        </Texto>

        <Texto estiloEspecifico={styles.descricao}>
          {descricao}
        </Texto>

      </Card.Content>

    </Card>
  );
}