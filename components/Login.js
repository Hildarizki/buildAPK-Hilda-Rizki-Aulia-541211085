//Hilda Rizki Aulia 

import * as React from 'react';
import { Image,  StyleSheet, Text,TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';

import bgImage from '../assets/icon.jpg';

  export default function Login({navigation}) {
    
    return (
    
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.container}>
        <Image style={styles.avatar}
        source={require('../assets/icon-fp.png')}/></View>
        <View style={styles.inputView} >
            <TextInput  
                style={styles.inputText}
                placeholder="Email" 
                placeholderTextColor="#003f5c"
                />
        </View>
        <View style={styles.inputView} >
            <TextInput  
                style={styles.inputText}
                placeholder="Password" 
                placeholderTextColor="#003f5c"
                secureTextEntry={true} 
                />
        </View>
        
    
        <TouchableOpacity style={styles.loginBtn} onPress={() => {navigation.navigate('porto')}}>
            <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
             <Text style={styles.forget1} onPress={() => {navigation.navigate('register')}}>Register</Text>
        </TouchableOpacity>
         
        <TouchableOpacity>
             <Text style={styles.forget}>Forget Password?</Text>
       </TouchableOpacity>
        
  
       </ImageBackground>
    );


}


const styles = StyleSheet.create({
   container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
   avatar: {
    height: 210,
    width:210,
    borderRadius: 1000,
  },
  
  backgroundContainer:{
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView:{
    width:"80%",
    backgroundColor:"white",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:30,
    color:"black"
  },

  forget:{
    color:"grey",
    fontSize:12
  },

  forget1:{
    color:"#CE5A67",
    fontSize:12
  },

  loginBtn:{
    width:"80%",
    backgroundColor:"#F1B4BB",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  
});