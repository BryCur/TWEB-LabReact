import React from 'react';
import Button from '@material-ui/core/Button';

class AddIssue extends React.Component{
    render(){
        return(
            <Button variant="fab" color="primary" aria-label="Add" style={{'font-size':'2em'}}>
                +
            </Button>
        );
    }
}

export default AddIssue;