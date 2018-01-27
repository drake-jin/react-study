import React from 'react';

const Post = ({match, location}) => {
  console.log(JSON.stringify({

    componentName: 'Post',
    pathname: location.pathname,
    path: match.path,
    url: match.url
   }))

    return (
        <div>
            포스트 {match.params.id}
        </div>
    );
};

export default Post;