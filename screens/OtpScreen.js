import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { View, Image, ImageBackground, Text, TextInput} from "react-native";
import {Button} from "react-native-elements"

const OtpScreen = (props) => {
  return (
    <View style={{ alignContent: "center", backgroundColor:"white", flex:1 }}>
      <View style={{marginTop:hp("15%") , alignSelf:"center",}}>
      <Image source={require("../assets/images/otpone.png")}
      style={{height:150, width:150 , marginHorizontal:hp("10%") }}   />
      <Text
        style={{
          fontSize: hp("3%"),
          alignSelf: "center",
          fontWeight: "bold",
          margin: hp("3%"),
        }}
      >
        OTP Verification{" "}
      </Text>
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Text style={{ color: "gray" }}>We will send you an </Text>
        <Text style={{ fontWeight: "bold" }}>One Time Password</Text>
      </View>
      <Text style={{ color: "gray", alignSelf: "center" }}>
        on this mobile number{" "}
      </Text>

      <View
        style={{ alignSelf: "center", marginVertical: hp("6%"), }}
      >
        <Text style={{ color: "gray", fontSize: hp("3%") }}>
         
          Enter Mobile Number
        </Text>
        <TextInput placeholder="123456789"
        placeholderTextColor="black"
        keyboardType="phone-pad"
        style={{borderBottomWidth:1}} />
      </View>
      <Button
       onPress={()=>props.navigation.navigate("otp")}
          buttonStyle={{
           
            backgroundColor: "#6365bf",
            borderRadius: 16,
            alignSelf:"center",
  
            width:wp("80%") ,
            height:hp("10%"),
          }}
          title="GET OTP"
        
        />
      </View>
      
     
    </View>
  );
};

export default OtpScreen;
