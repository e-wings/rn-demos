import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class NewsTitle extends Component{
  render(){
    return(
      <Text style={styles.title}>{this.props.title}</Text>
    )
  }
}

const styles=StyleSheet.create({
  title:{
    fontSize:20,
    paddingTop:7,
  }
})
