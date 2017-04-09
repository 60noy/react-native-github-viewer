import SearchBox from '../Components/SearchBox';
import SearchButton from '../Components/SearchButton';
import React, {PropTypes} from 'react';
import {Text,View} from 'react-native';
import {Container,InputGroup} from 'native-base';

export default class Search extends React.Component {
  constructor(){
    super();
    this.state ={
      name: '',
      tempValue: {
  "login": "60noy",
  "id": 11259340,
  "avatar_url": "https://avatars2.githubusercontent.com/u/11259340?v=3",
  "gravatar_id": "",
  "url": "https://api.github.com/users/60noy",
  "html_url": "https://github.com/60noy",
  "followers_url": "https://api.github.com/users/60noy/followers",
  "following_url": "https://api.github.com/users/60noy/following{/other_user}",
  "gists_url": "https://api.github.com/users/60noy/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/60noy/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/60noy/subscriptions",
  "organizations_url": "https://api.github.com/users/60noy/orgs",
  "repos_url": "https://api.github.com/users/60noy/repos",
  "events_url": "https://api.github.com/users/60noy/events{/privacy}",
  "received_events_url": "https://api.github.com/users/60noy/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Noy Pearl",
  "company": null,
  "blog": null,
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Hey. I enjoy learning new things every day.",
  "public_repos": 20,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2015-03-01T18:15:21Z",
  "updated_at": "2017-03-30T17:46:38Z"
}
    }

    this.searchUser = this.searchUser.bind(this);
  }

  searchUser(){
    this.props.navigateToUserPage(this.state.tempValue)
    // fetch(`https://api.github.com/users/${this.state.name}`)
    // .then(response => response.json())
    // .then((value) =>{
    //  (value.message === 'Not Found' ? this.props.showError('No such user') :
    //   this.props.navigateToUserPage(value) )})
    // .catch(error => alert(error))

  }

  handleTextChange(name){
    this.setState({name})
  }
  render() {
    return (
      <View style={{alignItems:'center',marginLeft:20,marginRight:20}}>
        <SearchBox onChange={this.handleTextChange.bind(this)}/>
        <SearchButton onPress={this.searchUser}/>
      </View>
    );
  }
}
