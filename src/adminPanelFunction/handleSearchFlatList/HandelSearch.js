import { useContext } from "react";
import { contextApi } from "../../contextApi";
import { FILTER_SORT } from "../../constants/FilterAndSort";

export const handleSearch = () => {
  const valContext = useContext(contextApi);
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
