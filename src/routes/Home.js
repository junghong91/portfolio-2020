import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { FlexBox } from "../components/reusable/styles";

const HomeContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 75%;
  height: 600px;
  background-color: #f5f6fa;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
  margin-top: 5%;
  border-radius: 10px;
  .myPicture {
    display: block;
    width: 90%;
    height: 70%;
    margin: 20px auto;
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    opacity: 0.8;
  }
  .job {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.5);
    letter-spacing: 1.5px;
  }
  .name {
    font-size: 20px;
    font-weight: bold;
    margin-top: 5px;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    width: 80%;
    color: rgba(0, 0, 0, 0.7);
  }

  .label,
  .data {
    font-size: 15px;
    padding-bottom: 5px;
  }

  .label {
    font-weight: 600;
    text-align: right;
    margin-right: 30px;
    color: rgba(0, 0, 0, 0.7);
  }
  .data {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const IconBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
  background-color: #c8d6e5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  i {
    font-size: 50px;
    align-self: center;
    cursor: pointer;
    margin-top: 20px;
    transition: 0.5s;
  }
  .github:hover {
    color: #a2a2a2;
  }
  .facebook:hover {
    color: #4064ac;
  }
  .instagram:hover {
    color: #524694;
  }
  .google:hover {
    color: #0000f7;
  }
  .npm:hover {
    color: #c53635;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <FlexBox>
        <div className="flex-4" style={{ padding: "15px" }}>
          <img
            className="myPicture"
            alt="kobe"
            src="https://i.pinimg.com/564x/21/a4/79/21a4790bd7449306a63e115244e87712.jpg"
          />
        </div>
        <div className="flex-6" style={{ paddingTop: "30px" }}>
          <div className="job">FullStack Developer</div>
          <div className="name">Jung Hong</div>
          <br />
          <FlexBox>
            <div className="flex-3 label">Email</div>
            <div className="flex-6 data">junghong0512@gmail.com</div>
          </FlexBox>
          <FlexBox>
            <div className="flex-3 label">Phone</div>
            <div className="flex-6 data">010-9956-4014</div>
          </FlexBox>
          <FlexBox>
            <div className="flex-3 label">Date of Birth</div>
            <div className="flex-6 data">1991.05.12</div>
          </FlexBox>
          <FlexBox>
            <div className="flex-3 label">University</div>
            <div className="flex-6 data">Soongsil Univ.</div>
          </FlexBox>
          <FlexBox>
            <div className="flex-3 label">Major</div>
            <div className="flex-6 data">Electronic Engineering</div>
          </FlexBox>
          <FlexBox>
            <div className="flex-3 label">Skills</div>
            <div className="flex-6 data">
              HTMLㆍCSSㆍJavascriptㆍReactㆍNodeJS
            </div>
          </FlexBox>
        </div>
      </FlexBox>
      <IconBox>
        <Icon className="github" name="github" />
        <Icon className="facebook" name="facebook" />
        <Icon className="instagram" name="instagram" />
        <Icon className="google" name="google" />
        <Icon className="npm" name="npm" />
      </IconBox>
    </HomeContainer>
  );
};

export default Home;
