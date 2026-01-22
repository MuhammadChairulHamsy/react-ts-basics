import { useState } from "react";

export const useLike = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return {
    isLiked,
    handleLike,
  };
};

