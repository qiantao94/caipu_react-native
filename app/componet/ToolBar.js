/**
 * Created by qiantao on 2016/10/19.
 * 标题栏组件
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import {
    white_color,
    default_primary_color
} from '../values/color.js';
import Button from './Button'


export default class ToolBar extends Component {
    render() {
        /**
         * title: 标题栏的标题
         * isMain: 是否是主界面的标题，来分别渲染不同风格的标题栏，默认为false
         * onBackPress: 按钮点击的监听
         * backgroundColor：背景色，默认为default_primary_color
         */
        let {title, isMain = false, onBackPress, backgroundColor = default_primary_color} = this.props;
        return (
            <View style={{
                backgroundColor: backgroundColor,
                height: 56,
                flexDirection: 'row',
                justifyContent: isMain ? 'center' : 'flex-start',
                alignItems: 'center',
                shadowColor: "#000000",
                shadowRadius: 1,
                shadowOffset: { height: 1, width: 0.3 },
                shadowOpacity: 0.3
            }}>
                {
                    isMain ?
                        null :
                        <Button onPress={onBackPress}>
                            <View style={{
                                width: 50,
                                height: 56,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Image style={{ width: 20, height: 20 }}
                                    source={require('../img/back.png')} />
                            </View>
                        </Button>
                }
                <Text style={{
                    color: white_color,
                    fontSize: 20,
                    alignSelf: 'center',
                    marginLeft: isMain ? 0 : 10
                }}>
                    {title}
                </Text>
            </View>
        )
    }
}
