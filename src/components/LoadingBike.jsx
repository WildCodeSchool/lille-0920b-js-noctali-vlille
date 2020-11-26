import React from "react";
import styled from "styled-components";

const CenteringGif = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LoaderGif = styled.img`
  height: 80vh;
  @media screen and (max-width: 450px) {
    width: auto;
    height: max-content;
  }
`;

const SpanStyled = styled.span`
  margin: 9vh;
`;

const LoadingBike = () => (
  <CenteringGif>
    <LoaderGif
      src="https://media.giphy.com/media/xT9IgGu6U72H8UoUj6/giphy.gif"
      alt="loading"
    />
    <SpanStyled>Loading...</SpanStyled>
  </CenteringGif>
);

export default LoadingBike;
