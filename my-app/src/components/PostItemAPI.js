import React from 'react'

function PostItemAPI(props) {
    const savedPosts = props.savedPosts;
    return (
        savedPosts.map(({id, type, user, webformatURL, tags}) => {
            return (
                <div key={id}>
                    <p>Artwork type: {type}</p>
                    <p>Artist: {user}</p>
                    <img src={webformatURL} alt='{user}'></img>
                    <p>Tags: {tags}</p>
                </div>
            )
        })
    )
}

export default PostItemAPI