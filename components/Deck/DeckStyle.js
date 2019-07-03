import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  titleFont: {
    fontSize: 20,
    fontWeight: "bold"
  },
  cardNumberfont: {
    fontSize: 16
  },
  deckButton: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 20,
    width: 200
  },
  buttonMargin: {
    marginTop: 40
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50
  },
  buttonContainer: {
    marginTop: 40,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: 150
  }
});

export default styles;
