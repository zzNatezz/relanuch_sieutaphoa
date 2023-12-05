import React from "react";
import Header from "../../header/Header";
import Picture from "../../imagin/picture/Picture";
import './home.scss'
import BrowseCategoriesTemplate from "./component/BrowseCategories/BrowseCategoriesTemplate";
import TotalLavazzaTemplate from "./component/TotalLavazza/TotalLavazzaTemplate";

function Home() {
    return ( 
        <>
        <Header />
        <div className="main-container">
            <div className="home-banner">
                <img src={Picture.homeBanner} alt="banner" />
            </div>
            <div className="Browse-Categories">
                <h1 className="Categories-title">Browse Categories</h1>
                <div>
                    <BrowseCategoriesTemplate />
                </div>
            </div>
            <div className="home-total-lav">
                <h1 className="header-total-lav">Total LavAzza 1320</h1>
                <div>
                    <TotalLavazzaTemplate />
                </div>

            </div>
        </div>
        </>
        
    );
}

export default Home;