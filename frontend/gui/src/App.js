import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'antd/dist/antd.css';


import CustomLayout from './containers/Layout';
import ArticleList from './containers/ArticleList';
import ArticleDetail from './containers/ArticleDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
         <BrowserRouter>
          <CustomLayout>
          <div>
            <Route exact path='/' component={ArticleList} />
            <Route exact path='/:articleID' component={ArticleDetail} />
          </div>
          </CustomLayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
