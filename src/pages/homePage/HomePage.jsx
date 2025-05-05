import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button.jsx";
import Trustpliot from "/public/trustpilot-logo.svg?react"
import "./homePage.css";

const HomePage = () => {
    return (
        <section className="home-wrapper">
            <div className="home-page">
                <div className="home-left-content">
                    <h1>Beautiful food & takeaway, <span>delivered</span> to your door.</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                    <Link to={"/menu"}><Button type="regular">Place an Order</Button></Link>
                    <div className="stars-block">
                        <Trustpliot />
                        <h2><a href="/">4.8 out of 5</a> based on 2000+ reviews</h2>
                    </div>
                </div>

                <div className="home-right-content">
                    <div className="home-right-content__image">
                        <img src="/homePageImage.png" alt="Home Page Image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage;