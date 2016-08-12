/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  Navigator,
} from 'react-native';
import FirstPageComponent from './FirstPageComponent';

class NavigatorDemo extends Component {
  render() {
    let defaultName = 'FirstPageComponent';
    let defaultComponent = FirstPageComponent;
    //顶层只有一个Navigator，类似于React带有路由功能时，顶层只有路由
    return (
      /* initialRoute: 中只需要name, component两个参数即可，额外参数在后续页面，跳转页面前加入
          configureScene: 指定动画
          {...route.params}将route的所有参数传入新打开的component
      */
      <Navigator
        initialRoute={{ name: defaultName, component: defaultComponent}}
        configureScene={(route) => {
          return Navigator.SceneConfigs.VerticalDownSwipeJump;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator}/>
        }} />
    );
  }
}

AppRegistry.registerComponent('NavigatorDemo', () => NavigatorDemo);
