import React from "react";

function Button(props) {
  console.log(props, 'btn props')
  return (
    <button
      style={{ backgroundColor: props.bg, width: props.width, height: props.height }}
    >{props.children}</button>
  )
}

// export default Button
export {Button}