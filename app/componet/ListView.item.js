/**
 * Created by  on 2016/10/24.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import {
    white_color,
    default_primary_color
} from '../values/color.js';
import Button from './Button'

export default class Item extends Component {
    render() {
        let {onTapListItem, img, name, keywords} = this.props;
        return (
            <Button onPress={onTapListItem}>
                <View style={styles.item}>
                    <Image style={styles.img} source={img} />
                    <View style={styles.text}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.subtitle}>{keywords}</Text>
                    </View>
                </View>
            </Button>
        )
    }

}

const styles = StyleSheet.create({
    item: {
        backgroundColor: white_color,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        height: 100,
        borderBottomWidth:1,
        borderBottomColor:'#ccc'
    },
    img: {
        width: 90,
        height: 70,
        marginLeft: 20
    },
    text: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 20
    },
    title: {
        fontSize: 18,
        color: '#000'
    },
    subtitle: {
        fontSize: 16,
        color: '#999'
    }
});