import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button.jsx";
import Trustpliot from "/public/trustpilot-logo.svg?react";
import styled from "styled-components";

const HomeWrapper = styled.section`
  background-color: #fff;
  background-image: url(/public/BGhome.svg);
  background-position: top right;
  background-repeat: no-repeat;
`;

const HomePage = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 0;

  @media (max-width: 1250px) {
    padding: 100px 20px;

    .home-left-content h1 {
      font-size: 2em;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

const HomeLeftContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: start;

  h1 {
    font-size: 3.7em;
    font-weight: 400;
    transition: all .5s ease-in-out;
  }

  span {
    color: #35B8BE;
    font-weight: 400;
  }

  p {
    letter-spacing: 0.36px;
    color: #546285;
    max-width: 540px;
    padding: 40px 0;
  }
`;

const StarsBlock = styled.div`
  padding-top: 30px;

  a {
    color: #35B8BE;
    text-decoration: none;
  }
`;

const HomeRightContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const HomePageComponent = () => {
  return (
    <HomeWrapper>
      <HomePage>
        <HomeLeftContent>
          <h1>Beautiful food & takeaway, <span>delivered</span> to your door.</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
          <Link to={"/menu"}>
            <Button type="regular">Place an Order</Button>
          </Link>
          <StarsBlock>
            <Trustpliot />
            <h2><a href="/">4.8 out of 5</a> based on 2000+ reviews</h2>
          </StarsBlock>
        </HomeLeftContent>

        <HomeRightContent>
          <div className="home-right-content__image">
            <img src="/homePageImage.png" alt="Home Page Image" />
          </div>
        </HomeRightContent>
      </HomePage>
    </HomeWrapper>
  );
};

export default HomePageComponent;
