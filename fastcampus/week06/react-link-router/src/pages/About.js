import React from 'react';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom'

const About = ({location, match}) => {
    const query = queryString.parse(location.search);

    const Sample = ({match, location}) => {
      console.log(match, location)
      return (
        <div> Hello </div>
      )
    }
    const SampleWithRouter = withRouter(Sample)

    const detail = query.detail === 'true';
    console.log(JSON.stringify({
      componentName: 'About',
      pathname: location.pathname,
      path: match.path,
      url: match.url
     }))

    return (
        <div>
            <h2>About {match.params.name}</h2>
            {detail && 'detail: blahblah'}

            {<SampleWithRouter />}
        </div>
    );
};

export default About;