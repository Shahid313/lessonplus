import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        paddingLeft:'5%',
        paddingRight:'5%',
        paddingTop:'5%'
    },

    ProfileImage:{
        width:120,
        height:120
    },

    Name:{
        color:'#FFFFFF',
        fontSize:21,
        marginTop:5
    },

    Profile:{
        justifyContent:'center',
        alignItems:'center'
    },

    Box:{
        width:'90%',
        height:50,
        backgroundColor:'#242d6f',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    }
})

export default styles