import react from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

export default function Bmi(){
    
    const imgSrc = require('./p1.jpg')

return(
    <View style={styles.container}>
        <Text style={styles.item}>BMI Application</Text>
       <Image source={imgSrc} style={styles.img} />
    </View>
)
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        marginTop:150,
        alignItems:'center'
        //container:{ แสดงแนวนอน
        //flex: 1,
        //flexDirection: 'row',
        //flexWrap: 'wra',
        //justifyContent: 'space-evenly',
        //marginTop: 50
        
    },
    img:{
      width: 200,
      height: 150,
      borderWidth: 1,
      borderColor: 'red',
      marginBottom: 15,
    },
    item:{
        height:200,
        width:350,
        backgroundColor:'#FF3333',
        marginBottom:15,
        //paddingLeft:10,
        justifyContent:'center',
        alignItems:'center',
        margin:10
    }
})