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
import NewsTitle from './NewsTitle';
import ImportantNews from './common/component/ImportantNews';

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:null,
      image:null,
    };
  }

  render() {
    if(!this.state.title || !this.state.image) {
      var importantNews=[
        "原重要新闻1",
        "原重要新闻2",
        "原重要新闻3",
        "原重要新闻4",
        "原重要新闻5",
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

    //获取json
    var title = this.state.title;
    var image = this.state.image;
    return this.renderTitle(title, image);
  }

   renderTitle(title, image) {
    return (
        <View style={[styles.container,styles.center]}>
        <Header />
          <View style={styles.topNews}>
            <NewsTitle title="新闻1"/>
            <NewsTitle title="新闻2"/>
            <NewsTitle title="新闻5"/>
          </View>
          <ImportantNews newsData={title} newsImage={image} style={styles.importantNews}>
          </ImportantNews>
        </View>
    );
  }

  componentDidMount() {
    fetch('http://ichemtech.com/demo.json')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          title:responseData.title,
          image:responseData.image,
        })
      })
      .done();
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
