import React from "react";
import styled from "styled-components";

const Middle = () => {
  return (
    <PageWrapper>
      <Header>Faster, Fairer, & Better Appraisals</Header>
      <Paragraph>
        We are here to get the job done. We remove barriers and create a
        seamless valuation experience that elevates appraisers, lenders, and
        homeowners.
      </Paragraph>
      <ButtonWrapper>
        <Button1>Order an Appraisal</Button1>
        <Button2>
          <Button3>Join Our Team</Button3>
        </Button2>
      </ButtonWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  margin-top: 3rem;
`;
const Header = styled.h1`
  font-family: "Aoboshi One", serif;
  font-weight: 400;
  font-style: normal;
  line-height: 5rem;
  width: 47%;
  font-size: 4rem;
`;
const Paragraph = styled.p`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.1rem;
  line-height: 2rem;
  width: 34%;
  opacity: 0.8;
  margin-top: -1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`;

const Button1 = styled.button`
  background-color: #2c5d3c;
  color: white;
  font-family: "Lato", sans-serif;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 400;
  font-style: normal;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  border: none;
  cursor: pointer;
  clip-path: polygon(
    20px 0%,
    calc(100% - 20px) 0%,
    100% 20px,
    100% 100%,
    0% 100%,
    0% 20px
  );
`;
const Button2 = styled.button`
  background-color: #2c5d3c;
  color: #2c5d3c;
  border: 1px solid #2c5d3c;
  height: rem;
  font-family: "Lato", sans-serif;
  padding: 0rem;
  font-weight: 400;
  border-radius: 0.5rem;
  font-style: normal;
  clip-path: url(#roundedPolygon);
  cursor: pointer;
  clip-path: polygon(
    10% 0%,
    90% 0%,
    100% 0%,
    100% 60%,
    90% 100%,
    10% 100%,
    0% 60%,
    0% 0%
  );
`;
const Button3 = styled.button`
  background-color: #ffffff;
  color: #2c5d3c;
  border: 1px solid #2c5d3c;
  font-family: "Lato", sans-serif;
  padding: 1rem 2rem;
  font-weight: 400;
  font-size: 1rem;
  border-radius: 0.5rem;
  font-style: normal;
  clip-path: url(#roundedPolygon);
  cursor: pointer;
  clip-path: polygon(
    10% 0%,
    90% 0%,
    100% 0%,
    100% 60%,
    90% 100%,
    10% 100%,
    0% 60%,
    0% 0%
  );
`;
export default Middle;
