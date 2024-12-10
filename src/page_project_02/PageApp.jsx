import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CardContainer from "./components/CardContainer";
import './PageApp2.css';

function PageApp() {
    return (
        <div className="App">
            <h1>우리 주원이</h1>
            <Header />
            <Hero />
            <CardContainer />
        </div>
    );
}

export default PageApp;