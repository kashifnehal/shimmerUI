"use client";

import { ShimmerContainer } from "./styled";

const ShimmerCard = () => {
  return Array(10)
    .fill(0)
    .map(() => (
      <ShimmerContainer>
        <div></div>
      </ShimmerContainer>
    ));
};

export default ShimmerCard;
