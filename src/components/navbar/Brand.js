import React from 'react'
import styled from "styled-components";

import logo from "../../assets/noun_sink_1101346.png";

const Brand = () => {
    return (
      <div>
        <Image src={logo}  alt="Bathroom Finder Logo" />,
        <Text style={{color: '#fdcb6e'}}>U-District Hygiene</Text>       
      </div>
    )
};

export default Brand

const Image = styled.img`
  height: 85%;
  margin: auto;
  float: left;
  display: flex;
`;

const Text = styled.div`
  height: 100%;
  margin: 4px 0;
  font-size: 40px;
  text-transform: uppercase;
  float: right;
  font-weight: 600;

//phone size
  @media only screen and (max-width: 400px) {
    font-size: 23px;
    margin-top: 8px;
  }
//tablet size
  @media only screen and (min-width: 401px) and (max-width: 960px) {
    font-size: 35px;
`;