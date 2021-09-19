import React from "react";
import NewsCard from "./Card";
import ButtonGroup from "./ButtonGroup";
import Footer from "../Footer";

function News() {
    return <>
        <div className="wrapper">
            <div className="container">
                <h1>News</h1>
                <ButtonGroup />
                <div>
                    <NewsCard />
                </div>
                <ButtonGroup />
            </div>
        </div>
        <Footer />
    </>;
}

export default News;