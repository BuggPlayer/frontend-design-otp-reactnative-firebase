import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { View, Image, ImageBackground, Text, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

const Getotp = (props) => {
  return (
    <View style={{ alignContent: "center", backgroundColor: "white", flex: 1 }}>
      <View style={{ marginTop: hp("15%"), alignSelf: "center" }}>
        <Image
          source={require("../assets/images/otptwo.png")}
          style={{ height: 150, width: 150, marginHorizontal: hp("10%") }}
        />
        <Text
          style={{
            fontSize: hp("3%"),
            alignSelf: "center",
            fontWeight: "bold",
            margin: hp("3%"),
          }}
        >
          OTP Verification
        </Text>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Text style={{ color: "gray" }}>Entert the OTP sent </Text>
          <Text style={{ fontWeight: "bold" }}> +916666666</Text>
        </View>

        <View
          style={{
            alignSelf: "center",
            marginVertical: hp("6%"),
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TextInput
            placeholder="1"
            placeholderTextColor="black"
            keyboardType="phone-pad"
            style={{
              borderBottomWidth: 1,
              height: hp("8%"),
              width: wp("10%"),
              padding: hp("1%"),
              margin: hp("1%"),
            }}
          />

          <TextInput
            placeholder="2"
            placeholderTextColor="black"
            keyboardType="phone-pad"
            style={{
              borderBottomWidth: 1,
              height: hp("8%"),
              width: wp("10%"),
              padding: hp("1%"),
              margin: hp("1%"),
            }}
          />
          <TextInput
            placeholder="3"
            placeholderTextColor="black"
            keyboardType="phone-pad"
            style={{
              borderBottomWidth: 1,
              height: hp("8%"),
              width: wp("10%"),
              padding: hp("1%"),
              margin: hp("1%"),
            }}
          />
          <TextInput
            placeholder="4"
            placeholderTextColor="black"
            keyboardType="phone-pad"
            style={{
              borderBottomWidth: 1,
              height: hp("8%"),
              width: wp("10%"),
              padding: hp("1%"),
              margin: hp("1%"),
            }}
          />
          <TextInput
            placeholder="5"
            placeholderTextColor="black"
            keyboardType="phone-pad"
            style={{
              borderBottomWidth: 1,
              height: hp("8%"),
              width: wp("10%"),
              padding: hp("1%"),
              margin: hp("1%"),
            }}
          />
          <TextInput
            placeholder="6"
            placeholderTextColor="black"
            keyboardType="phone-pad"
            style={{
              borderBottomWidth: 1,
              height: hp("8%"),
              width: wp("10%"),
              padding: hp("1%"),
              margin: hp("1%"),
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          marginBottom: hp("2%"),
        }}
      >
        <Text>Dont receive OTP ? </Text>
        <TouchableOpacity>
          <Text style={{ color: "orange" }}>RESEND OTP</Text>
        </TouchableOpacity>
      </View>
      <Button
        //  onPress={()=>props.navigation.navigate("UploadDoc")}
        buttonStyle={{
          backgroundColor: "#6365bf",
          borderRadius: 16,
          alignSelf: "center",

          width: wp("80%"),
          height: hp("10%"),
        }}
        title="VERIFY AND PROCEED"
      />
    </View>
  );
};

export default Getotp;
