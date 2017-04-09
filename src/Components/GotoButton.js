import React, {PropTypes} from 'react';
import {View} from 'react-native';
import {Text,Button} from 'native-base';

 const GotoButton = (props) => {
  return (
      <Button {...props} large onPress={props.onPress}>
        <Text>{props.title}</Text>
      </Button>
  );
}

GotoButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default GotoButton;
