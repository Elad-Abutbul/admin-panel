import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
     container: {
       padding: 5,
       justifyContent: "center",
       flex: 1.5,
       backgroundColor: "#1b2223",
       shadowColor: "#000",
       shadowOffset: { width: 0, height: 3 },
       shadowOpacity: 0.3,
       shadowRadius: 5,
     },
     titleContainer: {
       alignItems: "center",
     },
     titleText: {
       fontSize: 20,
       color: "white",
       marginTop: 10,
     },
     text: {
       color: "white",
     },
     elementContainer: {
       flex: 1,
       justifyContent: "space-around",
       alignItems: "center",
       flexDirection: "row",
     },
     inp: {
       backgroundColor: "#3a4f50",
       padding: 10,
       borderRadius: 50,
       color: "white",
     },
     checkBoxContainer: {
       flexDirection: "row",
       gap: 10,
     },
     searchContainer: {
       flexDirection: "row",
       alignItems: "center",
       gap: 15,
     },
   
     itemCheckBox: {
       alignItems: "center",
     },
   });