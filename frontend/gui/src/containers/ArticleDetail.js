import React from 'react';
import axios from 'axios';
import { Card, Button, Popconfirm, message } from 'antd';
import AuthRequest from '../components/AuthRequest';
import CustomForm from '../components/CustomForm';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';






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
      if (this.props.token) {

        axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${this.props.token}`
        };

        // Retrieve all articles
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
          .then(res => {
            this.setState({
              article: res.data
            });
          })

      }
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
      //Prompt a request to login or signup screen if not logged in
      if (this.props.token) {
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
      } else {
        return (
          <AuthRequest />
        )
      }
  }


}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
  }
}


export default connect(mapStateToProps)(ArticleDetail);


//export default withRouter(ArticleDetail);
