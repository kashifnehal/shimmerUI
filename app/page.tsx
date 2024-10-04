"use client";
import React, { useEffect, useState } from "react";
import MemeCard from "./components/MemeCard";
import { Memes } from "./styled";
import ShimmerCard from "./components/ShimmerCard";

export default function Page() {
  const [memes, setMemes] = useState(null);

  const fetchMemes = async () => {
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();
    setMemes(json.memes);
  };

  useEffect(() => {
    fetchMemes();
  }, []);

  return (
    <Memes>
      {memes ? (
        memes.map((meme, index) => <MemeCard key={index} meme={meme} />)
      ) : (
        <ShimmerCard />
      )}
    </Memes>
  );
}
