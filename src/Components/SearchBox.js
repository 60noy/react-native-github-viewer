import React, {PropTypes} from 'react';
import {TextInput} from 'react-native';

const SearchBox = ({onChange}) => {
  return (
    <TextInput
      onChangeText={onChange}
      />
);
}


export default SearchBox;
