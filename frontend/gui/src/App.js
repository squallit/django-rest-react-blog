import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import * as actions from './store/actions/auth';


import CustomLayout from './containers/Layout';
import ArticleList from './containers/ArticleList';
import ArticleDetail from './containers/ArticleDetail';
import ArticleCreate from './containers/ArticleCreate';
import Login from './containers/Login';
import Signup from './containers/Signup';

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div className="App">
         <BrowserRouter>
          <CustomLayout {...this.props}>
            <div>
              <Route exact path='/' component={ArticleList} />
              <Route exact path='/articleDetail/:articleID' component={ArticleDetail} />
              <Route exact path='/new' component={ArticleCreate} />
              <Route exact path='/login/' component={Login} />
              <Route exact path='/signup/' component={Signup} />
            </div>
          </CustomLayout>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
