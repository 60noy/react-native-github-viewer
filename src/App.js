import React, {PropTypes} from 'react';
import {View, Text, Navigator} from 'react-native';
import Home from './Screens/Home';
import UserProfile from './Screens/UserProfile';
import Menu from './Screens/Menu';
import Repos from './Screens/Repos';
import {Header,Button,Icon} from 'native-base';
class App extends React.Component {
  constructor(){
    super()
    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route,navigator){
    if(route.name == 'HomeScreen')
      return <Home navigator={navigator} {...route.passProps}/>
    if(route.name == 'UserProfileScreen')
      return <UserProfile navigator={navigator} {...route.passProps}/>
    if(route.name == 'MenuScreen')
      return <Menu navigator={navigator} {...route.passProps}/>
    if(route.name == 'ReposScreen')
      return <Repos navigator={navigator} {...route.passProps}/>
  }
  render() {
    return (
      <Navigator
      initialRoute={{name:'HomeScreen'}}
      renderScene={this.renderScene}
      navigationBar={
        <Navigator.NavigationBar
          routeMapper={{
            LeftButton: (route,navigator,index,navState) =>
            <Button onPress={() => navigator.pop()}><Icon name='ios-arrow-back'/></Button>,
            RightButton: (route,navigator,index,navState) =>
            <View><Text>right</Text></View>,
            Title: (route,navigator,index,navState) =>
            <View><Text>{route.name}</Text></View>,
          }}
        />
      }
    />
    );
  }
}







export default App;
