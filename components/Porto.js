//Hilda Rizki Aulia


import { Text, SafeAreaView, StyleSheet, View,Image, Button, Alert, Modal, Pressable, ScrollView, Linking } from 'react-native';

import React, {useState} from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from '../components/AssetExample';

export default function Porto({navigation}) {
  const handlePressProject1 = () => {
    Linking.openURL('https://www.figma.com/file/y5Hzr3z3VPLdMK7g3Gjda9/OCAFE?type=design&node-id=497%3A168&mode=design&t=yG4xDNP5Vo85Bzma-1');
  }
  const handlePressProject2 = () => {
    Linking.openURL('https://www.figma.com/file/HSgmQunIUQ17gRdlR8iP6S/UI%2FUX?type=design&node-id=2%3A188&mode=design&t=PNcsIw5AuRkjTPHh-1');
  }
  const [modalVisible, setModalVisible] = useState(false);
  return(
    <ScrollView>
   <View style={styles.container}>
   <Image
        style={styles.avatar}
        source={require('../assets/foto-hilda.jpeg')}
      />
      <Text style={styles.title}>Hilda Rizki Aulia</Text>
     
      <Text style= {styles.paragraph}>
     Saya seorang siswi yang memiliki minat besar dalam kelas mobile. Memiliki jiwa tanggung jawab yang besar akan tugas yang diberikan kepada saya. Terampil dalam mengoperasikan figma dan android studio. Senang bekerja dalam tim dan memiliki kemampuan komunikasi yang baik.
      </Text>
      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText} onPress={() => {navigation.navigate('login')}}>Contact: 08226658902(Whatsapp)</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Contact Me!</Text>
      </Pressable>
      </View>
      <Text style={styles.title2}> My Recent Project</Text>
  
      
      <Image style={styles.fotoproject}
      source={
        require('../assets/home.png')
      }>

      </Image>
      <View> 
       <Text style={styles.title3}>Landing Page Ocafe</Text>
       <Text styles={styles.title3}> UI/UX</Text>
        <Pressable
      style={({pressed}) => [styles.btnproject, {backgroundColor:pressed? '#DDDDDD' : '#000000'}]}
      onPress={handlePressProject1}>
      <Image
      source={
        require('../assets/figma-icon.png')}
        style={{width: 16,height:16}}>
      </Image>
      <Text style={{color: '#ffffff'}}>Figma</Text>
      
      </Pressable>
    
        <Image style={styles.fotoproject}
      source={
        require('../assets/uiux.png')
      }>
      </Image>
       <View> 
       <Text style={styles.title3}>Travel App</Text>
       <Text styles={styles.title3}>UI/UX</Text>
        <Pressable
      style={({pressed}) => [styles.btnproject, {backgroundColor:pressed? '#DDDDDD' : '#000000'}]}
      onPress={handlePressProject2}>
      <Image
      source={
        require('../assets/figma-icon.png')}
        style={{width: 16,height:16}}>
      </Image>
      <Text style={{color: '#ffffff'}}>Figma</Text>
      
      </Pressable>
    
      </View>

      </View>
     
      
    </View>

    </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:24,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center'
  },
  title2: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center'
  },
   title3: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  paragraph: {
    marginTop: 10,
    fontSize: 12,
    color: 'grey',
    fontWeight: 'italic',
    textAlign: 'center',
    justifyContent: 'center',
  },
  avatar: {
    height: 128,
    width:128,
    marginTop: 10,
    borderRadius: 1000,
  },
  fotoproject: {
    width: 250,
    height:160,
    marginTop: 10,
    borderRadius: 8

  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin : 20,
    backgroundColor: 'white',
    borderRadius: 28, 
    padding: 35,
    alignitems: 'center',
    shadowColor: '#000', 
    shadowoffset: {
      width:0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,

  },
  button: {
    //marginVertical:100,
    borderRadius: 20,
    padding: 10,
    elevation:2,

  },
   buttonOpen: {
    backgroundColor: '#072541',
    marginTop: -20,
  },
  buttonClose: {
    backgroundColor: '#072541',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  btnproject:{
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'black',
  },
});

