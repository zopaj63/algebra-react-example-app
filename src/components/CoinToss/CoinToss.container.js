import React from "react";
import CoinTossComponent from "./CoinToss.component";

export default class CoinTossContainer extends React.Component {
  state = {
    isHeads: Math.random() > 0.5,
  };

  tossCoin = () => {
    this.setState({ isHeads: Math.random() > 0.5 });
  };

  render() {
    return (
      <CoinTossComponent
        isHeads={this.state.isHeads}
        tossCoin={this.tossCoin}
      />
    );
  }
}
