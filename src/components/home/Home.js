import React from "react";
import Jumbotron from "./Jumbotron";
import ContentAccordion from "./ContentAccordion";
import ContentTabs from "./ContentTabs";
import Footer from "../Footer";
import HomeCarousel from "./Carousel";

function Home() {
    return <>
        <div className="wrapper position-relative">
            <HomeCarousel />
            <div className="container">
                <Jumbotron />
                <ContentAccordion />
                <ContentTabs />
            </div>
        </div>
        <Footer />
    </>
}

export default Home;