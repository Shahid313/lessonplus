import React from 'react'
import {Text, View, SafeAreaView, Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import LearnerDescription from '../screens/LearnerDescription';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabNavigations() {
    return (
      <Tab.Navigator screenOptions={{
        tabBarStyle: {
          height: 60,

        },
        tabBarHideOnKeyboard:true
      }}>

        <Tab.Screen options={{
            tabBarShowLabel:false,
            headerShown:false,
            tabBarIcon:() => <FAIcon name="tachometer" color="#242d6f" size={33} />
        }} name="Home" component={Home}/>

        <Tab.Screen options={{
          headerShown:false,
            tabBarShowLabel:false,
            tabBarIcon:() => <Icon name="person" color="#242d6f" size={33} /> 
        }} name="Profile" component={Profile}/>
      </Tab.Navigator>
    );
  }

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown:false}} name="SignUp" component={SignUp} />
                <Stack.Screen options={{headerShown:false}} name="SignIn" component={SignIn} />
                <Stack.Screen options={{headerShown:false}} name="Main" component={BottomTabNavigations} />
                <Stack.Screen options={{title:'Learner Description', headerTitleAlign:'center', headerTintColor:'#242d6f', headerTitleStyle:{color:'#242d6f'}}} name="LearnerDescription" component={LearnerDescription} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes