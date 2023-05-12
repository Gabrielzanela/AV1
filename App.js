import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Input, SocialIcon } from 'react-native-elements';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo.png')} />
      <Text style={styles.text}>Bem-vindo ao meu aplicativo!</Text>
      <Button
        title="Próxima Tela"
        onPress={() => navigation.navigate('Opcoes')}
        buttonStyle={styles.button}
      />
    </View>
  );
};

const OpcoesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo.png')} />
      <Input
        style={styles.input}
        placeholder="Informe o email cadastrado."
        inputContainerStyle={styles.inputContainer}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
        buttonStyle={styles.button}
      />
      <SocialIcon
        title="Entrar com Facebook"
        button
        type="facebook"
        onPress={() => {}}
        style={styles.socialButton}
      />
    </View>
  );
};

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Input placeholder="E-mail" inputContainerStyle={styles.inputContainer} />
      <Input
        placeholder="Senha"
        secureTextEntry
        inputContainerStyle={styles.inputContainer}
      />
      <Button
        title="Enviar"
        onPress={() => navigation.navigate('LoginSucesso')}
        buttonStyle={styles.button}
      />
    </View>
  );
};

const CadastroScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Input placeholder="Nome" inputContainerStyle={styles.inputContainer} />
      <Input
        placeholder="Data de Nascimento"
        inputContainerStyle={styles.inputContainer}
      />
      <Input placeholder="E-mail" inputContainerStyle={styles.inputContainer} />
      <Input
        placeholder="Senha"
        secureTextEntry
        inputContainerStyle={styles.inputContainer}
      />
      <Button
        title="Enviar"
        onPress={() => navigation.navigate('CadastroSucesso')}
        buttonStyle={styles.button}
      />
    </View>
  );
};

const LoginSucessoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Input placeholder="E-mail" inputContainerStyle={styles.inputContainer} />
      <Button
        title="Enviar"
        onPress={() => navigation.navigate('Cadastro')}
        buttonStyle={styles.button}
      />
    </View>
  );
};

const CadastroSucessoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Input placeholder="Nome" inputContainerStyle={styles.inputContainer} />
      <Button
        title="Enviar"
        onPress={() => navigation.navigate('Cadastro')}
        buttonStyle={styles.button}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Opcoes" component={OpcoesScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Cadastro" component={CadastroScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    marginVertical: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f4511e',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
  },
  input: {
    width: '80%',
    marginBottom: 20,
  },
  inputContainer: {
    borderBottomWidth: 0,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  socialButton: {
    marginTop: 10,
    backgroundColor: '#3b5998',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default App;
