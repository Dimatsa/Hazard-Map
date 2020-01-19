/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import firebase from "@react-native-firebase/app";
import Geolocation from 'react-native-geolocation-service';
import BottomBar from './components/BottomBar';
import MyLocationMapMarker from "./components/LocationMapMarker";

var firebase = require("firebase");

var config = {
    databaseURL: "https://hazard-map-265521.firebaseio.com/DATA/DEVELOP",
    projectId: "hazard-map-265521",
};
firebase.initializeApp(config);

// TODO(you): import any additional firebase services that you require for your app, e.g for auth:
//    1) install the npm package: `yarn add @react-native-firebase/auth@alpha` - you do not need to
//       run linking commands - this happens automatically at build time now
//    2) rebuild your app via `yarn run run:android` or `yarn run run:ios`
//    3) import the package here in your JavaScript code: `import '@react-native-firebase/auth';`
//    4) The Firebase Auth service is now available to use here: `firebase.auth().currentUser`

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\nCmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\nShake or press menu button for dev menu"
});

const firebaseCredentials = Platform.select({
  ios: "https://invertase.link/firebase-ios",
  android: "https://invertase.link/firebase-android"
});

type Props = {};

type State = {
        latitude: number;
      longitude: number;
      latitudeDelta: number;
      longitudeDelta: number;
}

export default class App extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  }

  componentDidMount() {
        Geolocation.getCurrentPosition(
            (position) => {
              console.log(position)
                this.setState(position.coords);
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    
  }

  render() {
    return (
      <View style={styles.overContainer}>
         <MapView
        style={styles.container}
        region={this.state} />
        <View style={styles.bottom}>
          <BottomBar/>
        </View>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  overContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    flexGrow: 2,
    width: "100%",
    backgroundColor: "#F5CCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bottom: {
    width: "100%",
    backgroundColor: "#ff0000",
    justifyContent: "center"
  }
});
