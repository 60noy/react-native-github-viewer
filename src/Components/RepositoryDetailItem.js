import React, {PropTypes} from 'react';
import {View,Text} from 'react-native';
export const RepositoryDetailItem = (props) => {
  return (
    <View>
      <Text>
        {props.primary}
      </Text>
      <Text>
        {props.secondary}
      </Text>
      <Text>
        {props.value}
      </Text>
    </View>
  );
}

RepositoryDetailItem.propTypes = {
};
