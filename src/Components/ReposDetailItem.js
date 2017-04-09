import React, {PropTypes} from 'react';
import {View,Text} from 'react-native';
const ReposDetailItem = (props) => {
  return (
      <View style={{paddingBottom:10,paddingTop:10}}>
        <Text style={{color:"#03A9F4",fontSize:18,marginBottom:4}}>
          {props.primary}
        </Text>
        <Text style={{fontSize:16,paddingLeft:4}}>
          Stars: {props.secondary}
        </Text>
        <Text style={{fontSize:16,paddingLeft:4, color:"#414141"}}>
          {props.text}
        </Text>
      </View>
    );
}

ReposDetailItem.propTypes = {
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
  text: PropTypes.number.isRequired,
};

export default ReposDetailItem;
