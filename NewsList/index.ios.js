/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  PixelRatio,
  Text,
  View
} from 'react-native';

import Header from './common/component/Header';
import NewsTitle from './common/component/NewsTitle'

class NewsList extends Component {
  render() {
    return (
      <View style={[styles.container,styles.center]}>
        <Header />
        <View style={styles.topNews}>
          <NewsTitle title="新闻1"/>
          <NewsTitle title="新闻2"/>
          <NewsTitle title="新闻5"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    paddingTop:40,
  },
  topNews:{
    paddingTop:10
  }
});


AppRegistry.registerComponent('NewsList', () => NewsList);
