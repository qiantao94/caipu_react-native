/**
 * Created by qiantao on 2016/10/19.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import Button from '../componet/Button.js';
import {
    white_color,
    default_primary_color
} from '../values/color.js';

export default class ToolBar extends Component {
    render() {
        let {title, isMain} = this.props;
        return (
            <View style={{
                backgroundColor: default_primary_color,
                height: 56,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {/*{isMain ? null :*/}
                    {/*<Button>*/}
                        {/*<View >*/}
                            {/*<Image source={require('../img/back.png')}*/}
                                   {/*style={{marginLeft: 16, width: 20, height: 20,}}/>*/}
                        {/*</View>*/}
                    {/*</Button>*/}
                {/*}*/}
                <Text
                    style={{color: white_color, fontSize: 20, alignSelf: 'center'}}>{title}</Text>
            </View>
        )
    }
}