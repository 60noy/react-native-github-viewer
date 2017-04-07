import React, {PropTypes} from 'react';
import {View,Text} from 'react-native';
const DetailItem = (props) => {
  return (
    <View style={{paddingBottom:10,paddingTop:10}}>
      <Text style={{color:"#4a7bbb"}}>
        {props.primary}
      </Text>
      <Text>
        {props.secondary}
      </Text>
      <Text>
        {props.text}
      </Text>
    </View>
  );
}

DetailItem.propTypes = {
  primary: PropTypes.string.isRequired,
};

export default DetailItem;
