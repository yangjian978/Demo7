/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

export default class Demo7 extends Component {
  render() {
    return <ScrollableTabView
      style={{marginTop: 20, }}
      renderTabBar={() => <DefaultTabBar />}
    >
      <Text tabLabel='Tab #1'>My</Text>
      <Text tabLabel='Tab #2'>favorite</Text>
      <Text tabLabel='Tab #3'>project</Text>
      <Text tabLabel='Tab #4'>one</Text>
    </ScrollableTabView>;
    
  }
}

AppRegistry.registerComponent('Demo7', () => Demo7);
