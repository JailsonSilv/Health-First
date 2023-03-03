import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerForm: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems:"center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 15,
    },
    form: {
        width: "100%",
    },
    formLabel: {
        color: "#000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width: "90%",
        borderRadius:50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },

    buttonCalculator: {
        backgroundColor: "#FF0043",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 50,
    },
    textButtonCalculator: {
        fontSize: 20,
        color: "#ffff",
    },

    errorMessage: {
        fontSize: 12,
        color: "#FF0027",
        fontWeight: "bold",
        paddingLeft: 20,
    },
    exhibitionResultImc: {
        width: "100%",
        height: "50%",
    },
    listImcs: {
        marginTop: 25,
    },
    resultImcItem: {
        fontSize: 28,
        color: "#ff0000",
        height: 50,
        width: "100%",
        paddingRight: 20,
        fontWeight: "bold",
    },
    textResultItemList: {
        fontSize: 18,
        
    }
});

export default styles;