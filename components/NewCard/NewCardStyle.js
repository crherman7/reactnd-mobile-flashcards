import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: "30%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    width: "80%",
    height: 30
  },
  submitButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DDDDDD",
    borderRadius: 20,
    width: 200,
    height: 40
  },
  contentMargin: {
    marginTop: 10
  }
});

export default styles;
