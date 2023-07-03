import React from "react";
import DropDownList from "react-native-dropdown-picker";
import {dropDownStyles} from '../../styles/dropDownList'
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
      style={dropDownStyles.input}
      setOpen={() => setOpenList(!openList)}
      open={openList}
      items={data}
      value={stateValue}
      setValue={(val) => stateFunction(val)}
      placeholder={textPlaceHolder}
      multiple={false}
      textStyle={dropDownStyles.text}
      dropDownContainerStyle={dropDownStyles.dropDownContainerOpen}
    />
  );
}

