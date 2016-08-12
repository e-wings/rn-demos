import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';

import TitleList from './common/rn-components/ui/TitleList';
import SecondPageComponent from './SecondPageComponent';
import DetailSimple from './common/rn-components/ui/DetailSimple'

export default class FirstPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    _pressButton() {
        const { navigator } = this.props;
        //往navigator里push一个新的对象，即可跳转到该页面
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: SecondPageComponent,
            })
        }
    }
    _pressTitle(data) {
      const { navigator } = this.props;
      if(navigator) {
        navigator.push({
          name: 'DetailSimple',
          component: DetailSimple,
          //这里把从子组件传递过来的参数加入到navigator中，
          //新打开的组件使用这个参数的方式为：{this.props.data}
          params:{
            data:data,
            nextComponent:SecondPageComponent,
          }
        })
      }
    }
    render() {
      let titleArr=[
        {title:'标题1',content:'正文1'},
        {title:'标题2',content:'正文2'},
        {title:'标题3',content:'正文3'},
        {title:'标题4',content:'正文4'},
        {title:'标题5',content:'正文5'},
      ];
      return (
        <View>
          <Text style={styles.title}>不带参数的跳转</Text>
          <TouchableOpacity onPress={this._pressButton.bind(this)}>
            <Text>点我跳转</Text>
          </TouchableOpacity>
          {/* props传递时，FirstPage作为父级组件，这里只是bing(this)，但不影响子组件传递参数到_pressTitle(data) */}
          <TitleList titleData={titleArr} clickCallback={this._pressTitle.bind(this)}/>
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
});
