import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  submitButton: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 20,
    width: 200
  },
  topFont: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonsContainer: {
    height: 100,
    marginTop: 40,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export default styles;
