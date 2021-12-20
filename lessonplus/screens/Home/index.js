import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const learners = [
    {
        'id':'1',
        'name':'Shahid Khan'
    },{
        'id':'2',
        'name':'Shoaib Khan'
    },{
        'id':'3',
        'name':'Irfanullah'
    },{
        'id':'4',
        'name':'Kalsoom'
    },
]

class Home extends React.Component{
    GoToDescription(){
        this.props.navigation.navigate('LearnerDescription')
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.LearnerBox}>
                    <Text style={styles.learnersText}>LEARNERS</Text>
                </View>
                {learners.map((item) => {
                    return(
                        <TouchableOpacity onPress={() => this.GoToDescription()} key={item.id} style={styles.Learner}>
                            <Text style={styles.Name}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                })}
            </SafeAreaView>
        )
    }
}

export default Home