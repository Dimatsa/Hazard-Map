import React from "react";

const map = {
    "Ice": require("../assets/ice.png"),
    "Fallen Tree": require("../assets/fallen-trees.png"),
    "Pothole": require("../assets/potholes.png"),
    "Goose": require("../assets/geese.png"),
    "Other": require("../assets/other.png"),
}

export default (props) => {
    <Marker coordinate={props.coordinate} image={map[props.name]} />
}