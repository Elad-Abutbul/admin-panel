import React from "react";
import CheckBox from "react-native-check-box";
export function CheckBox_uk({witchSort,handleSort,textCheck}) {
  return (
    <CheckBox
      isChecked={witchSort === textCheck}
      onClick={() => handleSort(textCheck)}
      checkBoxColor="white"
      checkedCheckBoxColor="green"
    />
  );
}
