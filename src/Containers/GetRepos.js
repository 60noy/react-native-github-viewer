import React, {PropTypes} from 'react';
import ReposDetailList from '../Components/ReposDetailList';
import {View} from 'react-native';
export default class GetRepos extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      error: '',
      repos: []
    }
    this.handleError = this.handleError.bind(this);
    this.fetchRepos = this.fetchRepos.bind(this);
    this.handleRepos = this.handleRepos.bind(this);
    this.fetchRepos(this.props.username)

  }

  fetchRepos(username){
    fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => response.json())
    .then(value=> {this.setState({repos: value})})
    .catch((err) => {this.handleError(err)})

  }

  handleRepos(value){
    console.log('val',value)
  }

  componentWillMount(){
  }

  handleError(error){
    this.setState({error: error})
    alert(error)
  }

  render() {
    let repos = this.state.repos
    console.log(' render repos',repos);
    return (

    repos && <ReposDetailList repos={repos}/>


  );
}
}


GetRepos.propTypes = {
  username: PropTypes.string.isRequired,
};
