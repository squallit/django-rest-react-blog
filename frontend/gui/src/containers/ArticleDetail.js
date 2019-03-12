import React from 'react';
import axios from 'axios';
import { Card, Button, Popconfirm, message } from 'antd';
import CustomForm from '../components/CustomForm';
import { withRouter } from 'react-router';






class ArticleDetail extends React.Component {

  state = {
    article: {}
  }

  onDeleteConfirm = (event) => {
    //event.preventDefault();
    const articleID = this.props.match.params.articleID;
    axios.delete(`http://127.0.0.1:8000/api/${articleID}/`);
    // //redirect to home
    this.props.history.push('/');

  }





  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios.get(`http://127.0.0.1:8000/api/${articleID}`)
      .then(res => {
        this.setState({
          article: res.data
        });
      })


  }


  // <form onSubmit={this.onDeleteConfirm}>
  //   <Button type="danger" htmlType="submit">Delete This Article</Button>
  // </form>


  // <Popconfirm title="Are you sure delete this article?"
  //   onConfirm={(this.state.article.id) => this.onDeleteConfirm(articleID)}
  //   onCancel={this.onDeleteCancel}
  //   okText="Yes"
  //   cancelText="No">
  // <a href="#"><Button type="danger">Delete This Article</Button></a>
  // </Popconfirm>

  render() {
    return (
      <div>
        <Card title={this.state.article.title} >
          <p>{this.state.article.content}</p>
        </Card>
        <br/>
        <center>
          <Popconfirm title="Are you sure delete this article?"
            onConfirm={this.onDeleteConfirm}
            okText="Yes"
            cancelText="No">
          <a href="#"><Button type="danger">Delete This Article</Button></a>
          </Popconfirm>
        </center>
        <br/>
        <br/>
        <h1>Update An Article</h1>
        <CustomForm requestType="put" articleID={this.props.match.params.articleID} buttonText="Update" />
      </div>
    )
  }
}


export default withRouter(ArticleDetail);
