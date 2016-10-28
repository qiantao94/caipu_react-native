/**
 * Created by  on 2016/10/21.
 * 搜索子界面
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
    Modal,
    ProgressBarAndroid
} from 'react-native'
import Button from '../../componet/Button.js'
import { default_primary_color } from '../../values/color.js'
import { BASE_URL, NavigatorName } from '../../values/const.js'
import dismissKeyboard from 'dismissKeyboard'

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            result: [],
            fetchNull: false,
            modalVisible: false
        }
    }

    _onSearchPress() {
        dismissKeyboard();
        if (this.state.text == '' || this.state.text == null) return;
        this.setState({
            fetchNull: false,
            modalVisible: true
        });
        fetch(BASE_URL + 'name?name=' + this.state.text)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('fetch success');
                this.setState({
                    result: responseJson.tngou
                });
                console.log('result length: ' + this.state.result.length);
                //判断是否有搜索结果
                if (this.state.result.length == 0) {
                    //显示提示
                    this.setState({
                        fetchNull: true
                    });
                } else {
                    //跳转到结果页面
                    this.props.goToResult(this.state.result, this.state.text);
                }
            })
            .catch((error) => {
                console.error('fetch fail' + error);
            })
            .done(() => {
                this.setState({
                    modalVisible: false
                });
            })
    }

    render() {
        let tip = this.state.fetchNull ? <Text style={styles.tip}>{'没有搜索结果，搜索红烧肉试试？'}</Text> : null
        return (
            <View style={styles.main}>
                <View style={styles.search_view}>
                    <TextInput style={styles.input} placeholder={'输入菜名或食材'} placeholderTextColor={'#999999'}
                        onChangeText={(text) => this.setState({ text: text })}
                        underlineColorAndroid={'transparent'} />
                    <Button onPress={this._onSearchPress.bind(this)}>
                        <View style={styles.button_view}>
                            <Image style={styles.image} source={require('../../img/search_search.png')} />
                        </View>
                    </Button>
                </View>
                {tip}
                <Modal
                    animationType={'fade'}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { } }>
                    <View style={styles.modal}>
                        <View style={styles.inner}>
                            <ProgressBarAndroid indeterminate={false}  color={default_primary_color} style={styles.progressbar} />
                            <Text style={styles.modal_text}>{'正在搜索: ' + this.state.text}</Text>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        flex: 1
    },
    search_view: {
        flexDirection: 'row',
        height: 40,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: default_primary_color,
        borderRadius: 3
    },
    input: {
        flex: 1,
    },
    button_view: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 30,
        height: 30
    },
    tip: {
        marginLeft: 16
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1
    },
    inner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        borderRadius: 3,
        backgroundColor: '#fff'
    },
    progressbar: {
        marginLeft: 30,
    },
    modal_text: {
        fontSize: 15,
        marginLeft: 20,
        marginRight: 30
    }
})