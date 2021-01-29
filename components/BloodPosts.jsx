import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { PrimaryColor } from '../constants/PrimaryColor'
import {auth} from '../firebase'
import { Fontisto } from '@expo/vector-icons';



const BloodPosts = (props) => {
    console.log(auth.currentUser.photoURL)
    return (
        // <View style={{alignItems:'center'}}>
        //         <TouchableOpacity activeOpacity={0.7} style={styles.bloodBox}>
        //             <Text style={styles.bloodTxt}>A+</Text>
        //         </TouchableOpacity >
        //     </View>

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
            <View style={styles.mainBox}>
            <View style={{alignItems:'center'}}>
                 <TouchableOpacity activeOpacity={0.7} style={styles.bloodBox}>
                     <Text style={styles.bloodTxt}>{props.group}</Text>
                 </TouchableOpacity >
             </View>
             <View style={{justifyContent:'center'}}><Fontisto name="blood-drop" size={32} color="red" /></View>
             <View>
                 <Text style={styles.infoTxt}>{props.name}</Text>
                 <Text style={styles.infoTxt}>{props.number}</Text>
                 <Text style={styles.infoTxt}>{props.city}</Text>
             </View>
            </View>
        </View>

    )
}

export default BloodPosts

const styles = StyleSheet.create({
    mainBox:{
        borderTopRightRadius:25,
        borderWidth:1,
        borderColor:'#181818',
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        paddingVertical:10,
        marginVertical:4,
        
    }
    ,
    bloodBox:{
        backgroundColor:PrimaryColor,
        width:70,
        height:70,
        borderRadius: 10,
        justifyContent:'center',
        
        
    },
    bloodTxt:{
        color:'#fff',
        fontSize:23,
        textAlign:'center',
        fontWeight:'bold'
    },
    infoTxt:{
        opacity: 0.7
    }
})
