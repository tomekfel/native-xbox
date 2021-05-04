import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    paddingTop: 120,
    paddingBottom: 15,
    paddingLeft: 15,
  },
  game: {
    marginRight: 15,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,
  },
  cover: {
    height: 300,
    width: 300,
    borderRadius: 6,
    overflow: "hidden",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 50,
    paddingHorizontal: 15,
  },
  title: {
    color: "white",
    fontSize: 34,
  },
  editor: {
    color: "white",
  },
});
export default styles;
