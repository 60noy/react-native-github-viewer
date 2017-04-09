import React, {PropTypes} from 'react';
import {View, Text, Navigator} from 'react-native';
import Home from './Screens/Home';
import UserProfile from './Screens/UserProfile';
import Menu from './Screens/Menu';
import Repos from './Screens/Repos';
import Notes from './Screens/Notes';
import {Header,Button,Icon,Left,Right,Body,Title} from 'native-base';
class App extends React.Component {
  constructor(){
    super()
    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route,navigator){
    if(route.name == 'HomeScreen')
      return <Home   navigator={navigator} {...route.passProps}/>
    if(route.name == 'UserProfileScreen')
      return <UserProfile  navigator={navigator} {...route.passProps}/>
    if(route.name == 'MenuScreen')
      return <Menu navigator={navigator} {...route.passProps}/>
    if(route.name == 'ReposScreen')
      return <Repos navigator={navigator} {...route.passProps}/>
    if(route.name == 'NotesScreen')
      return <Notes navigator={navigator} {...route.passProps}/>
  }

  render() {
    return (
      <Navigator
      initialRoute={{name:'HomeScreen'}}
      renderScene={this.renderScene}
      navigationBar={
        <Navigator.NavigationBar
          style={{flexDirection: 'column-reverse'}}
          routeMapper={{
            LeftButton: (route,navigator,index,navState) =>
            index >= 1 &&
            <Button transparent onPress={() => navigator.pop()}><Icon style={{color:'#212121'}} name='arrow-back'/></Button>,
            RightButton: (route,navigator,index,navState) =>
            <View></View>,
            Title: (route,navigator,index,navState) =>(
            <View style={{flex:1,justifyContent:'center'}}>
              <Title style={{color:'#000',fontSize:20,paddingBottom:10}}>
                {route.name == 'HomeScreen' ? 'Home' :
                route.passProps.title}
              </Title>
            </View>),
          }}
        />
      }
    />
    );
  }
}







export default App;
