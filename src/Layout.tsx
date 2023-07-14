import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  background: lightgray;
  padding: 16px;
  font-size: 24px;
`;

const Layout = () => {
  return (
    <div>
      <Header>Header</Header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
