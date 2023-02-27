import React from "react";

function FunctionComponent(props) { // {title: 'functional'}
  return (
    <div style={{flex: '1'}}>
      <h1>{props.title} Component</h1>
    </div>
  )
}

export default FunctionComponent;