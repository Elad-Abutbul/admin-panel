import { View, Text, Button } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { TextInput } from "react-native";
import { Modal } from "react-native";
import UserModal from "../components/UserModal/UserModal";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Text_uk } from "../ui-kit/regular";
import { CheckBox_uk } from "../ui-kit/header/CheckBox_uk";
import { FILTER_SORT } from "../constants/FilterAndSort";
import { HEADER } from "../constants/Header";
import { PREVIUS_SCREEN } from "../constants/Preivus_screens";
import { contextApi } from "../contextApi";
import { headerStyles } from "../styles/headerStyles";
const Header = () => {
  const valContext = useContext(contextApi);
  const [showModal, setShowModal] = useState(false);
  const [showSort, setShowSort] = useState(false);

  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.titleContainer}>
        <Text style={[headerStyles.titleText, headerStyles.text]}>
          {HEADER.ADMIN_PANEL}
        </Text>
      </View>
      <View style={headerStyles.elementContainer}>
        <View>
          <View style={headerStyles.searchContainer}>
            {showSort ? (
              <View style={headerStyles.checkBoxContainer}>
                <View style={headerStyles.itemCheckBox}>
                  <CheckBox_uk
                    witchFilter={valContext.if_A_to_Z_on}
                    handleSort={valContext.setIf_A_to_Z_on}
                    value={!valContext.if_A_to_Z_on}
                  />
                  <Text_uk textValue={FILTER_SORT.A_TO_Z} />
                </View>
                <View style={styles.itemCheckBox}>
                  <CheckBox_uk
                    witchFilter={valContext.witchFilter}
                    handleSort={valContext.handleSort}
                    value={FILTER_SORT.EMAIL}
                  />
                  <Text_uk textValue={FILTER_SORT.EMAIL} />
                </View>
                <View style={headerStyles.itemCheckBox}>
                  <CheckBox_uk
                    witchFilter={valContext.witchFilter}
                    handleSort={valContext.handleSort}
                    value={FILTER_SORT.NAME}
                  />
                  <Text_uk textValue={FILTER_SORT.NAME} />
                </View>
              </View>
            ) : (
              <TextInput
                placeholder={
                  valContext.witchFilter === FILTER_SORT.EMAIL
                    ? HEADER.SEARCH_BY_EMAIL
                    : HEADER.SEARCH_BY_NAME
                }
                placeholderTextColor="white"
                style={headerStyles.inp}
                value={valContext.searchInp}
                onChange={(event) =>
                  valContext.setSearchInp(event.nativeEvent.text)
                }
              />
            )}
            <TouchableOpacity onPress={() => setShowSort(!showSort)}>
              <FontAwesome name="sort" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <Button
            title={HEADER.ADD_USER}
            style={headerStyles.text}
            onPress={() => setShowModal(true)}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Modal
          transparent={true}
          animationType="slide"
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
        >
          <UserModal
            setShowModal={setShowModal}
            previusScreen={PREVIUS_SCREEN.ADD}
          />
        </Modal>
      </View>
    </View>
  );
};

export default Header;
