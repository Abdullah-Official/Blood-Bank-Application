import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { PrimaryColor } from '../constants/PrimaryColor'
import {auth} from '../firebase'



const BloodPosts = (props) => {
    console.log(auth.currentUser.photoURL)
    return (
        <View style={{alignItems:'center'
        ,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        
        elevation: 9,
        

        }}>
           <View style={styles.container}>
           <View style={styles.mainBox}>
            <View style={{alignItems:'center', justifyContent:'center'}}>
                 <TouchableOpacity activeOpacity={0.7} style={styles.bloodBox}>
                     <Text style={styles.bloodTxt}>{props.group}</Text>
                 </TouchableOpacity >
             </View>
             {/* <View style={{justifyContent:'center', alignItems:'center'}}><Fontisto name="blood-drop" size={32} color="red" /></View> */}
             <View style={{marginTop:5,}}>
                 <Text style={styles.infoTxt}>Name: {props.name}</Text>
                 <Text style={styles.infoTxt}>Email: {props.email}</Text>
                 <Text style={styles.infoTxt}>Contact: {props.number}</Text>
                 <Text style={styles.infoTxt}>City: {props.city}</Text>
             </View>
            </View>
            </View>

           </View>
    )
}

export default BloodPosts

const styles = StyleSheet.create({
    mainBox:{
        borderRadius: 10,
        flexDirection:'column',
        justifyContent:'space-around',
        paddingHorizontal:10,
        paddingVertical:10,
        marginVertical:4,
    },
    container:{
       
        width:'90%',
        backgroundColor: '#fff',
        marginBottom:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,

    },
    bloodBox:{
        backgroundColor:PrimaryColor,
        width:100,
        height:100,
        borderRadius: 100,
        justifyContent:'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 10,  
        alignSelf:'center'
        
    },
    bloodTxt:{
        color:'#fff',
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold',
        justifyContent:'center'
    },
    infoTxt:{
        opacity: 1,
        fontWeight:'600',
        color:'#37474F',
        fontSize:14.3
    }
})
