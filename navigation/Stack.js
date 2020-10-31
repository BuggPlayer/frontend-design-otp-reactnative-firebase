import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import OtpScreen from "../screens/OtpScreen";
import Getotp from "../screens/Getotp";

const Stack = createStackNavigator();

export const AuthStacks = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="register" component={OtpScreen} />
      <Stack.Screen name="otp" component={Getotp} />
    </Stack.Navigator>
  );
};


