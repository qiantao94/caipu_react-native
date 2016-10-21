/**
 * Created by  on 2016/10/21.
 */
import React, {
    Component
} from 'react'
import {
    View,
    Text
} from 'react-native'
import {
    dark_primary_color,
    default_primary_color,
    white_color
} from '../values/color.js'
import ToolBar from '../componet/ToolBar'
import {BASE_URL} from '../values/const.js'


export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '美容',
            data: [],
            title: null,
        }
    }

    componentDidMount() {
        this.setState({
            name: this.props.name
        });
        //网络请求
        fetch(BASE_URL + 'list', {
            method: 'POST',
            body: 'id=' + this.props.id + '&page=1'
        })
            .then((response)=>response.json())
            .then((responseJson)=> {
                this.setState({
                    data: responseJson.tngou,
                    title: responseJson.tngou[0].name
                });
                console.log('网络请求成功' + this.state.data[0].name);
            })
            .catch((error)=> {
                console.error('网络请求失败' + error);
            })
            .done()
    }

    _onBackPress() {
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: white_color}}>
                <ToolBar title={this.state.name} onBackPress={this._onBackPress.bind(this)}/>
                <Text>{this.state.title}</Text>
            </View>
        );
    }
}