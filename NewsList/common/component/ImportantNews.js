import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import NewsTitle from './NewsTitle';

export default class ImportantNews extends Component{
  render(){
    var news=[];
    for(var i in this.props.newsData){
      news.push(<NewsTitle title={this.props.newsData[i]}  key={i}/>);
    }
    var image=[];
    for(var j in this.props.newsImage){
      //image.push(<NewsTitle title={this.props.newsImage[j]}  key={j}/>);
      image.push(<Image style={{width:30,height:30}} source={{uri:this.props.newsImage[j]}} key={j}/>);
    }

    return(
      <View>
        <Text style={styles.title}>重要新闻</Text>
        {news}
        {image}
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
