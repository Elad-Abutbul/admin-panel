import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;
export const userModalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    height: HEIGHT - 200,
    width: WIDTH - 80,
    backgroundColor: "#3a4f50",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  input: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#1b2223",
    marginVertical: 20,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    gap: 70,
    padding: 10,
  },
  exit: {
    alignSelf: "flex-end",
  },
  saveBtn: {
    backgroundColor: "darkblue",
    padding: 7,
    marginBottom: 20,
    borderRadius: 50,
  },
});
