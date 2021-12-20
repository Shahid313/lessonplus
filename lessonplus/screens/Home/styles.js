import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        paddingRight:'5%',
        paddingLeft:'5%',
        paddingTop:'5%'
    },

    Learner:{
        width:'100%',
        height:60,
        backgroundColor:'#242d6f',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    },

    Name:{
        color:'#FFFFFF',
        fontSize:20
    },

    LearnerBox:{
        width:'100%',
        alignItems:'center',
        marginBottom:10
    },

    learnersText:{
        fontSize:30,
        color:'#242d6f',
        fontWeight:'bold'
    }
})

export default styles