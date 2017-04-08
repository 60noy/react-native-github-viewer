import React, {PropTypes} from 'react';
import {Button,Text} from 'native-base';

const SearchButton = ({onPress,title}) => {
  return (
    <Button
      rounded
    onPress={onPress}
    style={{alignSelf: 'center', marginTop:10,backgroundColor: '#ecf0f1'}}
    >
    <Text style={{color:"#34495e"}}>
      FIND USER
    </Text>

  </Button>
  );
}

SearchButton.PropTypes={
  title : PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default SearchButton;
