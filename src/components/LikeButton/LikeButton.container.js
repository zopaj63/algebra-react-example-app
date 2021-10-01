import { useState } from "react";
import LikeButtonComponent from "./LikeButton.component";

export default function LikeButtonContaier() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return <LikeButtonComponent count={count} incrementCount={incrementCount} />;
}
