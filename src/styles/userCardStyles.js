import { StyleSheet } from "react-native";

export const userCartStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    margin: 20,
    gap: 15,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#3a4f50",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  text: {
    color: "white",
  },
  male: {
    borderColor: "lightblue",
    borderWidth: 1,
  },
  female: {
    borderColor: "pink",
    borderWidth: 1,
  },
});
