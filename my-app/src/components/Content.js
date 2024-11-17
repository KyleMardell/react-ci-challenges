import React, { Component } from 'react';
import css from './css/Content.module.css';
import {savedPosts} from '../posts.json';

export class Content extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
        <div className={css.Content}>
                <div className={css.TitleBar}><h1>My Photos</h1></div>
                <div className={css.SearchResults}>
                    {
                        savedPosts.map(post => {
                            return (
                                <div className={css.SearchItem}>
                                    <p>Title: {post.title}</p>
                                    <p>Artist: {post.artist}</p>
                                    <img src={post.image}></img>
                                    <p>Description: {post.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    )
  }
}

export default Content