import React from 'react';
import Articles from '../components/Articles';
import {fetchArticles, unfetchArticles} from '../store/actions/articles';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';

class ArticleList extends React.Component {
  state = {
    articles: []
  }

  componentDidUpdate(prevProps) {

    if (this.props.token !== prevProps.token) {

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
  }



  render() {
    return (
      <Articles data={this.props.articles}/>
    )
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


export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
