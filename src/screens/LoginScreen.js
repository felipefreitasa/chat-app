import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity, Keyboard, ActivityIndicator } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { auth } from '../services/firebase'
import { styles } from '../styles/LoginScreenStyles'

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.replace('Home')
            }
        })

        return unsubscribe
    }, [])

    const SignIn = () => {
        setLoading(false)
        auth
            .signInWithEmailAndPassword(email, password)
            .catch(error => alert(error))

        Keyboard.dismiss()

        setLoading(true)
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar style="light" />

            <View style={styles.containerTexts}>
                <Text style={styles.welcomeTitle}>
                    Welcome back!
                </Text>
                <Text style={styles.welcomeText}>
                    Please sign in to your account
                </Text>
            </View>

            <View style={styles.inputContainer}>
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
                    secureTextEntry
                    type="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style={styles.input}
                    placeholderTextColor='grey'
                />
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={SignIn}
            >
                <Text style={styles.buttonText}>
                    SIGN IN
                </Text>
            </TouchableOpacity>

            {loading ? <ActivityIndicator size="large" color="#C7C6CD" /> : null}

            <TouchableOpacity
                style={{ position: 'absolute', bottom: 40 }}
                onPress={() => navigation.navigate('Register')}
            >
                <Text style={{ color: '#C7C6CD' }}>
                    Don't have an account? <Text style={{ color: '#1D51EF', fontWeight: 'bold' }}>Sign Up</Text>
                </Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}

export default LoginScreen

