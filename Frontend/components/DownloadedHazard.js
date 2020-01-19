import React from "react";
import { Marker } from 'react-native-maps';

const map = {
    "Ice": require("../assets/ice.png"),
    "Fallen Tree": require("../assets/fallen-trees.png"),
    "Pothole": require("../assets/potholes.png"),
    "Goose": require("../assets/geese.png"),
    "Other": require("../assets/other.png"),
}

export default (props) => {
    return <Marker coordinate={{longitude: props.location._longitude, latitude: props.location._latitude}} image={map[props.hazardType]} />
}