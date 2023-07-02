import { TextInput, StyleSheet } from "react-native";
export function TextInput_uk({ stateFunction, stateValue ,}) {
  return (
    <TextInput
      style={styles.input}
      onChange={(event) => stateFunction(event.nativeEvent.text)}
      value={stateValue}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#1b2223",
    marginVertical: 20,
    color:"white"
  },
});
