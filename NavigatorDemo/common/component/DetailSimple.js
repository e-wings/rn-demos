import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class DetailSimple extends Component{
  _toList(){
    const { navigator } = this.props;
    if(navigator) {
        navigator.pop();
    }
  }

  _toNext(){
    const { navigator } = this.props;
    if(navigator) {
      alert(this.props.nextComponent);return;
      navigator.push({
          name: 'NextComponent',
          component: this.props.nextComponent,
      })
    }
  }

  render(){
    console.log(this.props);
    return(
      <View>
        {/* 这里使用从上一个页面通过navigator传过来的参数 */}
        <Text style={styles.title}>{this.props.data.title}</Text>
        <Text>{this.props.data.content}</Text>

        <TouchableOpacity onPress={this._toList.bind(this)} style={styles.btnBack}>
          <Text>返回列表页</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toNext.bind(this)} style={styles.btnBack}>
          <Text>跳转到 SecondPageComponent</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  title:{
    fontSize:20,
    paddingTop:7,
    alignSelf:'center',
  },
  btnBack:{
    alignSelf:'flex-end',
  }
})
