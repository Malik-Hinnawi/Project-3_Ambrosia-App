import React from "react";
import { createStackNavigator,CardStyleInterpolators } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SignupScreen2 from "./src/screens/SignupScreen2";
import LandingScreen from "./src/screens/LandingScreen";
import VeganMenuScreen from "./src/screens/VeganMenuScreen";
import ForgetPasswordScreen1 from "./src/screens/ForgetPasswordScreen1";
import ForgetPasswordScreen2 from "./src/screens/ForgetPasswordScreen2";
import ForgetPasswordScreen3 from "./src/screens/ForgetPasswordScreen3";
import StartScreen from "./src/screens/StartScreen";
import AboutScreen from "./src/screens/AboutScreen";
import AboutScreen2 from "./src/screens/AboutScreen2";
import DetailsScreen from "./src/screens/DetailsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

const Stack = createStackNavigator();

const StackNaviagtor = ({placeholder, header}) => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Group screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS}}>
                <Stack.Screen name = "Start" component = {StartScreen}/>
                <Stack.Screen name = "About" component = {AboutScreen}/>
                <Stack.Screen name = "About2" component = {AboutScreen2}/>
            </Stack.Group>
            <Stack.Group>
                <Stack.Screen name = "Login" component = {LoginScreen}/>
                <Stack.Screen name = "Signup" component={SignupScreen}/>
                <Stack.Screen name = "Signup2" component={SignupScreen2}/>
                <Stack.Screen name = "Landing" component={LandingScreen}/>
                <Stack.Screen name = "VeganMenu" component={VeganMenuScreen}/>
                <Stack.Screen name = "Details" component={DetailsScreen}/>
                <Stack.Screen name = "ForgetPassword1" component={ForgetPasswordScreen1}/>
                <Stack.Screen name = "ForgetPassword2" component={ForgetPasswordScreen2}/>
                <Stack.Screen name = "ForgetPassword3" component={ForgetPasswordScreen3}/>
                <Stack.Screen name = "Profile" component={ProfileScreen}/>
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default StackNaviagtor