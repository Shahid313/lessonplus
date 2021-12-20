import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import styles from "./styles";

class Profile extends React.Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.Profile}>
                    <Image style={styles.ProfileImage} source={require('../../assets/ProfileImage.png')}/>
                    <View style={styles.Box}>
                    <Text style={styles.Name}>Shahid Khan</Text>
                    </View>
                    <View style={styles.Box}>
                    <Text style={styles.Name}>ShahidKhan@gmail.com</Text>
                    </View>
                    <View style={styles.Box}>
                    <Text style={styles.Name}>ADI</Text>
                    </View>
                    <View style={styles.Box}>
                    <Text style={styles.Name}>Paid</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default Profile