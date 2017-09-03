import React from 'react';
import BigText from '../Components/BigText';
import PostLinks from '../Components/PostLinks'


const Posts = ({children}) => {
    return (
        <div>
            <BigText>포스트</BigText>
            <PostLinks/>
            {children}
        </div>

    );
};

export default Posts;
