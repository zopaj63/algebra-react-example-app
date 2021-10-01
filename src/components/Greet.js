import React from "react";
import PropTypes from "prop-types";

export default class Greet extends React.Component {
  render() {
    const { greeting, name, children } = this.props;

    return (
      <div>
        <span>{greeting} {name}</span> {children}
      </div>
    );
  }
}

Greet.propTypes = {
  greeting: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.any,
};
