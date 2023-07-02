import React from "react";
import CheckBox from "react-native-check-box";
export function CheckBox_uk({ witchFilter, handleSort, value }) {
  return (
    <CheckBox
      isChecked={witchFilter === value || witchFilter===true}
      onClick={() => handleSort(value)}
      checkBoxColor="white"
      checkedCheckBoxColor="green"
    />
  );
}
