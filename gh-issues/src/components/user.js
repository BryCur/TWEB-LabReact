import React, { Component } from 'react';

export default class User extends Component {
  render() {
    return (
      <div className="user">
        <img src={this.props.avatarURL} alt="avatar"></img> {this.props.username}
      </div>
    )
  }
}
