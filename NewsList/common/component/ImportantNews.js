import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import NewsTitle from './NewsTitle';

export default class ImportantNews extends Component{
  render(){
    var news=[];
    for(var i in this.props.newsData){
      news.push(<NewsTitle title={this.props.newsData[i]}  key={i}/>);
    }

    return(
      <View>
        <Text style={styles.title}>重要新闻</Text>
        {news}
      </View>
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
