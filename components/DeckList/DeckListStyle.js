import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  addDeckButton: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 20,
    width: "50%"
  },
  listContainer: {
    height: "70%",
    width: "100%"
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  buttonContainer: {
    height: 100,
    justifyContent: "center"
  }
});

export default styles;
