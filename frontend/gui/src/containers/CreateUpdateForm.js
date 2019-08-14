import React from 'react';
import axios from 'axios';
import {fetchArticles, unfetchArticles} from '../store/actions/articleActions';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { withRouter } from 'react-router';
import {
  Form, Input, Button, Radio,
} from 'antd';

class CreateUpdateForm extends React.Component {

  //Request data update after Create or Update a New Article
  requestUpdate = () => {
    if (this.props.token) {

      axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${this.props.token}`
      };

      // Retrieve all articles
      this.props.fetchArticles();

    } else {
      this.props.unfetchArticles();
    }
  }


  onFormSubmit = (event, requestType, articleID) => {

    //prevent page from rel{}
    event.preventDefault();
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;

    switch(requestType) {
      case 'post':
        axios.post('http://127.0.0.1:8000/api/', {
          title : title, content : content
        })
        .then(res => {
          console.log(res);
          //request an update to retrieve new data
          this.requestUpdate();
          //redirect to home
          this.props.history.push('/');

        })
        .catch(err => console.error(err));
        break;
      case 'put':
          axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
            title : title, content : content
          })
          .then(res => {
            console.log(res);
            //request an update to retrieve new data
            this.requestUpdate();
            //redirect to home
            this.props.history.push('/');

          })
          .catch(err => console.error(err));
          break;
      default:
        break;
    }

  }



  render() {

    const { formLayout } = {formLayout: 'horizontal'};

    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    };

    const buttonItemLayout = {
      wrapperCol: { span: 14, offset: 4 },
    };

    return (
      <div>
        <Form onSubmit={(event) => this.onFormSubmit(event, this.props.requestType, this.props.articleID)} layout={formLayout}>
          <Form.Item
            label="Title"
            {...formItemLayout}
          >
            <Input name="title" placeholder="Input a title..." />
          </Form.Item>
          <Form.Item
            label="Content"
            {...formItemLayout}
          >
            <Input name="content" placeholder="Input some content..." />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary" htmlType="submit">{this.props.buttonText}</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    articles: state.articles
  }
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators({ fetchArticles, unfetchArticles }, dispatch);
}



//Using withRouter to handle redirect
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateUpdateForm));
