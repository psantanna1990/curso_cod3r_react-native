/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import TextoCentral from '../components/TextoCentral';

export default (props) => {
  // console.warn(props.route.params.numero);
  //  Posso colocar um valor padrão para ficar um pouco mais seguro
  const numero =
    props.route && props.route.params && props.route.params.numero
      ? props.route.params.numero
      : 0;
  return <TextoCentral corFundo="#9932cd">Tela C - {numero}</TextoCentral>;
};
