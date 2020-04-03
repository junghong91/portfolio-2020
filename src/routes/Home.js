import React from "react";
import styled from "styled-components";
import { FlexBox } from "../components/reusable/styles";

const HomeContainer = styled.div`
  margin: 0 auto;
  width: 70%;
  height: 65%;
  background-color: #f5f6fa;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
  margin-top: 5%;
  border-radius: 10px;
`;

const HomeImage = styled.img`
  display: block;
  width: 95%;
  margin: 10px auto;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  opacity: 0.8;
`;

const Home = () => {
  return (
    <HomeContainer>
      <FlexBox>
        <div className="flex-4">
          <HomeImage
            alt="car"
            src="https://i.pinimg.com/564x/21/a4/79/21a4790bd7449306a63e115244e87712.jpg"
          />
        </div>
        <div className="flex-6">hello home</div>
      </FlexBox>
    </HomeContainer>
  );
};

export default Home;
