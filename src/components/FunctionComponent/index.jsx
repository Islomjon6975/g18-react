import React, { useState } from "react";

function FunctionComponent() {
  const [user, setUser] = useState({
    firstName: "Jack",
    lastName: "Smith",
  });

  const onFirstNameChange = () => {
    setUser({ ...user, firstName: "John", lastName: "Johnov" });
  };

  return (
    <div onClick={onFirstNameChange}>
      FunctionComponent, {user.firstName} {user.lastName}
    </div>
  );
}

export default FunctionComponent;
