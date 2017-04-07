import React, {PropTypes} from 'react';
import {View,Text,ListView} from 'react-native';
import DetailItem from './DetailItem';
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class DetailList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <ListView renderRow={(rowData) => <Text>{rowData}</Text>}
          dataSource={ds.cloneWithRows([
            'noy','lol','huh','noy','lol','huh','noy','lol','huh'
        ])}/>
        {
          Object.keys(this.props.user).filter(a => a !== null).map((item) => {
            return <DetailItem
              primary={item}
              text={this.props.user[item]}
              key={item}/>
          })
        }

      </View>
    );
  }
}

DetailList.propTypes = {
  user : PropTypes.object.isRequired,
};
