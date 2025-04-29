import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../App.css'

function Posts({ selectedId }) {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        if (selectedId) {
            axios
                .get(`https://jsonplaceholder.typicode.com/users/${selectedId}/posts`)
                .then(response => {
                    setPosts(response.data)
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [selectedId])


    return (
        <div className='posts'>
            {posts?.map((post, index) => {
                return (
                    <div className='card' key={post.id}>
                        <p className='card-title'>{index + 1}. {post.title}</p>
                        {/* <p className='card-body'>{post.body}</p> */}
                    </div>
                )
            })}
        </div>
    )
}

export default Posts