import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TelaHome = ({ navigation }) => {
  return (
    <View>
      <Text>Bem-vindo ao consultorio </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Agendamento')}>
        <Text>Agendar Consulta</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Consulta')}>
        <Text>Consulta de Pacientes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TelaHome;