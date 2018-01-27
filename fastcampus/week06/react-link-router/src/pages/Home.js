import React from 'react';

const Home = ({match, location}) => {
  console.log(JSON.stringify({
    componentName: 'Home',
    pathname: location.pathname,
    path: match.path,
    url: match.url
   }))

    return (
        <div>
            <h2>
                홈
            </h2>
        </div>
    );
};

export default Home;