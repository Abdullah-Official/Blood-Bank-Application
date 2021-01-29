import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { TouchableOpacity } from "react-native-gesture-handler";
import { WelcomeScreenData } from "../Data/WelcomeScreenData";
import {PrimaryColor} from '../constants/PrimaryColor'
import {StatusBar} from 'expo-status-bar'
import {auth} from '../firebase'

const WelcomeScreen = (props) => {
 

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <View>
        <View style={{justifyContent:'center', alignItems:"center", }}>
        <Image style={{width:"80%", height:350, resizeMode:'contain' , marginTop:-10,  }} source={item.svg} />
        </View>
        {/* <Image style={styles.mid_image}  source={item.image} /> */}
          <View style={{paddingVertical:10}}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
          </View>
        </View>
      </View>
    );
  };

  const keyExtractor = (item) => item.title;

  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <TouchableOpacity activeOpacity={0.9} style={styles.nxtBtn}>
          <Text style={styles.rightText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    );
  };
 const _renderDoneButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <TouchableOpacity activeOpacity={0.9} onPress={() => props.navigation.navigate(auth.currentUser ? ("Home") : ("Login"))} style={styles.nxtBtn}>
          <Text style={styles.rightText}>DONE</Text>
        </TouchableOpacity>
      </View>
    );
  };


 
  return (
    <>
    <StatusBar style="light" />
      <View style={{ flex: 1,}}>
      <View style={{ flex: 1 }}>
        <AppIntroSlider
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          data={WelcomeScreenData}
          dotStyle={styles.dotStyle}
          renderNextButton={renderNextButton}
          renderDoneButton={_renderDoneButton}
          activeDotStyle={styles.activeDotStyle}
          bottomButton
          showDoneButton={true}
        />
      </View>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    // justifyContent: 'center',
    backgroundColor: "#fff",
    paddingTop: 50,

  },
  nxtBtn: {
    backgroundColor: PrimaryColor,
    padding: 12,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    // marginVertical: 40,
  },
  image: {
    // marginVertical: 30,
    height: 300,
    width: 300,
    resizeMode: "contain",
  },
  title: {
    fontSize: 23,
    color: PrimaryColor,
    textAlign: "center",
    fontWeight: "bold",
    marginHorizontal: 40,
  },
  text: {
    fontSize: 15,
    color: "gray",
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 10,
   
  },
  dotStyle: {
    backgroundColor: "#cccc",
  },
  activeDotStyle: {
    backgroundColor: "red",
    width:25,
    
  },
  rightTextWrapper: {
    // marginRight:30,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  rightText: {
    color: "#fff",
    fontSize: 13,
    textTransform:'uppercase'
  },
  leftTextWrapper: {
    width: 40,
    height: 40,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  leftText: {
    color: "blue",
    fontSize: 14,
  },
  doneButtonWrapper: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 50,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: -40,
    fontFamily: "",
  },
  doneButtonText: {
    fontSize: 14,
    textAlign: "center",
    color: "white",
  },
  mid_image:{
    marginTop:40,
    height:300,
    width:'80%',
    resizeMode:'contain'
  }
});

export default WelcomeScreen;
