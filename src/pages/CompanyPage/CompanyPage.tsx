import React from "react";
import "./companyPage.css";

const CompanyPage: React.FC = () => {
    return (
        <section className="company-wrapper">
            <div className="company-page">
                <div className="company-left-content">
                    <h1>About <span>Our Company</span></h1>
                    <p>
                        We are passionate about delivering delicious meals straight to your door. 
                        Our mission is to combine quality, taste, and convenience, so you can 
                        enjoy your favorite food anytime, anywhere. 
                    </p>
                    <p>
                        Since our founding, we’ve been committed to sustainable sourcing, 
                        local ingredients, and outstanding customer service. 
                        We believe food should not only taste good but also do good.
                    </p>
                </div>

                <div className="company-right-content">
                    <div className="company-right-content__image">
                        <img src="/homePageImage.png" alt="Our Company" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompanyPage;
