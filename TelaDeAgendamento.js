import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const TelaDeAgendamento = () => {
  const [dadosPaciente, setDadosPaciente] = useState({
    nome: '',
    cpf: '',
    dataNascimento: '',
    endereco: '',
  });

  const handleAgendamento = () => {
    console.log('Dados do Paciente Agendado:', dadosPaciente);
  };

  return (
    <View>
      <TextInput
        placeholder="Nome Completo"
        value={dadosPaciente.nome}
        onChangeText={(text) => setDadosPaciente({ ...dadosPaciente, nome: text })}
      />
      <TextInput
        placeholder="CPF"
        value={dadosPaciente.cpf}
        onChangeText={(text) => setDadosPaciente({ ...dadosPaciente, cpf: text })}
      />
      <TextInput
        placeholder="Data de Nascimento"
        value={dadosPaciente.dataNascimento}
        onChangeText={(text) => setDadosPaciente({ ...dadosPaciente, dataNascimento: text })}
      />
      <TextInput
        placeholder="Endereço"
        value={dadosPaciente.endereco}
        onChangeText={(text) => setDadosPaciente({ ...dadosPaciente, endereco: text })}
      />
      {}
      <Button title="Agendar Consulta" onPress={handleAgendamento} />
    </View>
  );
};

export default TelaDeAgendamento;