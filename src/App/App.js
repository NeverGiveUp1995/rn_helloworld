/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, View, WebView} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <WebView
                    source={{uri: 'http://192.168.3.59:6334/webAPP-echarts/pages/index.html?_ijt=ffhc6lk9780vgro4qesvmpudm9'}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f9f9f9',
    },
});
