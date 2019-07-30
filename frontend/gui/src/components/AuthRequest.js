import { Empty, Button } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthRequest = () => {
  return (
    <Empty
      image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
      description={
        <span>
          In order to view or create posts, you must be logged in!
        </span>
      }
    >

      <Button type="primary">
        <NavLink to='/login/'> Log In or Create An Account </NavLink>
      </Button>
    </Empty>
  )
}

export default AuthRequest;
