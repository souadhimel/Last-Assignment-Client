import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Gallery from '../Gallery/Gallery';
import Products from '../Products/Products';
import DisplayReview from '../Review/DisplayReview';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Gallery></Gallery>
            <Summary></Summary>
            <Brands></Brands>
            <DisplayReview></DisplayReview>
        </div>
    );
};

export default Home;