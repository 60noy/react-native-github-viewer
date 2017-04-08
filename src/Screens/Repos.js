import React, {PropTypes} from 'react';
import GetRepos from '../Containers/GetRepos';
import {View} from 'react-native';
export default class Repos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <View>
          <GetRepos username={this.props.user.login}/>
        </View>
      );
  }
}

Repos.propTypes = {
  user: PropTypes.object.isRequired,
};
