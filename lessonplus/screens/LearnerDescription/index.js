import React from "react";
import {Text, SafeAreaView, View} from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

class LearnerDescription extends React.Component{
    render(){
        return(
            <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.Box}>
                    <Text style={styles.Name}>Lorem Ipsum is simply dummy text of the printing
                     and typesetting industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
                    </View>
                    <View style={styles.Box}>
                    <Text style={styles.Name}>Payment Status: Verified</Text>
                    </View>
                    <View style={styles.Box}>
                    <Text style={styles.Name}>Allocation Data: 02/04/2022</Text>
                    </View>
            </SafeAreaView>
            </ScrollView>
        )
    }
}

export default LearnerDescription