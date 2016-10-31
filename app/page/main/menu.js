/**
 * Created by  on 2016/10/20.
 * 菜单分类次页面
 */
import React, { Component } from 'react'
import Button from '../../componet/Button'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ListView
} from 'react-native'
import { white_color } from '../../values/color'
/**
 * 菜单分类名称
 */
let type_name = ["美容", "减肥", "保健养生", "人群", "时节", "餐时", "器官", "调养",
    "肠胃消化", "孕产哺乳", "经期", "女性疾病", "男性", "呼吸道", "血管",
    "心脏", "肝胆脾胰", "神经系统", "口腔", "肌肉骨骼", "其他"];

/**
 * 菜单分类id
 */
let type_id = [1, 10, 15, 52, 62, 68, 75, 82, 98, 112, 147, 161, 218, 166, 182,
    188, 192, 197, 202, 205, 212];

/**
 * 菜单分类的图片地址
 */
let type_img = [
    require('../../img/meirong.png'),
    require('../../img/jianfei.png'),
    require('../../img/jiankangyangsheng.png'),
    require('../../img/renqun.png'),
    require('../../img/shijie.png'),
    require('../../img/canshi.png'),
    require('../../img/qiguan.png'),
    require('../../img/tiaoyang.png'),
    require('../../img/chagnweixiaohua.png'),
    require('../../img/yunchanpuru.png'),
    require('../../img/jingqi.png'),
    require('../../img/nvxingjibing.png'),
    require('../../img/nanxing.png'),
    require('../../img/huxidao.png'),
    require('../../img/xueguan.png'),
    require('../../img/xinzang.png'),
    require('../../img/gandanpiy.png'),
    require('../../img/shenjingxitong.png'),
    require('../../img/kouqiang.png'),
    require('../../img/jirouguge.png'),
    require('../../img/qita.png'),
];

export default class Menu extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(type_name),
        }
    }

    /**
     * 列表点击事件监听 传递到<Main/>界面
     * 
     * @param {any} id 菜单分类的id
     * @param {any} name 菜单分类的名称
     * 
     * @memberOf Menu
     */
    _onTapItem(id, name) {
        this.props.onTapItem(id, name)
    }

    /**
     * 列表行渲染
     * 
     * @param {any} rowData 列数据
     * @param {any} sectionID section的ID
     * @param {any} rowID   列ID
     * @returns
     * 
     * @memberOf Menu
     */
    _renderRow(rowData, sectionID, rowID) {
        return (
            <Button onPress={this._onTapItem.bind(this, type_id[rowID], type_name[rowID])}>
                <View style={styles.item}>
                    <Image source={type_img[rowID]} style={styles.img} />
                    <Text style={styles.text}>{rowData}</Text>
                </View>
            </Button>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: white_color }}>
                <ListView
                    style={{ flex: 1 }}
                    initialListSize={type_name.length}
                    contentContainerStyle={styles.list_container}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list_container: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100
    },
    img: {
        width: 40,
        height: 40,
        marginTop: 7
    },
    text: {
        marginTop: 5
    }
});