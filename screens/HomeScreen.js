import * as React from 'react';
import {Component} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import AppHeader from './AppHeader';

export default class HomeScreen extends React.Component {

    constructor(){
        super();
        this.state = {
            text : "",
            isSearchPressed : false,
            word : "",
            lexicalCategory : "",
            examples : [],
            definition : ""
        }
    }

    getWord = (word) => {
        var searchKeyword = word.toLowerCase();
        var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json";
        //"https://rupinwhitehatjr.github.io/dictionary/blob/master/"+searchKeyword+".json"
        //https://github.com/rupinwhitehatjr/dictionary/blob/master/space.json
        //console.log(url);
        return fetch(url)
        .then((data) =>{
            if(data.status===200){
                return data.json();
            }
            else{
                return null;
            }
        })
        .then((response)=>{
            //console.log(response);
            var responseObject = response;
            //var word = responseObject.word
            //var lexicalCategory = responseObject.results[0].lexicalEntries[0].lexicalCategory.text
            if(responseObject){
                var wordData = responseObject.definitions[0]
                //console.log(responseObject.definitions[0])
                var definition = wordData.description
                //console.log(definition);
                var lexicalCategory = wordData.wordtype
                //console.log(lexicalCategory)
                this.setState({
                    word : this.state.text,
                    lexicalCategory : lexicalCategory,
                    definition : definition
                })
            }
            else{
                this.setState({
                    word : this.state.text,
                    lexicalCategory : "Not Found",
                    definition : "Not Found"
                })
            }
        })
    }

  render() {
    return (
     
      <View style={styles.container}>

      <AppHeader/>

      <TextInput
      style = {styles.inputBox}
      onChangeText={text => {
          this.setState({
              text : text,
              isSearchPressed : false,
              word : "Loading...",
              lexicalCategory : "",
              examples : [],
              definition : ""
          });
      }}
      value = {this.state.text}
      />

      <TouchableOpacity style={styles.searchButton}
      onPress = { ()=> {
          this.setState({ 
            isSearchPressed : true, 
            });
          this.getWord(this.state.text)
      }}>
      <Text style={{color:"#fff",fontWeight:"bold"}}>Seach</Text>
      </TouchableOpacity>

      <View style={styles.detailsContainer}>
      <Text style={styles.detailsTitle}>
      Word : {""}
      </Text>
      <Text style={{fontSize:18}}>
      {this.state.word}
      </Text>
      </View>

      <View style={styles.detailsContainer}>
      <Text style={styles.detailsTitle}>
      Type : {""}
      </Text>
      <Text style={{fontSize:18}}>
      {this.state.lexicalCategory}
      </Text>
      </View>

      <View style={{margin:10,flexDirection : 'row',flexWrap : 'wrap'}}>
      <Text style={styles.detailsTitle}>
      Definition : {""}
      </Text>
      <Text style={{fontSize:18}}>
      {this.state.definition}
      </Text>
      </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
 container: {
    backgroundColor : '#fff'
  },
  inputBox:{
    marginTop: 20,
    width: '50%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 2,
    outline: 'none',
  },
  searchButton:{
    width: '10%',
    height: 30,
    alignSelf: 'center',
    justifyContent : 'center',
    alignItems : 'center',
    margin: 10,
    borderWidth : 2,
    backgroundColor : '#076da1'
  },
  detailsContainer:{
      margin : 10
  },
  detailsTitle:{
      fontSize : 20,
      color : "#076da1"
  }
});
