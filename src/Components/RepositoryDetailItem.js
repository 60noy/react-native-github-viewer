import React, {PropTypes} from 'react';
import {View,Text} from 'react-native';
export const RepositoryDetailItem = (props) => {
  return (
    <View style={{paddingBottom:10,paddingTop:10}}>
      <Text style={{color:"#03A9F4",fontSize:16,marginBottom:4}}>
        {props.primary}
      </Text>
      <Text style={{fontSize:18,paddingLeft:4}}>
        Stars:
        {props.secondary}
      </Text>
      <Text style={{fontSize:18,paddingLeft:4}}>
        {props.value}
      </Text>
    </View>
  );
}

RepositoryDetailItem.propTypes = {
};
