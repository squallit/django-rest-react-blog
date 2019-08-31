import React from 'react';
import { Link } from 'react-router-dom';

import { List, Avatar, Icon } from 'antd';



const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

//temporarily using https://loremflickr.com/320/240/dog for lerem photos}

const Articles = (props) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 10,
      }}
      dataSource={props.data}
      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
          extra={<img width={272} alt="logo" src="https://loremflickr.com/320/240/city" />}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title=<Link to={`/articleDetail/${item.id}`}>{item.title}</Link>
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
}

  export default Articles;
