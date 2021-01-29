import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {Button, Input, Image} from 'react-native-elements'
import {StatusBar} from 'expo-status-bar'
import { KeyboardAvoidingView } from 'react-native'
import { PrimaryColor } from '../constants/PrimaryColor'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../firebase'

const Login = ({navigation}) => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged((authUser) =>{
            if(authUser){
                navigation.replace("Home")
            }
        })
        return unsubscribe;
    },[])

    const signIn = () =>{
        auth.signInWithEmailAndPassword(email,password)
        .then((authUser)=>{ return {authUser}})
        .catch(err => alert(err))
    }
    return (
                <KeyboardAvoidingView   style={styles.container}>
          
          <StatusBar style="light" />
         <View style={{backgroundColor:'red', width:280, height:160, borderRadius:10, alignItems:'center',marginVertical:20 }}><Image source={require('../assets/logo.png')} style={{width:280, height: 280, }} /></View>
          <View style={styles.inputContainer}>
              <Input placeholder="Email" autoFocus type="Email" value={email} onChangeText={(e) => setEmail(e)} />
              <Input placeholder="Password" secureTextEntry autoFocus type="Password" value={password} onChangeText={(e) => setPassword(e)} />
          </View>
          <Button containerStyle={styles.button} buttonStyle={styles.btn} title="Login" onPress={signIn} />
         <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("Register")} style={{borderColor:PrimaryColor,borderWidth:1 ,width:200, height:40, justifyContent:'center'}}>
             <Text style={{color: PrimaryColor, textAlign:'center',}}>Register</Text>
         </TouchableOpacity>
         <View style={{height:100}} />
      </KeyboardAvoidingView>
            
    )
}

export default Login

const styles = StyleSheet.create({
    inputContainer:{
        width:300
    },
    container : {
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      padding:10,
      backgroundColor:'#fff'  
    },
    button:{
        width:200,
        marginBottom:10,
    },
    btn:{
        backgroundColor: PrimaryColor,
        color:'white'
    }
})