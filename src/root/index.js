import React from "react";
import Button from "../components/Button";
import Test from "../components/Test";

export const Root = () => {
  const handleClick = () => {
    alert("cliked");
  };
  return (
    <div>
      {/* <Button
        width="150"
        height="50"
        color="black"
        bg="#F9BF29"
        br="30"
        onClick={handleClick}>
        Shop Now
      </Button>
      <Button bg="transparent" color="black" br="30" border={"2px solid black"}>
        Login
      </Button>
      <Button>Register</Button>
      <Button>Show</Button> */}
      <Test />
    </div>
  );
};
