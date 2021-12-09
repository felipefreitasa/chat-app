import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#24222F'
    },
    containerTexts: {
        alignItems: 'center',
        marginBottom: 80
    },
    inputContainer: {
        width: '90%',
        height: 130,
        marginBottom: 30
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
    input: {
        height: 55,
        flex: 1,
        backgroundColor: '#1D1B25',
        padding: 15,
        color: 'grey',
        borderRadius: 6,
        borderBottomWidth: 0,
        marginBottom: 10
    },
    buttonText: {
        color: '#C7C6CD',
        fontSize: 15
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
    }
})