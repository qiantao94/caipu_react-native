/**
 * Created by  on 2016/10/20.
 */
import React, {
    Component
} from 'react'
import {
    StatusBar,
    View,
} from 'react-native'
import TabBar from '../../componet/TabBar'
import ToolBar from '../../componet/ToolBar'
import Menu from './menu'
import Discovery from './discovery'
import Search from './search'
import {
    dark_primary_color
} from '../../values/color.js'
import {PageFilters} from '../../redux/actions'
import {NavigatorName} from '../../values/const'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curTab: PageFilters.PAGE_MENU,
        }
    }

    _onTabSelect(title) {
        this.setState({
            curTab: title
        })
    }

    _onTapItem(id,name) {
        console.log(id);
        this.props.navigator.push({
            name: NavigatorName.List,
            params:{
                id:id,
                name:name
            }
        })
    }

    render() {
        let fragment;
        switch (this.state.curTab) {
            case PageFilters.PAGE_MENU:
                fragment = <Menu onTapItem={this._onTapItem.bind(this)}/>;
                break;
            case PageFilters.PAGE_DISCOVERY:
                fragment = <Discovery/>;
                break;
            case PageFilters.PAGE_SEARCH:
                fragment = <Search/>;
                break;
        }
        return (
            <View style={{flex: 1}}>
                <StatusBar backgroundColor={dark_primary_color}/>
                <ToolBar isMain={true} title={this.state.curTab}/>
                {fragment}
                <TabBar style={{alignSelf: 'flex-end'}} curTab={this.state.curTab}
                        onTabSelect={this._onTabSelect.bind(this)}/>
            </View>
        );
    }
}