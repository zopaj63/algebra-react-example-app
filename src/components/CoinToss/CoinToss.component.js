export default function CoinTossComponent({ isHeads, tossCoin }) {
  return (
    <span>
      <button onClick={tossCoin}>Toss the coin</button>
      The result of the coin toss is: {isHeads && "heads"}
      {!isHeads && "tails"}
    </span>
  );
}
