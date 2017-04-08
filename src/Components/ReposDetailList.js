import React, {PropTypes} from 'react';
import {View,Text,ListView} from 'react-native';
import ReposDetailItem from './ReposDetailItem';
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class ReposDetailList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let repos = this.props.repos
    console.log('repos log',repos);
    return (
      <View>
        <ListView
          renderRow={(rowData) =>{
            !!rowData
            return (<ReposDetailItem
              primary={"prip"}
              secondary={"rowData.stargazers_count"}
              text={"rowData.description"}
            />)
            }
          }
          dataSource={ds.cloneWithRows(repos)}
        />
      </View>
    );
  }
}

ReposDetailList.propTypes = {
  repos: PropTypes.array.isRequired,
  secondary: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};
