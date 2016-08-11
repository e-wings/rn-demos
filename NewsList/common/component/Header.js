import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={[styles.headerTitle,styles.red]}>网易</Text>
        <Text style={[styles.headerTitle,styles.redBg]}>新闻</Text>
        <Text style={[styles.headerTitle]}>有态度</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header:{
    flexDirection:'row',
    justifyContent: 'center',
    borderBottomWidth:2,
    borderColor:'red',
    paddingBottom:10,
  },
  headerTitle:{
    fontSize:24,
    fontWeight:'bold'
  },
  red:{
    color:'red'
  },
  redBg:{
    backgroundColor:'red',
    color:'white',
    paddingTop:4,
    paddingBottom:4,
    marginTop:-4
  }
})
