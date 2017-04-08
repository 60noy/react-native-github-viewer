import React, {PropTypes} from 'react';
import {TextInput} from 'react-native';
import {InputGroup,Input} from 'native-base';
const SearchBox = ({onChange}) => {
  return (
    <InputGroup rounded bordered
      onChangeText={onChange}
      borderColor="#fff"
      borderWidth={1}
      >
        <Input style={{color:'white'}} placeholder="Enter Github Username" placeholderTextColor="#fff"/>
      </InputGroup>
);
}


export default SearchBox;
