/**
 * Created by  on 2016/10/20.
 * 主界面，主界面下有三个分界面：分类界面<Menu/>，发现界面<Lis/>，搜索界面<Search/>
 */
import React, {
    Component
} from 'react'
import {
    StatusBar,
    View,
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import TabBar from '../../componet/TabBar'
import ToolBar from '../../componet/ToolBar'
import Menu from './menu'
import List from '../list'
import Search from './search'
import { PageFilters } from '../../redux/actions'
import { NavigatorName } from '../../values/const'

let titles = [PageFilters.PAGE_MENU, PageFilters.PAGE_DISCOVERY, PageFilters.PAGE_SEARCH];

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curTab: PageFilters.PAGE_MENU,
        }
    }


    /**
     * 菜单分类子界面 传来的列表点击事件的监听
     * 
     * @param {any} id   分类id
     * @param {any} name 分类名称
     * 
     * @memberOf Main
     */
    _onTapMenu(id, name) {
        console.log(id);
        this.props.navigator.push({
            name: NavigatorName.List,
            params: {
                id: id,
                name: name
            }
        })
    }


    /**
     * 发现子页面传来的 列表点击事件的监听
     * 
     * @param {any} rowData 当前列的数据
     * 
     * @memberOf Main
     */
    _onTapListItem(rowData) {
        this.props.navigator.push({
            name: NavigatorName.Content,
            params: {
                bean: rowData
            }
        })
    }


    /**
     * 底部Tab改变时的监听
     * 
     * @param {any} {i, ref}
     * 
     * @memberOf Main
     */
    _onChangeTab({i, ref}) {
        console.log('i: ' + i)
        this.setState({
            curTab: titles[i]
        });
    }

    _goToResult(result, name) {
        this.props.navigator.push({
            name: NavigatorName.Result,
            params: {
                result: result,
                name: name
            }
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ToolBar isMain={true} title={this.state.curTab} />
                <ScrollableTabView
                    renderTabBar={() => <TabBar />}
                    tabBarPosition={'bottom'}
                    onChangeTab={this._onChangeTab.bind(this)}>
                    <Menu i={0} onTapItem={this._onTapMenu.bind(this)} />
                    <List i={1} onTapListItem={this._onTapListItem.bind(this)} />
                    <Search i={2} goToResult={this._goToResult.bind(this)} />
                </ScrollableTabView>
            </View >
        );
    }
}