"use client";

import { ImageShimmer, ShimmerContainer, TitleShimmer } from "./styled";

const ShimmerCard = () => {
  return Array(10)
    .fill(0)
    .map(() => (
      <ShimmerContainer>
        <ImageShimmer></ImageShimmer>
        <TitleShimmer></TitleShimmer>
      </ShimmerContainer>
    ));
};

export default ShimmerCard;
