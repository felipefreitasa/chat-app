import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#24222F'
    },
    button: {
        height: 50,
        width: '90%',
        backgroundColor: '#1D51EF',
        color: 'grey',
        borderRadius: 6,
        borderBottomWidth: 0,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#C7C6CD',
        fontSize: 15
    },
    inputContainer: {
        width: '90%',
        marginBottom: 20

    },
    containerTexts: {
        alignItems: 'center',
        marginBottom: 40
    },
    welcomeTitle: {
        color: '#C7C6CD',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 8
    },
    welcomeText: {
        color: 'grey',
        fontSize: 15,
    },
    input: {
        height: 55,
        backgroundColor: '#1D1B25',
        padding: 15,
        color: 'grey',
        borderRadius: 6,
        borderBottomWidth: 0,
        marginBottom: 10
    },
})
