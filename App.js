import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Avatar, Button, Input } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{ marginVertical: 20 }}>
        <Avatar
          size={100}
          rounded
          icon={{ name: "user", type: "font-awesome" }}
          containerStyle={{ backgroundColor: "#0000FF" }}
        />
      </View>

      <Text style={styles.label}>Login</Text>
      <Input placeholder='' />

      <Text style={styles.label}>Senha</Text>
      <Input placeholder="" secureTextEntry={true} />

      <Button
        title='Logar'
        onPress={() => navigation.navigate('Listacontatos')}
        buttonStyle={{ backgroundColor: '#007AFF', borderRadius: 10, marginVertical: 5 }}
        titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
      />
      <Button
        title="Cadastrar"
        onPress={() => navigation.navigate('Cadastrousuario')}
        buttonStyle={{ backgroundColor: '#FF3B30', borderRadius: 10, marginVertical: 5 }}
        titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
      />
    </View>
  );
}

function CadastroUsuarioScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.label}>Nome</Text>
      <Input placeholder="" />
      <Text style={styles.label}>Cpf</Text>
      <Input placeholder="" />
      <Text style={styles.label}>Email</Text>
      <Input placeholder="" />
      <Text style={styles.label}>Senha</Text>
      <Input placeholder="" secureTextEntry={true} />

      <Button
        title="Salvar"
        titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
        buttonStyle={{ backgroundColor: '#007AFF', borderRadius: 10, marginVertical: 5 }}
      />
    </View>
  );
}

function ListacontatosScreen({ navigation }) {
  const contatos = [
    { nome: 'Marcos Andrade', telefone: '81 988553424' },
    { nome: 'Patrícia Tavares', telefone: '81 998765332' },
    { nome: 'Rodrigo Antunes', telefone: '81 987765525' },
  ];
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#E6F0FF' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Cadastrocontato')}>
        <Ionicons name="add" size={28} color="#007AFF" />
      </TouchableOpacity>
      <FlatList
        data={contatos}
        keyExtractor={item => item.telefone}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20, flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
            <Avatar
              size={100}
              rounded
              icon={{ name: "user", type: "font-awesome" }}
              containerStyle={{ backgroundColor: "#0000FF" }}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Contato')}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.nome}</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.telefone}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

function CadastrocontatoSreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <Input placeholder="" />
      <Text style={styles.label}>Email</Text>
      <Input placeholder="" />
      <Text style={styles.label}>Telefone</Text>
      <Input placeholder="" />
      <Button
        title="Salvar"
        titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
        buttonStyle={{ backgroundColor: '#007AFF', borderRadius: 10, marginVertical: 5 }}
      />
    </View>
  );
}

function ContatoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <Input placeholder="" />
      <Text style={styles.label}>Email</Text>
      <Input placeholder="" />
      <Text style={styles.label}>Telefone</Text>
      <Input placeholder="" />
      <Button
        title="Alterar"
        titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
        buttonStyle={{ backgroundColor: '#007AFF', borderRadius: 10, marginVertical: 5 }}
      />
      <Button
        title="Excluir"
        titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
        buttonStyle={{ backgroundColor: '#FF3B30', borderRadius: 10, marginVertical: 5 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F0FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  fakeHeader: {
    width: '100%',
    backgroundColor: '#d3d3d3',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  fakeHeaderText: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
  },
  label: {
    color: '#000000',
    fontWeight: 'bold',
    marginLeft: -300,
  },
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Listacontatos" component={ListacontatosScreen} />
        <Stack.Screen name="Cadastrousuario" component={CadastroUsuarioScreen} />
        <Stack.Screen name="Cadastrocontato" component={CadastrocontatoSreen} />
        <Stack.Screen name="Contato" component={ContatoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;