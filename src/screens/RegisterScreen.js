import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, View, TouchableOpacity, Text, TextInput, Keyboard, ActivityIndicator } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { auth } from '../services/firebase'
import { styles } from '../styles/RegisterScreenStyles'

const RegisterScreen = ({ navigation }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [loading, setLoading] = useState(false)

    const register = () => {
        setLoading(false)

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                authUser.user.updateProfile({
                    displayName: name,
                    photoURL: imageURL || 'https://secure.gravatar.com/avatar/d3afc60628a78f856952f6d76a2f37b8?s=150&r=g&d=https://delivery.farmina.com.br/wp-content/plugins/userswp/assets/images/no_profile.png',
                })
            })
            .catch(error => alert(error.message))

        Keyboard.dismiss()
        setLoading(true)
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar style="light" />

            <View style={styles.containerTexts}>
                <Text style={styles.welcomeTitle}>
                    Create new account
                </Text>
                <Text style={styles.welcomeText}>
                    Please fill in the forms to continue
                </Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Full name"
                    type="text"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    style={styles.input}
                    placeholderTextColor='grey'
                />

                <TextInput
                    placeholder="E-mail"
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.input}
                    placeholderTextColor='grey'
                />

                <TextInput
                    placeholder="Password"
                    type="password"
                    value={password}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                    style={styles.input}
                    placeholderTextColor='grey'
                />

                <TextInput
                    placeholder="Profile Picture URL (optional)"
                    type="text"
                    value={imageURL}
                    onChangeText={(text) => setImageURL(text)}
                    onSubmitEditing={register}
                    style={styles.input}
                    placeholderTextColor='grey'
                />
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={register}
            >
                <Text style={styles.buttonText}>
                    SIGN UP
                </Text>
            </TouchableOpacity>

            {loading ? <ActivityIndicator size="large" color="#C7C6CD" /> : null}

            <TouchableOpacity
                style={{ position: 'absolute', bottom: 40 }}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={{ color: '#C7C6CD' }}>
                    Have an account? <Text style={{ color: '#1D51EF', fontWeight: 'bold' }}>Sign In</Text>
                </Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen
