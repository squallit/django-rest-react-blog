import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import {
  Form, Input, Button, Radio,
} from 'antd';

class CustomForm extends React.Component {

  onFormSubmit = (event, requestType, articleID) => {

    //prevent page from rel{}
     // event.preventDefault();
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;
    console.log(title, content, requestType, articleID);

    switch(requestType) {
      case 'post':
        axios.post('http://127.0.0.1:8000/api/', {
          title : title, content : content
        })
        .then(res => {
          console.log(res);
          //redirect to home
          this.props.history.push('/');
        })
        .catch(err => console.error(err));
        break;
      case 'put':
          axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
            title : title, content : content
          })
          .then(res => console.log(res))
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

//Using withRouter to handle redirect
export default withRouter(CustomForm);
