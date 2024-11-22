import React, { useState, useEffect } from 'react'
import css from './css/Content.module.css';
import {savedPosts} from '../posts.json';
import PostItem from './PostItem';
import Loader from './Loader';

function ContentHooks() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [fetchedPosts, setFetchedPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setFetchedPosts(savedPosts);
      setFilteredPosts(savedPosts); // Initialize filtered posts
    }, 2000);

    return () => clearTimeout(timer); // Cleanup
  }, []);

  const handleChange = (event) => {
    const name = event.target.value.toLowerCase();
    const filtered = fetchedPosts.filter((post) =>
      post.title.toLowerCase().includes(name)
    );
    setFilteredPosts(filtered);
  };

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
                  onChange={handleChange} 
                />
                <h4>{filteredPosts.length}</h4>
              </form>
            </div>
            <div className={css.SearchResults}>
              {
                isLoaded ? (
                  <PostItem savedPosts={filteredPosts} className={css.SearchItem} />
                ) : (
                  <Loader />
                )
              }
                
            </div>
    </div>
)
}

export default ContentHooks