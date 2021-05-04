import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "../Icon";
import styles from "./styles";

export default function ButtonIcon(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name={props.icon} size={24} color="white" />
    </View>
  );
}
