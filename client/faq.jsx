import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button'

class Faqs extends React.Component{
  render() {
    return (
      <Button variant="contained" color="primary">
        Ask Away
      </Button>
    );
  }
}

ReactDOM.render(<Faqs/>,document.getElementById('root'))