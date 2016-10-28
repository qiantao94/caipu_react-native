/**
 * Created by qiantao on 2016/10/19.
 * 底部Tab栏 配合 ScrollableTabView使用，
 */
import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';
import { PageFilters } from '../redux/actions'
const {PAGE_MENU, PAGE_DISCOVERY, PAGE_SEARCH} = PageFilters;
import {
    white_color,
} from '../values/color.js';

import Button from '../componet/Button.js'
let titles = [PAGE_MENU, PAGE_DISCOVERY, PAGE_SEARCH]

export default class TabBar extends Component {
    _onTabPress(i) {
        this.props.goToPage(i);
    }

    render() {
        let icons = [require('../img/menu.png'), require('../img/discovery.png'), require('../img/search.png')];
        let icons_selected = [require('../img/menu_selected.png'), require('../img/discovery_selected.png'), require('../img/search_selected.png')];
        let items = [];
        let {activeTab, gotToPage} = this.props;
        for (let i = 0; i < icons.length; i++) {
            items.push(
                <Button key={i} onPress={this._onTabPress.bind(this, i)}>
                    <View style={styles.view}>
                        <Image source={activeTab == i ? icons_selected[i] : icons[i]}
                            style={{ width: 30, height: 30 }} />
                    </View>
                </Button>
            )
        }
        return (
            <View style={{ flexDirection: 'row' }}>{items}</View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        height: 42,
        backgroundColor: white_color,
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
    }
})