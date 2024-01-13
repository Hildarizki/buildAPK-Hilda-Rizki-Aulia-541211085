//Hilda Rizki Aulia

import * as React from 'react';
import { Image,  StyleSheet, Text,TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';

import bgImage from '../assets/icon.jpg';

  export default function Register({navigation}) {
    
    return (
    
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.container}>
        <Image style={styles.avatar}
        source={require('../assets/icon-fp.png')}/></View>
        <View>
        <Text style={styles.title3}>Register</Text>
        </View>
        <View style={styles.inputView} >
            <TextInput  
                style={styles.inputText}
                placeholder="Nama Lengkap" 
                placeholderTextColor="#003f5c"
                />
        </View>
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
         <View style={styles.inputView} >
            <TextInput  
                style={styles.inputText}
                placeholder="Ulang Password" 
                placeholderTextColor="#003f5c"
                secureTextEntry={true} 
                />
        </View>
    
        <TouchableOpacity style={styles.loginBtn} onPress={() => {navigation.navigate('porto')}}>
            <Text style={styles.loginText}>REGISTER</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
             <Text style={styles.forgot1} onPress={() => {navigation.navigate('login')}}>Login</Text>
        </TouchableOpacity>
         
        <TouchableOpacity>
             <Text style={styles.forgot}>Forgot Password?</Text>
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
  title3: {
    marginTop: 10,
    fontSize: 22,
    color: '#CE5A67',
    fontWeight: 'bold',
    textAlign: 'left',
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
  
  forgot:{
    color:"grey",
    fontSize:11
  },
  forgot1:{
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