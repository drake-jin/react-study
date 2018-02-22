import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const { detail } = queryString.parse(location.search);
    return (
        <div>
            <h2>About {match.params.name}</h2>
            {detail && `detail: ${detail}`}
        </div>
    );
};

export default About;