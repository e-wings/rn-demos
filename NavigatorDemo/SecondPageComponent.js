import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text,
} from 'react-native';

import FirstPageComponent from './FirstPageComponent';

export default class SecondPageComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
            navigator.pop();
        }
    }

    render() {
    return (
      <View>
        <Text>这里是SecondPage</Text>
          <TouchableOpacity onPress={this._pressButton.bind(this)}>
              <Text>点我返回</Text>
          </TouchableOpacity>
      </View>
    );
    }
}
