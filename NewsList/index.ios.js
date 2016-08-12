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
import MyNewsTitle from './MyNewsTitle';
import ImportantNews from './common/component/ImportantNews';

class NewsList extends Component {
  render() {
    return (
      <View style={[styles.container,styles.center]}>
        <Header />
        <View style={styles.topNews}>
          <MyNewsTitle title="新闻1"/>
          <MyNewsTitle title="新闻2"/>
          <MyNewsTitle title="新闻5"/>
        </View>
        <ImportantNews>

        </ImportantNews>
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
