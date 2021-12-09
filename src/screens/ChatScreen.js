import React, { useLayoutEffect, useState } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, ScrollView, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Avatar } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { db, auth } from '../services/firebase'
import * as firebase from 'firebase'
import { styles } from '../styles/ChatScreenStyles'

const ChatScreen = ({ navigation, route }) => {

    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleAlign: 'center',
            headerTitle: () => (
                <Text style={styles.headerTitle}>
                    {route.params.chatName}
                </Text>
            ),
            headerLeft: () => (
                <TouchableOpacity
                    style={{ marginLeft: 15 }}
                    onPress={navigation.goBack}
                >
                    <Ionicons
                        name="chevron-back"
                        size={30}
                        color="#1D51EF"
                    />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity>
                    <Ionicons
                        name="ellipsis-vertical"
                        size={20}
                        color="#1D51EF"
                        style={{ marginRight: 15 }}
                    />
                </TouchableOpacity>
            )
        })
    }, [navigation, messages])

    const sendMessage = () => {
        Keyboard.dismiss()

        db.collection('chats').doc(route.params.id).collection('messages').add({
            timestamp: new Date(),
            message: input,
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL
        })

        setInput('')
    }

    useLayoutEffect(() => {
        const unsubscribe = db
            .collection('chats')
            .doc(route.params.id)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot(snapshot => setMessages(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            ))

        return unsubscribe
    }, [route])

    return (
        <>
            <StatusBar style="light" />

            <KeyboardAvoidingView
                style={styles.container}
                keyboardVerticalOffset={90}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <>
                        <ScrollView contentContainerStyle={{ paddingTop: 15, }}>
                            {messages.map(({ id, data }) => (
                                data.email === auth.currentUser.email ?
                                    (
                                        <View key={id} style={styles.reciever}>
                                            <Text style={styles.recieverText}>
                                                {data.message}
                                            </Text>
                                        </View>
                                    )
                                    :
                                    (
                                        <View style={styles.containerSender}>
                                            <Avatar
                                                rounded
                                                size={30}
                                                source={{ uri: data.photoURL }}
                                            />

                                            <View
                                                key={id}
                                                style={styles.sender}
                                            >
                                                <Text style={styles.senderText}>
                                                    {data.message}
                                                </Text>
                                            </View>
                                        </View>
                                    )
                            ))}
                        </ScrollView>

                        <View style={styles.footer}>
                            <TextInput
                                placeholder='Message'
                                style={styles.textInput}
                                value={input}
                                onChangeText={(text) => setInput(text)}
                                placeholderTextColor="gray"
                            />

                            <TouchableOpacity
                                style={styles.buttonSendMessage}
                                activeOpacity={0.5}
                                onPress={sendMessage}
                            >
                                <Ionicons
                                    name='send'
                                    size={20}
                                    color='#1D51EF'
                                />
                            </TouchableOpacity>
                        </View>
                    </>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </>
    )
}

export default ChatScreen
