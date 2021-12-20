import React from "react";
import {Text, Image,  SafeAreaView, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback, ScrollView, TextInput} from 'react-native'
import styles from './styles'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import * as ImagePicker from "react-native-image-picker"
import SelectDropdown from 'react-native-select-dropdown'

class SignUp extends React.Component{

    gender = ["Weekly", "Monthly"]

    goToSignUp(){
        this.props.navigation.navigate('SignIn')
    }

    state = {
        showPass:true
    }

    choosePhoto(){
        const options = {
          noData:true
        };
        ImagePicker.launchImageLibrary(options, response => {
          console.log("response", response);
          if(response){
            console.log(response);
          }
        });
      }

    render(){
        return(
            
                <ScrollView style={{flex:1,height:'100%'}}>
            <View style={styles.container}>
            
                <View style={styles.LogoBox}>
                    <Image style={styles.Logo} source={require('../../assets/Logo.png')}/>
                </View>
                <TouchableOpacity onPress={() => this.choosePhoto()} style={styles.ProfileImage}>
                    <Image style={styles.ProfileImageIcon} source={require('../../assets/ProfileImage.png')}/>
                </TouchableOpacity>
                <View style={styles.EnteringData}>
                    <TextInput style={styles.EmailInput} placeholderTextColor="#929292" placeholder="Email"/>
                    <TextInput style={styles.NameInput} placeholderTextColor="#929292" placeholder="Name"/>
                    <TextInput style={styles.NameInput} placeholderTextColor="#929292" placeholder="ADI/PDI"/>

                    
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
            <SelectDropdown
                renderDropdownIcon={() => (
                    <MIcon name="keyboard-arrow-down" color="#7C7C7C" size={23} />
                )}
                 defaultButtonText="Payment"
                 buttonStyle={styles.dropDown}
	             data={this.gender}
	             onSelect={(selectedItem, index) => {
		         console.log(selectedItem, index)
	             }}
	            buttonTextAfterSelection={(selectedItem, index) => {
		        // text represented after item is selected
		        // if data array is an array of objects then return selectedItem.property to render after item is selected
		        return selectedItem
	            }}
	            rowTextForSelection={(item, index) => {
		        // text represented for each item in dropdown
		        // if data array is an array of objects then return item.property to represent item in dropdown
		        return item
	            }}
                />
            <TouchableOpacity style={styles.LoginButton}>
                    <Text style={styles.LoginButtonText}>Sign Up</Text>
            </TouchableOpacity>
          
                </View>
                
                </View>

                    <View style={styles.AlreadyHaveAccount}>
                    <Text style={styles.DontHaveAccountText}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => this.goToSignUp()} style={styles.SignInLink}>
                        <Text style={styles.AlreadyHaveAccountSignInLink}>Login</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
                
              

            
            
            
        )
    }
}

export default SignUp;