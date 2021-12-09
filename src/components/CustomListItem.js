import React, { useState, useEffect } from 'react'
import { ListItem, Avatar } from 'react-native-elements'
import { db } from '../services/firebase'
import { styles } from '../styles/CustomListItemStyles'

const CustomListItem = ({ id, chatName, enterChat }) => {

    const [chatMessages, setChatMessages] = useState([])

    useEffect(() => {
        const unsubscribe = db
            .collection('chats')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => (
                setChatMessages(snapshot.docs.map(doc => doc.data()))
            ))

        return unsubscribe
    }, [])

    return (
        <ListItem
            key={id}
            onPress={() => enterChat(id, chatName)}
            containerStyle={{backgroundColor: '#24222F'}}
        >
            <Avatar
                size={50}
                rounded
                source={{ uri: chatMessages?.[0]?.photoURL || 'https://secure.gravatar.com/avatar/d3afc60628a78f856952f6d76a2f37b8?s=150&r=g&d=https://delivery.farmina.com.br/wp-content/plugins/userswp/assets/images/no_profile.png' }}
            />

            <ListItem.Content>
                <ListItem.Title style={styles.listItemTitle}>
                    {chatName}
                </ListItem.Title>

                <ListItem.Subtitle
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.listItemSubtitle}
                >
                    {chatMessages?.[0]?.displayName} : {chatMessages?.[0]?.message}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem
