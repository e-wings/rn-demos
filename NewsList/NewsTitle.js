import React from 'react';
import {StyleSheet,Text} from 'react-native'
import NewsTitle from './common/rn-components/ui/TitleSingle';

export default class NewsList extends NewsTitle{
  render(){
    return(
      <Text style={styles.title}>{this.props.title}</Text>
    )
  }
}

const styles=StyleSheet.create({
  title:{
    color:'red',
  }
})
