/**
 * Created by qiantao on 2016/10/19.
 * 底部Tab按钮
 */
import React, {Component} from 'react';
import {
    View,
    Image,
} from 'react-native';
import {PageFilters} from '../redux/actions'
const {PAGE_MENU, PAGE_DISCOVERY, PAGE_SEARCH} = PageFilters;


import {
    white_color,
} from '../values/color.js';

import Button from '../componet/Button.js'

export class TabItem extends Component {
    render() {
        let {onTabPress, icon} = this.props;
        return (
            <Button onPress={onTabPress}>
                <View style={{
                    height: 42,
                    backgroundColor: white_color,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                }}>
                    <Image source={icon}
                           style={{width: 36, height: 36}}/>
                </View>
            </Button>
        );
    }
}

export default class TabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curTab: PAGE_MENU,
        }
    }
    _onTabPress(name) {
        this.setState({
            curTab: name,
        });
        this.props.changeTitle(name);
    }

    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <TabItem onTabPress={this._onTabPress.bind(this, PAGE_MENU)}
                         icon={this.state.curTab == PAGE_MENU
                             ? require('../img/menu_selected.png')
                             : require('../img/menu.png')}/>
                <TabItem onTabPress={this._onTabPress.bind(this, PAGE_DISCOVERY)}
                         icon={this.state.curTab == PAGE_DISCOVERY
                             ? require('../img/discovery_selected.png')
                             : require('../img/discovery.png')}/>
                <TabItem onTabPress={this._onTabPress.bind(this, PAGE_SEARCH)}
                         icon={this.state.curTab == PAGE_SEARCH
                             ? require('../img/search_selected.png')
                             : require('../img/search.png')}/>
            </View>
        )
    }
}