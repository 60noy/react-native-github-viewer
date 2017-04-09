import React, {PropTypes} from 'react';
import {View,Image} from 'react-native';
import {Text,Thumbnail} from 'native-base';

 const SharedHeader = (props) => {
  return (
    <View style={{backgroundColor:'#03A9F4',flexDirection:'column',
    alignItems:'center', marginTop:20}}>
      <Thumbnail style={{marginTop:14}} large source={{uri: props.profileImage}}/>
      <Text style={{fontSize:24, color:'#fff',marginTop:10}}>
        {props.name}
      </Text>
      <Text style={{fontSize:18,color:'#fff',paddingBottom:10}}>
        {props.username}
      </Text>
    </View>
  );
}


SharedHeader.propTypes = {
  profileImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default SharedHeader;
