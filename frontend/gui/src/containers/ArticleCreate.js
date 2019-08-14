import React from 'react';
import CreateUpdateForm from './CreateUpdateForm';
//import axios from 'axios';

class ArticleCreate extends React.Component {


  render() {
    return (
      <div>
        <h1>Create An Article</h1>
        <CreateUpdateForm requestType="post" articleID={null} buttonText="Create" />
      </div>
    )
  }
}


export default ArticleCreate;
