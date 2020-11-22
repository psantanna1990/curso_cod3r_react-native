/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Button} from 'react-native';

export default (props) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        {props.voltar ? (
          <Button
            title="Voltar"
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        ) : (
          false
        )}
        {props.avancar ? (
          <Button
            title="Avançar"
            onPress={() => {
              // quando utilizado o navigation.navigate ele não sobrepoe a mesma tela já com o
              // navigate.push ele adiciona novamente a mesma tela a stack (por exemplo quando
              // precisamos chamar a mesma tela com parametros diferentes)
              // props.navigation.navigate(props.avancar);
              props.navigation.push(props.avancar, props.avancarParams || null);
            }}
          />
        ) : (
          false
        )}
      </View>
      <View
        style={{
          flex: 1,
        }}>
        {props.children}
      </View>
    </View>
  );
};
