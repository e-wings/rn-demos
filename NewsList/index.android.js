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
import NewsTitle from './common/component/NewsTitle';
import ImportantNews from './common/component/ImportantNews';

class NewsList extends Component {
  render() {
    var importantNews=[
      "重要新闻1",
      "重要新闻2",
      "重要新闻3",
      "重要新闻4",
      "重要新闻5",
    ];
    return (
      <View style={[styles.container,styles.center]}>
        <Header />
        <View style={styles.topNews}>
          <NewsTitle title="新闻1"/>
          <NewsTitle title="新闻2"/>
          <NewsTitle title="新闻5"/>
        </View>
        <ImportantNews newsData={importantNews} style={styles.importantNews}>

        </ImportantNews>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    paddingTop:40,
    paddingLeft:18,
    paddingRight:18,
  },
  topNews:{
    paddingTop:10,
    paddingBottom:10,
  },
  importantNews:{

  },
});


AppRegistry.registerComponent('NewsList', () => NewsList);
