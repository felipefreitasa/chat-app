import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerTitle:{
       color: '#C7C6CD', 
       fontWeight: '700' 
    },
    container: {
        flex: 1,
        backgroundColor: '#24222F'
    },
    reciever: {
        padding: 10,
        backgroundColor: '#1D51EF',
        alignSelf: 'flex-end',
        borderRadius: 6,
        marginRight: 15,
        marginBottom: 5,
        maxWidth: '80%',
        position: 'relative'
    },
    recieverText: {
        color: '#C7C6CD',
        fontWeight: '500',
    },
    containerSender: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        marginLeft: 15
    },
    sender: {
        padding: 10,

        backgroundColor: '#312E3E',
        alignSelf: 'flex-start',
        borderRadius: 6,
        marginLeft: 5,
        maxWidth: '80%',
        position: 'relative'
    },
    senderText: {
        color: '#C7C6CD',
        fontWeight: '500',
    },
    senderName: {
        fontSize: 10,
        color: 'white'
    },
    buttonSendMessage: {
        backgroundColor: '#1D1B25',
        width: 40,
        height: 40,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 15
    },
    textInput: {
        bottom: 0,
        height: 45,
        flex: 1,
        marginRight: 8,
        borderColor: 'transparent',
        backgroundColor: '#1D1B25',
        borderWidth: 1,
        padding: 10,
        color: 'grey',
        borderRadius: 6
    },
})