import React, { useState, useLayoutEffect } from 'react'
import { Text, View, TouchableOpacity, TextInput, Keyboard } from 'react-native'
import { db } from '../services/firebase'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'
import { styles } from '../styles/AddChatScreenStyles'

const AddChatScreen = ({ navigation }) => {

    const [input, setInput] = useState('')

    const createChat = async () => {
        await db.collection('chats').add({
            chatName: input.toUpperCase()
        }).then(() => {
            navigation.goBack()
        }).catch(error => alert(error))

        Keyboard.dismiss()
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Create new chat',
            headerStyle: { backgroundColor: '#1e1d26', elevation: 0 },
            headerTintStyle: { color: '#fff' },
            headerTintColor: '#fff',
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons
                            name="chevron-back"
                            size={30}
                            color="#1D51EF"
                        />
                    </TouchableOpacity>
                </View>
            ),
        })
    }, [navigation])

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            <TextInput
                placeholder="Enter a chat name"
                value={input}
                onChangeText={(text) => setInput(text)}
                style={styles.input}
                placeholderTextColor='grey'
            />

            <TouchableOpacity
                disabled={!input}
                style={styles.button}
                onPress={createChat}
            >
                <Text style={styles.buttonText}>CREATE</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddChatScreen
