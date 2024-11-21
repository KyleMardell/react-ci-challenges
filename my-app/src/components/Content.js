import React, { Component } from 'react';
import css from './css/Content.module.css';
import {savedPosts} from '../posts.json';
import PostItem from './PostItem';
import Loader from './Loader';

export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoaded: false,
          posts: [],
        }
    }
    
  getData() {
    setTimeout(() => {
      this.setState({
        isLoaded: true,
      })
    }, 2000)
  }

  componentDidMount() {
    this.getData()
    this.setState({
      posts: savedPosts,
    })
  }

  handleInput = (event) => {
    const name = event.target.value.toLowerCase()
    const filteredPosts = savedPosts.filter((post) => {
      return post.name.toLowerCase().includes(name)
    })
    this.setState({
      posts: filteredPosts
    })
  }

  render() {
    return (
        <div className={css.Content}>
                <div className={css.TitleBar}>
                  <h1>My Photos</h1>
                  <form>
                    <label htmlFor='searchInput'>Search: </label>
                    <input
                      type='text'
                      id='searchInput'
                      placeholder='search posts...'
                      onChange={(event) => this.handleInput(event)} 
                    />
                    <h4>{this.state.posts.length}</h4>
                  </form>
                </div>
                <div className={css.SearchResults}>
                  {
                    this.state.isLoaded ? (
                      <PostItem savedPosts={this.state.posts} className={css.SearchItem} />
                    ) : (
                      <Loader />
                    )
                  }
                    
                </div>
        </div>
    )
  }
}

export default Content