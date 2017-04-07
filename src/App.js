import React, {PropTypes} from 'react';
import {View, Text, Navigator, Button} from 'react-native';
import Home from './Screens/Home';
import UserProfile from './Screens/UserProfile';
import Menu from './Screens/Menu';

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
  }
  render() {
    return (
      <Navigator
      initialRoute={{name:'HomeScreen'}}
      renderScene={this.renderScene}
      sceneStyle={{paddingTop: 64}}
      navigationBar={
        <Navigator.NavigationBar
          routeMapper={{
            LeftButton: (route,navigator,index,navState) =>
            <View><Text>Back</Text></View>,
            RightButton: (route,navigator,index,navState) =>
            <View><Text>right</Text></View>,
            Title: (route,navigator,index,navState) =>
            <View><Text>{route.name}</Text></View>,
          }}
          style={{backgroundColor: 'gray'}}
        />
      }
    />
    );
  }
}







export default App;
