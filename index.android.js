/**
 * Created by qiantao on 2016/10/19.
 * App入口
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StatusBar,
    View
} from 'react-native';
import TabBar from './app/componet/TabBar'
import ToolBar from './app/componet/ToolBar'
import {
    dark_primary_color
} from './app/values/color.js';
import {PageFilters} from './app/redux/actions'
const {PAGE_MENU} = PageFilters;

export default class caipu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curTab: PAGE_MENU,
        }
    }

    _changeTitle(name) {
        this.setState({
            curTab:name
        })
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar backgroundColor={dark_primary_color}/>
                <ToolBar isMain={false} title={this.state.curTab} />
                <View style={{flex: 1}}/>
                <TabBar style={{alignSelf: 'flex-end'}} changeTitle={this._changeTitle.bind(this)}/>
            </View>
        );
    }
}

AppRegistry.registerComponent('caipu', () => caipu);
