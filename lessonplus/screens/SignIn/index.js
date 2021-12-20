import React from "react";
import {Text, Image,  SafeAreaView, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback, ScrollView, TextInput} from 'react-native'
import styles from './styles'

class SignIn extends React.Component{

    GoToSignUp(){
        this.props.navigation.navigate('SignUp')
    }

    GoToHome(){
        this.props.navigation.navigate('Main')
    }

    state = {
        showPass:true
    }
    render(){
        return(
            <ScrollView style={styles.container}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView>
                <View style={styles.LogoBox}>
                    <Image style={styles.Logo} source={require('../../assets/Logo.png')}/>
                </View>
                <View style={styles.EnteringData}>
                    <TextInput style={styles.EmailInput} placeholderTextColor="#929292" placeholder="Email"/>
                    
                <View style={styles.PasswordInput}>
                {this.state.showPass == true ? 
                <TouchableOpacity onPress={() => this.setState({showPass:!(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/eye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>:
                <TouchableOpacity onPress={() => this.setState({showPass:!(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/crosseye.png')} style={styles.CrossEyeIconStyle}/>
                </TouchableOpacity>
                }
                

                <TextInput placeholderTextColor="#929292" secureTextEntry={this.state.showPass} placeholder="Password" style={styles.InputField}/>

            </View>
            <TouchableOpacity onPress={() => this.GoToHome()} style={styles.LoginButton}>
                    <Text style={styles.LoginButtonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.DontHaveAccount}>
                <Text style={styles.DontHaveAccountText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => this.GoToSignUp()} style={styles.SignUpLink}>
                    <Text style={styles.DontHaveAccountSignUpLink}>Sign Up</Text>
                </TouchableOpacity>
            </View>
                </View>
            </SafeAreaView>
            </TouchableWithoutFeedback>
            </ScrollView>
        )
    }
}

export default SignIn;