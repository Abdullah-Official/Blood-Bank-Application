import { auth } from '../firebase'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons';
import {PrimaryColor} from '../constants/PrimaryColor'
import { ImageBackground } from 'react-native'
import BloodPosts from '../components/BloodPosts'
import {db} from '../firebase'
import {Spinner} from 'native-base'
const HomeScreen = ({navigation}) => {

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



    const [data,setData] = useState([])
    useEffect(() =>{
       const unsubscribe = db.collection('donations').onSnapshot(snapshot => {
            setData(snapshot.docs.map(doc =>({
                id: doc.id,
                data: doc.data()  
            })))
       } )

       return unsubscribe;


    },[])

   

    return (
        
            <SafeAreaView style={{flex:1}}>
           <View style={{flex:1,}}>
           <ImageBackground style={{width:'100%', height:250, }} imageStyle={{borderBottomRightRadius: 65}} source={{uri:"https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymxvb2QlMjBkb25hdGlvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}}>
            <View style={styles.DarkOverlay}></View>
            <View style={{flex:1, justifyContent:'center'}}>
                <View style={{marginLeft:10}}>
                <Text style={{fontSize:35, color:'#fff', fontWeight:'bold',letterSpacing:4,}}>Hi {auth.currentUser.displayName}!</Text>
                <Text style={{color:'#fff', fontSize:14, fontWeight:'600', textTransform:'capitalize'}}>Welcome to Donor, Are you here to donate blood ?</Text>
                </View>
                <View style={{ flexDirection:'row',alignItems:'center', marginTop:10, marginLeft:10}}>
                <View>
                <TouchableOpacity onPress={() => navigation.navigate("Donate")} activeOpacity={0.8} style={styles.donateBtn}><Text style={styles.donateTxt}>Donate</Text></TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={() => navigation.navigate("Blood Details")} activeOpacity={0.8} style={styles.infoBtn}><Text style={styles.infoTxt}>Blood info</Text></TouchableOpacity>
                </View>
            </View>
            </View>
            
            </ImageBackground>
           
           </View>
           
           <View style={{flex:1.7,}}>
           
           <ScrollView>
               <Text style={{color:'#181818', textAlign:'center' ,marginTop:10, fontSize:26, fontWeight:'bold'}}>Blood Donations</Text>
                <View style={{alignItems:'center', marginVertical:3}} >
                    <Text style={{width:90, backgroundColor:PrimaryColor, height:4,borderRadius:100, }}></Text>
                </View>
                
                <View style={{marginTop:10}}>
                  {
                      data.length !== 0 ? (
                        
                            data.map(({data},i) =>{
                                return (
                                    <BloodPosts
                                    key={i}
                                    email={data.email}
                                    name={data.name}
                                    number={data.number}
                                    city={data.city}
                                    group={data.group}
                                    />
                                )
                            })
                        
                      ) :(
                          <View style={{alignItems:'center', justifyContent:'space-between'}}> 
                              <Spinner color='red' style={{marginTop:'30%', fontSize:40}} />
                          </View>
                      )
                  }

                </View>
                </ScrollView>
           </View>
          
        </SafeAreaView>
        
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    DarkOverlay:{
        position:'absolute',
        top:0,
        right:0,
        left:0,
        height:250,
        backgroundColor: '#000',
        opacity: 0.2,
        borderBottomRightRadius: 65
    },
    donateBtn:{
        backgroundColor: PrimaryColor,
        borderColor: PrimaryColor,
        borderWidth: 2,
        width:120,
        borderRadius:100
    },
    donateTxt:{
        color:'white',
        textAlign:'center',
        paddingHorizontal:15,
        paddingVertical:6,
        textTransform:'uppercase',
        fontSize:11
    },
    infoBtn:{
        backgroundColor: PrimaryColor,
        borderColor: PrimaryColor,
        borderWidth: 2,
        width:120,
        borderRadius:100,
        marginHorizontal:10
    },
    infoTxt:{
        color:'white',
        textAlign:'center',
        paddingHorizontal:15,
        paddingVertical:6,
        textTransform:'uppercase',
        fontSize:11
    }
})
