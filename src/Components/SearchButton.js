import React, {PropTypes} from 'react';
import {Button,Text} from 'react-native';

const SearchButton = ({onPress,title}) => {
  return (
    <Button
    onPress={onPress}
    title={title}
    />
  );
}

SearchButton.PropTypes={
  title : PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default SearchButton;
