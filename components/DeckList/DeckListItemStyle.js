import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "70%",
    height: 75
  },
  titleContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 6,
    fontWeight: "bold"
  }
});

export default styles;
