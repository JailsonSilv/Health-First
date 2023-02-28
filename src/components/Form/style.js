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
        marginTop: 30,
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
    }
});

export default styles;