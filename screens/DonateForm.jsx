import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import {PrimaryColor} from '../constants/PrimaryColor'
import {Button, Input} from 'react-native-elements'
import { Fontisto } from '@expo/vector-icons';
import {db, auth} from '../firebase'

const DonateForm = ({navigation}) => {

    const [name,setName] = useState("")
    const [number,setNumber] = useState("")
    const [email,setEmail] = useState("")
    const [group,setGroup] = useState("")
    const [city,setCity] = useState("")


    const onSubmit = () =>{
        db.collection("donations").add({
            name: name,
            number: number,
            email: email,
            group: group,
            city:city,
        })

        navigation.replace("Home")
    }

    useEffect(() =>{

    },[])



    return (
       <ScrollView>
            <SafeAreaView style={{flex:1, alignItems:'center', justifyContent:'center',}}>
                <View style={{flex:1,  alignItems:'center', justifyContent:'center', marginTop:20}}>
                    <View style={{alignItems:'center', justifyContent:'center', }}>
                    <Text style={styles.headingTxt}>Donate your Blood Now</Text>
                    <Text style={styles.subHeadingTxt}>A drop of blood can make all the difference and let us not waste any drops.</Text>
                    </View>
                    <Fontisto name="blood-drop" size={64} color="red" style={{marginTop:10, opacity:0.9}} />
                </View>
                <View style={{flex:1}}>
                    <View style={styles.inputContainer}>
                    <Input style={styles.inputElements} placeholder="Full Name" autoFocus type="text" value={name} onChangeText={(e) => setName(e)} />
                    <Input style={styles.inputElements} placeholder="Contact Number" s autoFocus type="text" value={number} onChangeText={(e) => setNumber(e)} />
                    <Input style={styles.inputElements} placeholder="Email" s autoFocus type="text" value={email} onChangeText={(e) => setEmail(e)} />
                    <Input style={styles.inputElements} placeholder="Blood Group" s autoFocus type="text" value={group} onChangeText={(e) => setGroup(e)} />
                    <Input style={styles.inputElements} placeholder="City" s autoFocus type="text" value={city} onChangeText={(e) => setCity(e)} />
                   
                    </View>
                    <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress={onSubmit} style={styles.submitBtn} activeOpacity={0.7}>
                        <Text style={styles.submitTxt}>Submit</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
       </ScrollView>
    )
}

export default DonateForm

const styles = StyleSheet.create({
    headingTxt:{
        color: PrimaryColor,
        fontWeight:'bold',
        fontSize:23
    },
    subHeadingTxt:{
        textAlign:'center',
        marginHorizontal:12,
        color: '#181818',
        opacity:0.6,
        fontSize:14,
        marginTop:3
    },
    inputContainer:{
        width:300,
        marginTop:30
    },
    inputElements:{
        fontSize:16
    },
    submitBtn:{
        backgroundColor: PrimaryColor,
        opacity: 0.8,
        width:150,
        borderRadius:100,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 8,
},
shadowOpacity: 0.44,
shadowRadius: 10.32,

elevation: 16,
    },
    submitTxt:{
        color:"#fff",
        paddingHorizontal:12,
        paddingVertical:11,
        textAlign:'center',
        textTransform:'uppercase',
        fontWeight:'bold',
        fontSize:13
    }

})
