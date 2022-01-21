import { StyleSheet, Dimensions } from 'react-native'

const WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    titleContainer: {
        marginBottom: 20,
    },
    title: {
        fontSize: WIDTH * 0.1,
        textAlign: 'center',
    },
    inputContainer:{
        width: "80%",
        marginBottom: WIDTH * 0.1,
    },
    inputPassContainer:{
        width: "80%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: WIDTH * 0.1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        borderColor: "#2D4860",
        borderWidth: 2,  
    },
    input: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        borderColor: "#2D4860",
        borderWidth: 2,  
    },
    btnContainer:{
        width: "80%",
        marginBottom: WIDTH * 0.1,
    },
    btnSignIn: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 5,
        backgroundColor: '#2D4860',
    },
    btnText:{
        color: '#fff',
    },
})

export default styles;