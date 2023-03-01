import React, { Component } from "react";
import { Btn } from "./style.js";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      children,
      onClick,
      width,
      bg,
      br,
      height,
      color,
      hbg,
      ml,
      mt,
      mb,
      mr,
      pl,
      pt,
      pb,
      pr,
      border,
    } = this.props;

    return (
      <Btn
        width={width}
        height={height}
        color={color}
        bg={bg}
        hbg={hbg}
        ml={ml}
        mt={mt}
        mb={mb}
        mr={mr}
        pl={pl}
        pt={pt}
        pb={pb}
        pr={pr}
        br={br}
        border={border}
        onClick={onClick}>
        {children}
      </Btn>
    );
  }
}

export default Button;
