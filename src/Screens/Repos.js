import React, {PropTypes} from 'react';
import GetRepos from '../Containers/GetRepos';
import SharedHeader from '../Components/SharedHeader';
import {View} from 'react-native';
export default class Repos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <View style={{marginTop:30}}>
          <SharedHeader profileImage={this.props.user.avatar_url}
          username={this.props.user.login}
          name={this.props.user.name}/>
          <GetRepos username={this.props.user.login}/>
        </View>
      );
  }
}

Repos.propTypes = {
  user: PropTypes.object.isRequired,
};
