import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    contentResu: {
        flex: 1,
        marginTop: 10,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
    },
    textResult: {
        fontSize: 25,
        color: "#ff0043",
        fontWeight: "bold",
    },
    numberResult: {
        fontSize: 55,
        color: "#ff0043",
        fontWeight: "bold",
    },
    boxShareButton: {
        width: "100%",
        alignItems: "center",
        marginBottom: 10, 
    },
    shared: {
        backgroundColor: "#1877f2",
        borderRadius: 50,
        paddingTop: 5,
        paddingBottom: 5,
        marginTop:12,
    },
    sharedText: {
        color:"#ffff",
        fontWeight: "bold",
        paddingHorizontal: 30,        
    }
});


export default styles;