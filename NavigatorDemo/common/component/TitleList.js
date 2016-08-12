import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import TitleSingle from './TitleSingle';

export default class TitleList extends Component{
  render(){
    var titleArr=[];
    for(var i in this.props.titleData){
      titleArr.push(
        //此处使用的是TouchableOpacity＋onPress
        <TouchableOpacity onPress={this.props.clickCallback.bind(this,this.props.titleData[i])}  key={i}>
          <TitleSingle title={this.props.titleData[i].title}/>
        </TouchableOpacity>
      );
    }
    return(
      <ScrollView>
        <Text style={styles.title}>传递参数的跳转</Text>
        {titleArr}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title:{
    fontSize:24,
    fontWeight:'bold',
    color:'black',
    alignSelf:'center',
  }
})
