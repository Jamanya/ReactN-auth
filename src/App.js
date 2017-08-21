import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';




class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAr3qUeWJovYk9hQ3ZJfvnCOzIil1Qh02I',
            authDomain: 'reactn-auth.firebaseapp.com',
            databaseURL: 'https://reactn-auth.firebaseio.com',
            projectId: 'reactn-auth',
            storageBucket: 'reactn-auth.appspot.com',
            messagingSenderId: '955502263583'
          });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>Hello, World</Text>
            </View>
        );
    }
}

export default App;