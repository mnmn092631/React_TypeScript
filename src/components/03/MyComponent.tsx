import React from "react";

interface propsType {
  children: string;
  name: string;
}

const MyComponent = ({ name, children }: propsType) => {
  return (
    <>
      <div>props.name : {name}</div>
      <div>children : {children}</div>
    </>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;
