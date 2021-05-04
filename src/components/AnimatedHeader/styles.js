import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    padding: 15,
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    flexDirection: "row",
  },
  wifiIcon: {
    marginRight: 10,
  },
});
export default styles;
