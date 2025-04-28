import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users/2/posts')
            .then((response) => {
                setPosts(response.data)
            }).catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>

            {posts?.map((post,index) => {
                return <p key={post.id}> {index+1}.  {post.title}</p>
            })}

        </div>
    )
}

export default Posts
