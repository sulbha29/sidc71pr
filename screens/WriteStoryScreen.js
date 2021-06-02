import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  Button,
  ToastAndroid,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import db from '../config'



export default class WriteStoryScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        title: '',
        author: '',
        storyText: '',
    }
}

submitStory = ()=>{
    db.collection("Story").add({
        title: this.state.title,
        author: this.state.author,
        storyText: this.state.storyText,
    })
    this.setState({
        title: '',
        author: '',
        storyText: ''
    })
    Alert.alert("story added")
    
}
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
      
           
        <Text style={{textAlign:'center', fontSize:30, fontWeight: "bold",marginTop:100, marginBottom:50}}>Story Hub</Text>
        <View style={styles.inputView}>
         <TextInput style={styles.inputBox} placeholder="Title"
         onChangeText = {(text)=>{
           this.setState({
             title:text
           })
         }}
         value = {this.state.title}
         
         />
         </View>
         <View style={styles.inputView}>
                  <TextInput style={styles.inputBox} placeholder="Author"
                   onChangeText = {(text)=>{
                    this.setState({
                      author:text
                    })
                  }}
                  value = {this.state.author}/>
                  </View>
                 <View style={styles.inputView}>
               
                <TextInput
      style={styles.textArea}
      placeholder="Write Your Story"
      placeholderTextColor="grey"
      numberOfLines={10}
      multiline={true}
      onChangeText = {(text)=>{
        this.setState({
          storyText:text
        })
      }}
      value = {this.state.storyText}
      
    />




    
     <View style={styles.inputView}>
       <TouchableOpacity 
          style={{ backgroundColor: 'orange',
          width: 100,
          height:30,
          alignItems:'center',
          marginTop:150,
          }}
          onPress={this.submitStory}
            >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>

 </View>
</View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  
  inputBox:{
    width: 300,
    height: 30,
    borderWidth: 1.5,

    fontSize: 20
  },
  inputView:{
    flexDirection: 'row',
    margin: 10
  },
  
  textArea: {
    height: 100,
    width : 250,
    alignSelf:'center',
    marginLeft:150,
    marginTop:-50,
    borderWidth: 1.5
    ,
  },
 
  submitButtonText:{

    textAlign: 'center',
    fontSize: 15,
    fontWeight:"bold",
    color: 'white'
  }
});
