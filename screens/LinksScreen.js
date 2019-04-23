import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import {View, WebView} from 'react-native';
// import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
   return (
      
      <View style = {{flex:1}}>
        <WebView 
          automaticallyAdjustContentInsets={false}
          source={{uri:'https://www.google.com/'}}
          javaScriptEnabled={true}
          demoStorageEnabled={true}
          startInLoadingState={true}

        />
        </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
