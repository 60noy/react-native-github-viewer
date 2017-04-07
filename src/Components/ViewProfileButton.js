import React, {PropTypes} from 'react';

export default class ViewProfileButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
      <View>
        <GotoButton title="View Profile" onPress={this.props.onPress}/>
      </View>);
  }
}

ViewProfileButton.propTypes = {
};
