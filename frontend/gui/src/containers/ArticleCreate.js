import React from 'react';
import CustomForm from '../components/CustomForm';
//import axios from 'axios';

class ArticleCreate extends React.Component {


  render() {
    return (
      <div>
        <h1>Create An Article</h1>
        <CustomForm requestType="post" articleID={null} buttonText="Create" />
      </div>
    )
  }
}


export default ArticleCreate;
