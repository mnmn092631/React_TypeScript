import React from "react";
import styled from "styled-components";

interface TemplateType {
  children: React.ReactNode;
}

const TemplateWrapper = styled.div`
  width: 512px;
  margin: 6rem auto;
  border-radius: 4px;
  overflow: hidden;

  & > div:first-child {
    background: #22b8cf;
    color: ${props => props.theme.color.white};
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > div:nth-child(2) {
    background: ${props => props.theme.color.white};
  }
`;

const TodoTemplate = ({ children }: TemplateType) => {
  return (
    <TemplateWrapper>
      <div>일정 관리</div>
      <div>{children}</div>
    </TemplateWrapper>
  );
};

export default TodoTemplate;
