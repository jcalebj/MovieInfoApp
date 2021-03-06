'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} from 'react-native';

var SearchPage = require('./SearchPage');

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class MovieInfoApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Movie Finder',
          component: SearchPage,
        }}/>
    );
  }
}

AppRegistry.registerComponent('MovieInfoApp', function() { return MovieInfoApp });