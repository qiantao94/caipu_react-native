/**
 * Created by qiantao on 2016/10/19.
 * 按钮 根据平台使用不同的触控组件
 */
import React, { Component } from 'react';
import {
    TouchableNativeFeedback,
    TouchableOpacity,
    Platform
} from 'react-native';
export default class Button extends Component {
    render() {
        let TouchableComponent = TouchableOpacity
        if (Platform.OS === 'android') {
            TouchableComponent = TouchableNativeFeedback
        }
        return (
            <TouchableComponent
                style={{
                    flex: 1,
                    background: Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackgroundBorderless : null,
                }}
                {...this.props}>
                {this.props.children}
            </TouchableComponent>
        );
    }
}
