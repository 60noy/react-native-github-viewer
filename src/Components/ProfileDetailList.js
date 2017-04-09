import React, {PropTypes} from 'react';
import {View,Text,ListView} from 'react-native';
import ProfileDetailItem from './ProfileDetailItem';
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class ProfileDetailList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let arr = Object.entries(this.props.user)
    return (
      <View style={{paddingLeft:14}}>
        <ListView
          renderRow={(rowData) =>
            !!rowData[1] &&
            <ProfileDetailItem
              primary={rowData[0]}
              text={rowData[1]}
            />
            }
          dataSource={ds.cloneWithRows(arr)}
        />
      </View>
    );
  }
}

ProfileDetailList.propTypes = {
  user : PropTypes.object.isRequired,
};
