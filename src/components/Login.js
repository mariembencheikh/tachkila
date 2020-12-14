/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = () => {
    // this.state = {
    //   username: '',
    //   password: '',
    // };
  
    return (
        <View style={styles.container}>
            <Text style={styles.inputext}>Connexion</Text>
            <TextInput
                // value={this.state.username}
                // onChangeText={(username) => this.setState({ username })}
                label='Email'
                placeholder='Email'
                style={styles.input}
            />
            <TextInput
                // value={this.state.password}
                // onChangeText={(password) => this.setState({ password })}
                label='Password'
                placeholder='Mot de passe'
                secureTextEntry={true}
                style={styles.input}
            />

            <TouchableOpacity x>
                <Text style={styles.button}>Se connecter</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00EFA1',
    },
    input: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 52,
        padding: 10,
        marginBottom: 20,
        backgroundColor:'#FFFFFF',
        borderRadius:26
    },
    inputext: {
        width: 200,
        height: 54,
        fontSize:30,
        padding: 5,
        textAlign: 'center',
        color:'white',
        backgroundColor:'#00818A',
        marginBottom: 50,
       
    },
    button:{
        width: 300,
        height: 52,
        fontSize:25,
        padding: 5,
        fontFamily:'MV Boli',
        textAlign: 'center',
        color:'white',
        backgroundColor:'#00818A',
        marginBottom: 50,
        borderRadius:26,
          
       
    },
});

export default Login;
