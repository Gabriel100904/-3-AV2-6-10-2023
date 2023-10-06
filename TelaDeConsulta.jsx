import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const dadosDeConsultas = [
  { id: '1', nome: 'Paciente 1', cpf: '123.456.789-00', dataNascimento: '01/01/1990', endereco: 'Rua A, 123', valorCobrado: 'R$ 100,00' },
  { id: '2', nome: 'Paciente 2', cpf: '234.567.890-11', dataNascimento: '02/02/1991', endereco: 'Rua B, 456', valorCobrado: 'R$ 150,00' },

];

const TelaDeConsulta = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>Nome: {item.nome}</Text>
      <Text>CPF: {item.cpf}</Text>
      <Text>Data de Nascimento: {item.dataNascimento}</Text>
      <Text>Endereço: {item.endereco}</Text>
      <Text>Valor Cobrado: {item.valorCobrado}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('DetalhesConsulta', { paciente: item })}>
        <Text>Detalhes</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('EditarConsulta', { paciente: item })}>
        <Text>Editar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text>Pacientes Agendados:</Text>
      <FlatList
        data={dadosDeConsultas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default TelaDeConsulta;