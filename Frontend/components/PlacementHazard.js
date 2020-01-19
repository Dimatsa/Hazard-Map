import React from "react";
import { Marker } from 'react-native-maps';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements';


export default (props) => {
    const selected = React.useState(false);
    return props.visible ? (      <Button buttonStyle={{position: "absolute", left: (props.left - 50) + "%", bottom: "10%", width: 50, height: 50}} onPress={() =>  props.setSelected(props.name)} icon={    <Image
          source={props.image}
          style={{width: 50, height: 50}}
        />} > 
        </Button>) : null
}