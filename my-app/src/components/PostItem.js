import React from 'react'

function PostItem(props) {
    const savedPosts = props.savedPosts;
    return (
        savedPosts.map(({title, artist, image, description}) => {
            return (
                <div key={title}>
                    <p>Title: {title}</p>
                    <p>Artist: {artist}</p>
                    <img src={image} alt='{title}'></img>
                    <p>Description: {description}</p>
                </div>
            )
        })
    )
}

export default PostItem