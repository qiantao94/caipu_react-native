/**
 * Created by  on 2016/10/21.
 */
import React, { Component } from 'react';
import {
    View,
    Navigator,
    BackAndroid,
    Platform,
    StatusBar,
} from 'react-native';
import {
    dark_primary_color
} from './app/values/color.js'
import Main from './app/page/main/main.js'
import List from './app/page/list.js'
import Content from './app/page/content.js' 
import Result from './app/page/result.js' 
import { NavigatorName } from './app/values/const.js'

export default class App extends Component {

    _configureScene() {
        return Navigator.SceneConfigs.PushFromRight;
    }

    _renderScene(router, navigator) {
        let Component = null;
        this._navigator = navigator;
        switch (router.name) {
            case NavigatorName.Main:
                Component = Main;
                break;
            case NavigatorName.List:
                Component = List;
                break;
            case NavigatorName.Content:
                Component = Content;
                break;
            case NavigatorName.Result:
                Component = Result;
                break;
            default:
                Component = Main;
        }
        return <Component {...router.params} navigator={navigator} />
    }

    componentDidMount() {
        if (Platform.OS === 'android') {
            var navigator = this._navigator;
            BackAndroid.addEventListener('hardwareBackPress', function () {
                if (navigator && navigator.getCurrentRoutes().length > 1) {
                    navigator.pop();
                    return true;
                }
                return false;
            });
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress');
        }
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor={dark_primary_color} />
                <Navigator
                    initialRoute={{ name: NavigatorName.Main }}
                    configureScene={this._configureScene}
                    renderScene={this._renderScene.bind(this)}
                    />
            </View>
        );
    }
}