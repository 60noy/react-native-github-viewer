import React, {PropTypes} from 'react';
import {Text,Button,View} from 'react-native';

 const GotoButton = ({title,onPress}) => {
  return (
    <View style={{marginTop:50}}>
      <Button title={title} onPress={onPress}/>
    </View>
  );
}

GotoButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default GotoButton;
