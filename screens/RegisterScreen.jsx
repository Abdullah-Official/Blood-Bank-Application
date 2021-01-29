import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import {Button, Input} from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from 'react-native'
import { PrimaryColor } from '../constants/PrimaryColor'
import { Entypo } from '@expo/vector-icons';
import { auth, storage } from '../firebase'
const RegisterScreen = ({navigation}) => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [bloodGroup,setBloodGroup] = useState("")
    const [image, setImage] = useState(null);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle:"Back To Login"
        })
    }, [navigation])
    const register = () =>{
      
        auth.createUserWithEmailAndPassword(email,password)
        .then(authUser =>{
            authUser.user.updateProfile({
                displayName: name,
                bloodGroup: bloodGroup,
                photoURL: image || 'https://image.shutterstock.com/image-vector/profile-photo-vector-placeholder-pic-600w-535853263.jpg',
            })
        }).catch(error => console.log(error.message))
        setName("");
        setEmail("");
        setPassword("");
        setBloodGroup("");
    }

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
    return (
        <ScrollView style={{flex:1}}>
                <View style={styles.container}   >
                    
            <StatusBar style="light" />
            <Text h3 style={{marginVertical:30, fontSize:20, textTransform:'uppercase' ,color:PrimaryColor, fontWeight:'bold'}}>Create a Donor Account</Text>
            <View style={styles.inputContainer}>
                <Input placeholder="Full Name"
                type="text"
                autoFocus value={name}
                style={{fontSize:16}}
                onChangeText={(e) => setName(e)} 
                />
                <Input placeholder="Email"
                type="Email"
                autoFocus value={email}
                style={{fontSize:16}}
                onChangeText={(e) => setEmail(e)} 
                />
                <Input placeholder="Password"
                type="password"
                secureTextEntry
                autoFocus value={password}
                style={{fontSize:16}}
                onChangeText={(e) => setPassword(e)} 
                />
                <Input placeholder="Blood Group"
                type="text"
                autoFocus value={bloodGroup}
                style={{fontSize:16}}
                onChangeText={(e) => setBloodGroup(e)} 
                
                />
                 <View style={{  alignItems: 'center', justifyContent:'center' }}>
                     <Text style={{fontSize:22, color:PrimaryColor,}}>Choose Image</Text>
      <TouchableOpacity ><Entypo name="image" style={styles.imgPicker} onPress={pickImage} size={60} color="black" /></TouchableOpacity>
      
      {image && <Image source={{ uri: image }} style={{ width: 150, height: 150, marginTop:7,  resizeMode:'contain' }} />}
      <Button raised containerStyle={styles.button} buttonStyle={styles.btn} title="Register" onPress={register} /> 
    </View>
       
            </View>
        </View>
        </ScrollView>

         
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex:2,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        // backgroundColor:'white'
    },
    inputContainer:{
        width:300
    },
    imgPicker:{
        // backgroundColor: PrimaryColor,

    },
    imgPickerText:{
        color:'#fff',
        paddingHorizontal:15,
        paddingVertical:10
    },
    button:{
        width: 300,
        marginBottom:10,

    },
    btn:{
        backgroundColor: PrimaryColor,
        color:'white',
        paddingHorizontal:26,
        borderRadius:100
    }
})
