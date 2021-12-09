import React, { useLayoutEffect, useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native'
import CustomListItem from '../components/CustomListItem'
import { auth, db } from '../services/firebase'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'
import { styles } from '../styles/HomeScreenStyles'

const HomeScreen = ({ navigation }) => {

    const [chats, setChats] = useState([])

    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace('Login')
        })
    }

    useEffect(() => {
        const unsubscribe = db.collection('chats').onSnapshot(snapshot => (
            setChats(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))

        return unsubscribe
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Messages',
            headerStyle: { backgroundColor: '#1e1d26', elevation: 0 },
            headerTintStyle: { color: '#fff' },
            headerTintColor: '#fff',
            headerLeft: () => (<View />),
            headerRight: () => (
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity activeOpacity={0.5} onPress={signOutUser}>
                        <Ionicons
                            name='exit-outline'
                            size={25}
                            color='#1D51EF'
                            style={{ marginRight: 15 }}
                        />
                    </TouchableOpacity>
                </View>
            ),
        })
    }, [navigation])

    const enterChat = (id, chatName) => {
        navigation.navigate('Chat', {
            id: id,
            chatName: chatName
        })
    }

    return (
        <SafeAreaView>
            <StatusBar style="light" />

            <ScrollView style={styles.container}>
                {chats.map(({ id, data: { chatName } }) => (
                    <CustomListItem
                        id={id}
                        chatName={chatName}
                        key={id}
                        enterChat={enterChat}
                    />
                ))}
            </ScrollView>

            <TouchableOpacity
                style={styles.buttonAddChat}
                onPress={() => navigation.navigate('AddChat')}
            >
                <Ionicons
                    name='add'
                    size={30}
                    color='#fff'
                    style={{ marginLeft: 3 }}
                />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default HomeScreen
