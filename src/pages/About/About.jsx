import React from 'react'
import AboutArticle from '../../components/AboutArticle/AboutArticle';
import AboutReviews from '../../components/AboutReviews/AboutReviews';

const About = () => {
    return (
        <div data-testid="about-page">
            <AboutArticle />
            <AboutReviews />
        </div>
    );
};

export default About