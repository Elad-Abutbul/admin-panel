import { useContext } from "react";
import { contextApi } from "../../contextApi";
import { FILTER_SORT } from "../../constants/FilterAndSort";
import { useSelector } from "react-redux";
import {
  searchName,
  searchEmail,
  sort_a_to_z,
} from "../../adminPanelFunction/filterAndSortUsers";
export const handleSearch = () => {
  const valContext = useContext(contextApi);
  const users = useSelector((state) => state.users.value);
  if (valContext.searchInp !== "") {
    if (valContext.witchSort === FILTER_SORT.NAME) {
      return searchName(valContext.searchInp, users);
    } else {
      return searchEmail(valContext.searchInp, users);
    }
  } else if (valContext.if_A_to_Z_on) {
    return sort_a_to_z(users);
  } else {
    return users;
  }
};
