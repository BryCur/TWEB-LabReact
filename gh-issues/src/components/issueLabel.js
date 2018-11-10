import React from 'react';

class IssueLabel extends React.Component {
    render(){
        return(
            <div class="issue-label" style={{backgroundColor: this.props.color}} >{this.props.text}</div>
        );
    }
}

export default IssueLabel;