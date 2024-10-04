"use client";

import { CardContainer } from "./styled";

const MemeCard = (data: any) => {
  const { url, author } = data.meme;
  return (
    <CardContainer>
      <img src={url} />
      <p>{author}</p>
    </CardContainer>
  );
};

export default MemeCard;
