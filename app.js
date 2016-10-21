/**
 * Created by  on 2016/10/21.
 */
import React, {Component} from 'react';
import {
    Navigator,
    BackAndroid,
    Platform,
} from 'react-native';
import Main from './app/page/main/main.js'
import List from './app/page/list.js'
import {NavigatorName} from './app/values/const.js'

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
            default:
                Component = Main;
        }
        return <Component {...router.params} navigator={navigator}/>
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
            <Navigator
                initialRoute={{name: NavigatorName.Main}}
                configureScene={this._configureScene}
                renderScene={this._renderScene.bind(this)}
            />
        );
    }
}