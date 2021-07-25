import * as React from 'react';
import {Component} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default class AppHeader extends React.Component {

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.containerText}>Pocket Dictionary</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#076da1',
    height : '20%',
    alignContent : 'center',
    alignItems : 'center',
    justifyContent : 'center'
  },
  containerText:{
    color: '#FFF', 
    fontSize: 20, 
    fontWeight : 'bold'
  }
});
