/**
 * Created by qiantao on 2016/10/19.
 * 按钮
 */
import React, {Component} from 'react';
import {
    TouchableNativeFeedback,
} from 'react-native';
export default class Button extends Component {
    render() {
        return (
            <TouchableNativeFeedback
                style={{
                    flex: 1,
                    background: TouchableNativeFeedback.SelectableBackgroundBorderless,
                }}
                {...this.props}>
                {this.props.children}
            </TouchableNativeFeedback>
        );
    }
}
