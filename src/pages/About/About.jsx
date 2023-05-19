import React from 'react'
import AboutArticle from './AboutArticle/AboutArticle';
import AboutReviews from './AboutReviews/AboutReviews';

const About = () => {
    return (
        <div data-testid="about-page">
            <AboutArticle />
            <AboutReviews />
        </div>
    );
};

export default About