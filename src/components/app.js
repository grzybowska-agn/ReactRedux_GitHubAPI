import React, { Component } from 'react';
import AddRepo from '../containers/add_repo';
import RepoList from '../containers/repo_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <AddRepo />
        <RepoList />
      </div>
    );
  }
}
