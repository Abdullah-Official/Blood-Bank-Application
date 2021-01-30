import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { PrimaryColor } from '../constants/PrimaryColor'
import { Fontisto } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import {BloodData} from '../Data/BloodData'
import { AntDesign } from '@expo/vector-icons';
import {auth} from '../firebase'
const BloodInfo = ({navigation}) => {
    const logout = () =>{
        auth.signOut();
        navigation.replace("Login")
    }

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerTintColor: 'white',
            headerRight: () =>(
<TouchableOpacity onPress={logout} activeOpacity={0.8} style={{marginRight:10}}><AntDesign name="logout" size={24} color="white" style={{fontWeight:'bold'}}  /></TouchableOpacity>
            )
        })
    },[])
    return (
      <ScrollView>
            <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
            <View style={{alignItems:'center', marginTop:30, flexDirection:'column', flex:1}}>
                <Text style={{color: PrimaryColor, fontWeight:'bold', fontSize:24, marginBottom:6}}>Know your Blood Group</Text>
                <Fontisto name="blood-drop" size={26} color="red" />
            </View>
           
            <View style={{flex:1,alignItems:'center', paddingTop:40, backgroundColor:'#fff'}}>
            <Text style={{color: '#336666', opacity:0.8 ,fontWeight:'700',textAlign:'center', marginBottom:15, textTransform:'uppercase',fontSize:18}}>Watch Now</Text>
           <Text>
           <WebView  source={{ uri: "https://www.youtube.com/embed/B6dAPXpUjCE" }} style={{width: 300, height:250, resizeMode:'cover', alignItems:'center', borderRadius:10}} />;
           </Text>
            </View>
            <View style={{flex:1, backgroundColor:'#ffff'}}>
                <View style={styles.container}>
                    <Text style={styles.headingTxt}>The ABO System</Text>
                    <Text style={styles.mainTxt}>There are 4 main blood groups defined by the ABO system:</Text>
                    <Text style={styles.pointsTxt} >1) Blood Group A – has A antigens on the red blood cells with anti-B antibodies in the plasma</Text>
                    <Text style={styles.pointsTxt} >2) Blood Group B – has B antigens with anti-A antibodies in the plasma</Text>
                    <Text style={styles.pointsTxt} >3) Blood Group O – has no antigens, but both anti-A and anti-B antibodies in the plasma</Text>
                    <Text style={styles.pointsTxt} >4) Blood Group AB – has both A and B antigens, but no antibodies</Text>
                </View>
                <View style={{marginTop:20}}>
                    {
                        BloodData.map((v,i) =>{
                            return (
                                <>
                                
                                <View key={i} style={styles.mainConatiner}>
                        <View style={{justifyContent:'center', alignItems:'center'}}><Text style={{color:'#fff', fontWeight:'bold', fontSize:22, textAlign:'center'}}>{v.blood}</Text></View>
                        <View>
                        <Text style={{fontSize:13, color: 'white', textAlign:'center'}}>{v.give}</Text>
                        <Text style={{fontSize:13, color: 'white', textAlign:'center'}}>{v.recieve}</Text>
                        </View>
                    </View>    
                                </>
                            )
                        })
                    }
                </View>
            </View>
        </SafeAreaView>
      </ScrollView>
    )
}

export default BloodInfo

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,

    },
    headingTxt:{
        color: PrimaryColor,
        fontWeight:'bold',
        marginTop:10,
        fontSize:22,
    },
    mainTxt:{
        fontSize:14,
        marginBottom:10,
        color:'#181818'
    },
    pointsTxt:{
        textAlign:'justify'
    },
    mainConatiner:{
        justifyContent:'space-between',
        flexDirection:'row',
        marginHorizontal:20,
        borderColor:'red',
        padding:10,
        marginBottom:10,
        borderRadius:4,
        backgroundColor:PrimaryColor,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 4,
    }
})
