import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  background: lightgray;
  padding: 16px;
  font-size: 24px;
`;

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goArticles = () => {
    navigate("/articles", { replace: true });
  };

  return (
    <div>
      <Header>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </Header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
