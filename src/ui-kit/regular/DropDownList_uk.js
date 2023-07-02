import React from "react";
import { StyleSheet } from "react-native";
import DropDownList from "react-native-dropdown-picker";

export function DropDownList_uk({
  openList,
  setOpenList,
  data,
  stateFunction,
  stateValue,
  textPlaceHolder,
}) {
  return (
    <DropDownList
      style={styles.input}
      setOpen={() => setOpenList(!openList)}
      open={openList}
      items={data}
      value={stateValue}
      setValue={(val) => stateFunction(val)}
      placeholder={textPlaceHolder}
      multiple={false}
      textStyle={styles.text}
      dropDownContainerStyle={styles.dropDownContainerOpen}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#1b2223",
    marginVertical: 20,
  },
  text: {
    color: "white",
  },
  dropDownContainerOpen: {
    backgroundColor: "#1b2223",
  },
});
