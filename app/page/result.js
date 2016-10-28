/**
 * Created by  on 2016/10/27.
 * 搜索结果页面 
 */
import React, {
    Component
} from 'react'
import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    ListView
} from 'react-native'
import Button from '../componet/Button.js'
import ToolBar from '../componet/ToolBar.js'
import { default_primary_color, white_color } from '../values/color.js'
import { BASE_URL, IMG_HEAD, NavigatorName } from '../values/const.js'
import Item from '../componet/ListView.Item.js'

export default class Result extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(this.props.result),//列表数据
        }
    }

    /**
     * 标题栏返回键点击事件
     * @memberOf List
     */
    _onBackPress() {
        this.props.navigator.pop();
    }

    /**
     * ListView渲染列
     * @param {any} rowData 列数据
     * @param {any} sectionID section的id 
     * @param {any} rowID 列id
     * @returns
     * 
     * @memberOf List
     */
    _renderRow(rowData, sectionID, rowID) {
        return (
            <Item
                onTapListItem={this._onTapListItem.bind(this, rowData)}
                img={{ uri: IMG_HEAD + rowData.img }}
                name={rowData.name}
                keywords={rowData.keywords} />
        )
    }

    /**
     * ListView的点击事件
     * @param {any} id 菜谱id
     * @param {any} name 菜谱名称
     * @param {any} img 菜谱图片地址
     * 
     * @memberOf List
     */
    _onTapListItem(rowData) {
        this.props.navigator.push({
            name: NavigatorName.Content,
            params: {
                bean: rowData
            }
        })

    }
 
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: white_color, flexDirection: 'column' }}>
                <ToolBar title={this.props.name} onBackPress={this._onBackPress.bind(this)} />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)} />
            </View>
        );
    }
}