import React, { useEffect, useState } from 'react'
import axios from 'axios';
import API_KEY from '../secrets';
import css from './css/Content.module.css';
import PostItemAPI from './PostItemAPI';
import Loader from './Loader';

function ContentAPIHooks() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    const [savedPosts, setSavedPosts] = useState([]);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = () => {
        axios.get('https://pixabay.com/api/?key='+API_KEY)
        .then(response => {
            const fetchedPosts = response.data.hits;
            setIsLoaded(true);
            setPosts(fetchedPosts);
            setSavedPosts(fetchedPosts);
        })
        .catch(error => {
            console.log("Error fetching images: ", error.message);
            setIsLoaded(true);
        })
    }

    const handleChange = (event) => {
        const name = event.target.value.toLowerCase()
        const filteredPosts = posts.filter((post) => {
            return post.user.toLowerCase().includes(name);
        })
        setSavedPosts(filteredPosts);
    }

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
                    onChange={(event) => handleChange(event)} 
                />
                <h4>{savedPosts.length}</h4>
                </form>
            </div>
            <div className={css.SearchResults}>
                {
                    isLoaded 
                    ? <PostItemAPI savedPosts={savedPosts} className={css.SearchItem} />
                    : <Loader />
                }  
            </div>
        </div>
    )
}

export default ContentAPIHooks