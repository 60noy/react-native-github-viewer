import React, {PropTypes} from 'react';

export default class NavigationButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  navigate(route,screen){
    this.props.navigator.push({name:screen, passProps: this.props.passProps})
  }

  render() {
    return (
      <View>
        <GotoButton title="View Profile" onPress={this.navigate('ViewProfileScreen')}/>
      </View>
    );
  }
}

NavigationButtons.propTypes = {
};
