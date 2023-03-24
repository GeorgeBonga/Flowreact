import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text,TouchableOpacity } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const countries = ["Regular", "Irregular"]

  const handleUsernameChange = (value) => {
    setUsername(value);
  };
  const handleAgeChange = (value) => {
    setAge(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleSubmit = () => {
    // Handle form submission here
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Full name"
        value={username}
        onChangeText={handleUsernameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={handleAgeChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />
      <SelectDropdown
        data={countries}
        // style={styles.input}
        defaultButtonText={"Period Type"}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item
        }}
      />
      <TouchableOpacity style={styles.button}><Text>Register</Text></TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#ccc',
  },
  button:{
    backgroundColor:'#800080',
    justifyContent:'center',
    alignItems:'center',
    width: '40%',
    height: 40,
    marginTop: 40,
   
    padding: 10,
    borderRadius: 10,
  }
});

export default RegistrationForm;
