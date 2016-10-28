/**
 * Created by  on 2016/10/25.
 */
import React, {
    Component
} from 'react'
import {
    View,
    Text,
    Image,
    ScrollView,
    StatusBar,
    WebView,
    InteractionManager,
    StyleSheet
} from 'react-native'
import {
    dark_primary_color,
    default_primary_color,
    white_color,
    accent_color,
    secondary_text_color
} from '../values/color.js'
import ToolBar from '../componet/ToolBar'
import { BASE_URL, IMG_HEAD } from '../values/const.js'

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            fetch(BASE_URL + 'show?id=' + this.props.bean.id)
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        message: this.htmlEncode(responseJson.message)
                    });
                })
                .done();
        })
    }

    /**
    * 标题栏返回键点击事件
    * @memberOf List
    */
    _onBackPress() {
        this.props.navigator.pop();
    }

    htmlEncode(str) {
        if (str.length == 0) return "";
        str = str.replace(/<h2>/, '');
        str = str.replace(/<h2>/g, '\n\n\n');
        str = str.replace(/<p>/g, '\n');
        str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
        str = str.replace(/&nbsp;/g, '');
        str = str.replace('材料', '材料：');
        str = str.replace('菜谱简介', '菜谱简介：');
        str = str.replace('做法', '做法：');
        str = str.replace('小诀窍', '小诀窍：');

        str.value = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白

        return str;
    }

    render() {
        return (
            <View style={styles.main}>
                <StatusBar backgroundColor={default_primary_color} />
                <ToolBar title={this.props.bean.name} onBackPress={this._onBackPress.bind(this)} />
                <View style={styles.head}>
                    <Image style={styles.img} source={{ uri: IMG_HEAD + this.props.bean.img }} />
                </View>
                <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
                    <Text style={styles.title_keyword}>关键词</Text>
                    <Text style={styles.keywords}>{this.props.bean.keywords}</Text>
                    <View style={styles.line} />
                    <Text style={styles.title_detail}>详情</Text>
                    <Text style={styles.detail} >{this.state.message}</Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: white_color
    },
    head: {
        height: 170,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: default_primary_color
    },
    img: {
        width: 200,
        height: 150
    },
    scrollview: {
        flex: 1,
        flexDirection: 'column',
    },
    title_keyword: {
        fontSize: 25,
        fontWeight: 'bold',
        color: accent_color,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    keywords: {
        fontSize: 20,
        marginTop: 10,
        color: secondary_text_color,
        marginLeft: 20,
        marginRight: 20
    },
    line: {
        flex: 1,
        height: 1,
        marginTop: 5,
        backgroundColor: '#757575',
        marginLeft: 20,
        marginRight: 20
    },
    title_detail: {
        fontSize: 25,
        color: accent_color,
        marginTop: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        marginRight: 20
    },
    detail: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        fontSize: 18
    }
})