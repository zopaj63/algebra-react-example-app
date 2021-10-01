export default function LikeButtonComponent({ incrementCount, count }) {
  return <button onClick={incrementCount}>Likes: {count}</button>;
}
