import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  NetInfo
} from 'react-native';
import { WebBrowser } from 'expo';


import { MonoText } from '../components/StyledText';
import {WebView} from 'react-native';
import { createStackNavigator, createAppContainer, withNavigation  } from 'react-navigation';
// import  { StackNavigator } from "react-navigation";


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {isConnected:null};
  componentDidMount(){
    NetInfo.isConnected.addEventListener('connectionChange', this._handleConnectivityChange);
    NetInfo.isConnected.fetch().done((isConnected) => {this.setState({isConnected});});
  }
 componentWillMount(){

      NetInfo. isConnected.removeEventListener('connectionChange', this._handleConnectivityChange);

  }

  _handleConnectivityChange = (isConnected)=>{
    this.setState({isConnected,})
  }

  _onNavigationStateChange(webViewState){
  console.log(webViewState);
}

  render() {

     let jsCode = 'alert(document.documentElement.innerHTML)';

    return (
      
      <View style = {{flex:1}}>
        <WebView 
          automaticallyAdjustContentInsets={false}
          source={{uri:'https://www.google.com/maps'}}
          injectedJavaScript = {jsCode}
          // onNavigationStateChange={this._onNavigationStateChange.bind({jscode})}
          javaScriptEnabled = {true}
          domStorageEnabled = {true}
          startInLoadingState={false}
          // onLoad = {()=>alert(onNavigationStateChange)}

        />
        </View>
      
    );
  }
}






