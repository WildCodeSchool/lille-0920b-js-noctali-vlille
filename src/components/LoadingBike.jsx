import React from "react";
import styled from "styled-components";

const CenteringGif = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
`;

const LoaderGif = styled.img`
  height: 80vh;
`;

const LoadingBike = () => (
  <CenteringGif>
    <LoaderGif
      src="https://media.giphy.com/media/xT9IgGu6U72H8UoUj6/giphy.gif"
      alt="loading"
    />
    <span>Loading...</span>
  </CenteringGif>
);

export default LoadingBike;
