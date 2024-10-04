import styled from "styled-components";

export const Memes = styled.div`
  display: flex;
  flex-flow: wrap;
  padding: 10px;
`;

export const CardContainer = styled.div`
  margin: 20px;
  padding: 20px;
  flex-direction: row;
  border: solid 2px black;
  border-radius: 10px;
  > img {
    height: 300px;
    width: 200px;
  }
`;

export const ShimmerContainer = styled.div`
  margin: 20px;
  padding: 20px;
  flex-direction: row;
  border: solid 2px black;
  border-radius: 10px;
`;

export const ImageShimmer = styled.div`
  height: 300px;
  width: 200px;
  background-color: #d6d6d6;
`;

export const TitleShimmer = styled.div`
  margin-top: 20px;
  height: 20px;
  width: 200px;
  background-color: #d6d6d6;
`;
