import React, {PropTypes} from 'react';
import {View,Text} from 'react-native';
const ReposDetailItem = (props) => {
  return (
    <View style={{paddingBottom:10,paddingTop:10}}>
      <Text style={{color:"#4a7bbb"}}>
        {props.primary}
      </Text>
      <Text>
        stars
        {props.secondary}
      </Text>
      <Text>
        {props.text}
      </Text>
    </View>
  );
}

ReposDetailItem.propTypes = {
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
  secondary: PropTypes.number.isRequired,
};

export default ReposDetailItem;
