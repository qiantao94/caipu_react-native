/**
 * Created by  on 2016/10/21.
 * 菜单列表页、发现页面共用
 * 根据Navigator传递的过来的id是否为空判断
 */
import React, {
    Component
} from 'react'
import {
    View,
    Text,
    ListView,
    InteractionManager
} from 'react-native'
import {
    dark_primary_color,
    default_primary_color,
    white_color
} from '../values/color.js'
import ToolBar from '../componet/ToolBar'
import Item from '../componet/ListView.Item'
import { BASE_URL, IMG_HEAD, NavigatorName } from '../values/const.js'
/**
 * 请求页数
 */
let page;

/**
 * 请求到数据
 */
let data;

/**
 * 菜单分类下的总数据
 */
let total;

/**
 * 已请求的数据
 */
let fetchedTotal;

export default class List extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds,//列表数据
            isLoading: false,//是否正在请求网络数据
        }
    }

    componentDidMount() {
        //数据初始化
        page = 1;
        data = [];
        total = 0;
        fetchedTotal = 0;
        //配合Navigator使用，解决真机上跳转页面的卡顿
        InteractionManager.runAfterInteractions(() => {
            this._fetchData(this.props.id, page);
        });
    }

    /**
     * 请求网络数据
     * @param {any} id  菜单分类的id
     * @param {any} page    请求页数
     * 
     * @memberOf List
     */
    _fetchData(id, page) {
        if (this.state.isLoading) return;
        this.setState({
            isLoading: true
        });
        fetch(BASE_URL + 'list?id=' + id + '&page=' + page)
            .then((response) => response.json())
            .then((responseJson) => {
                for (let i in responseJson.tngou) {
                    data.push(responseJson.tngou[i]);
                }
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(data),
                });
                total = responseJson.total;
                fetchedTotal = data.length;
                console.log('网络请求成功');
            })
            .catch((error) => {
                console.error('网络请求失败' + error);
                if (page > 1) {
                    page--;
                } else {
                    page = 1;
                }
            })
            .done(() => {
                this.setState({
                    isLoading: false
                })
            })
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
     * ListView的点击事件 如果是<Main/>界面下的子页面，则传递
     * @param {any} rowData 行数据
     * 
     * @memberOf List
     */
    _onTapListItem(rowData) {
        if (this.props.id != null) {
            this.props.navigator.push({
                name: NavigatorName.Content,
                params: {
                    bean: rowData
                }
            })
        } else {
            this.props.onTapListItem(rowData)
        }
    }

    /**
     * ListView滚动到底部的监听事件
     * 
     * @memberOf List
     */
    _onEndReached() {
        if (fetchedTotal < total) {
            //已请求的数据小于总数据
            //继续请求数据
            this._fetchData(this.props.id, ++page)
        }
    }

    /**
     * 标题栏返回键点击事件
     * @memberOf List
     */
    _onBackPress() {
        this.props.navigator.pop();
    }

    render() {
        //根据不同界面决定是否需要ToolBar
        let title = this.props.id ?
            <ToolBar title={this.props.name} onBackPress={this._onBackPress.bind(this)} />
            : null
        return (
            <View style={{ flex: 1, backgroundColor: white_color, flexDirection: 'column' }}>
                {title}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    onEndReached={this._onEndReached.bind(this)}
                    onEndReachedThreshold={10} />
            </View>
        );
    }
}
