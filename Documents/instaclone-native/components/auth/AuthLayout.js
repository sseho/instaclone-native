import React from "react";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 0px 40px;
`;

const Logo = styled.Image`
  max-width: 50%;
  width: 100%;
  height: 100px;
  margin-top: 20px;
`;

export default function AuthLayout({ children }) {
  return (
    <Container>
      <Logo
        resizeMode="contain"
        source={require("../../assets/instalogo.png")}
      />
      {children}
    </Container>
  );
}