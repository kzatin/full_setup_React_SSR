import React from 'react'

 function NotFoundPage({ staticContext ={} }) {
     staticContext.notFound = true;
    return (
        <div>
            <h1>Oops, Route not found.</h1>
        </div>
    )
}

export default {
    component: NotFoundPage
}
