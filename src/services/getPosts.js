import React from 'react'

function getPost() {
    return fetch('http://localhost:12345/posts/60e079746b01810df3a4ca91')
}

export default getPost;